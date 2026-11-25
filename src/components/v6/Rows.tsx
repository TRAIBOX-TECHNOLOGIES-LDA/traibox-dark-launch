export function Rows({ items, states = true }: { items: string[]; states?: boolean }) {
  return <>{items.map(item => {
    const [label, value] = item.split('|');
    const status = states ? (/Pending|Mismatch|Required|Not initiated|Review required/.test(value ?? '') ? 'warn' : 'ok') : '';
    return <div className="check" key={label}><span>{label}</span><span className={status}>{value}</span></div>;
  })}</>;
}