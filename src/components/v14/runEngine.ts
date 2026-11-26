// Runs the supplied V14 interaction script against the mounted markup, tracking every
// global listener, timer, frame and observer so they are all released on unmount.
export function runEngine(source: string, submit: (form: HTMLFormElement) => Promise<boolean>) {
  let disposed = false;
  const cleanups: Array<() => void> = [];
  const track = <T extends EventTarget>(target: T) => new Proxy(target, {
    get(obj, key) {
      if (key === 'addEventListener') return (type: string, fn: EventListenerOrEventListenerObject, opts?: boolean | AddEventListenerOptions) => {
        obj.addEventListener(type, fn, opts); cleanups.push(() => obj.removeEventListener(type, fn, opts));
      };
      const value = Reflect.get(obj, key, obj);
      return typeof value === 'function' ? value.bind(obj) : value;
    },
    set(obj, key, value) { return Reflect.set(obj, key, value, obj); },
  });
  const raf = (cb: FrameRequestCallback) => { if (disposed) return 0; const id = window.requestAnimationFrame(t => { if (!disposed) cb(t); }); cleanups.push(() => cancelAnimationFrame(id)); return id; };
  const interval = (cb: () => void, ms?: number) => { const id = window.setInterval(cb, ms); cleanups.push(() => clearInterval(id)); return id; };
  const timeout = (cb: () => void, ms?: number) => { const id = window.setTimeout(() => { if (!disposed) cb(); }, ms); cleanups.push(() => clearTimeout(id)); return id; };
  class TrackedObserver extends IntersectionObserver {
    constructor(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) { super(cb, opts); cleanups.push(() => this.disconnect()); }
  }
  const run = new Function('window', 'document', 'requestAnimationFrame', 'setInterval', 'setTimeout', 'IntersectionObserver', 'addEventListener', '__submit', source);
  const win = track(window);
  run(win, track(document), raf, interval, timeout, TrackedObserver, win.addEventListener, submit);
  return () => { disposed = true; cleanups.splice(0).forEach(fn => { try { fn(); } catch { /* already released */ } }); };
}
