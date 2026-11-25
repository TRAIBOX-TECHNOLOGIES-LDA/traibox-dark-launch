import { useRef, useState, type FormEvent } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useV6 } from './ExperienceContext';
import { V6Button } from './V6Button';
import { leadSchema } from './lead-schema';

export function AccessFields({ initialInterest = 'early_access', onClose }: { initialInterest?: string; onClose?: () => void }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [error, setError] = useState('');
  const requestId = useRef(crypto.randomUUID());
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = leadSchema.safeParse({ name: form.get('name'), email: form.get('email'), company: form.get('company'), interest: form.get('interest'), website: form.get('website'), request_id: requestId.current });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? 'Please check your details.'); return; }
    setStatus('sending'); setError('');
    try {
      const { data, error: failure } = await supabase.functions.invoke('website-enquiry', { body: parsed.data });
      if (failure || !data?.success) throw new Error('We couldn’t save your request. Please try again.');
      setStatus('success');
    } catch { setError('We couldn’t save your request. Please try again.'); setStatus('idle'); }
  }
  if (status === 'success') return <div role="status"><h2>Request received.</h2><p>Your interest has been saved. Thank you for helping shape the next era of trade.</p>{onClose && <V6Button className="btn" onClick={onClose}>Return to website</V6Button>}</div>;
  return <><div className="mono">TRAIBOX / Early access</div><h2>Let's move trade forward.</h2><p>Tell us a little about your business.</p>
    <form onSubmit={submit}>
      <label htmlFor="access-name">Full name</label><input id="access-name" name="name" autoComplete="name" maxLength={100} required />
      <label htmlFor="access-email">Work email</label><input id="access-email" name="email" type="email" autoComplete="email" maxLength={255} required />
      <label htmlFor="access-company">Company</label><input id="access-company" name="company" autoComplete="organization" maxLength={200} required />
      <label htmlFor="access-interest">I'm interested in</label><select id="access-interest" name="interest" defaultValue={initialInterest}>
        <option value="early_access">Using TRAIBOX for my business</option><option value="design_partner">Becoming a design partner</option><option value="ecosystem_partner">Financial or ecosystem partnership</option><option value="investment">Investment opportunities</option>
      </select>
      <div className="lead-honeypot" aria-hidden="true"><label htmlFor="access-website">Website</label><input id="access-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <V6Button className="btn submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Saving your request…' : 'Send request ↗'}</V6Button>
      <p className="note">Your details will be used to respond to your interest in TRAIBOX.</p>
    </form></>;
}

export function AccessDialog() {
  const ctx = useV6();
  const [session, setSession] = useState(0);
  return <dialog id="access" ref={ctx.dialogRef} aria-label="Request early access or become an early partner" onClose={() => setSession(value => value + 1)} onClick={event => { if (event.target === event.currentTarget) ctx.dialogRef.current?.close(); }}>
    <div className="dialog-content"><V6Button aria-label="Close" className="close" onClick={() => ctx.dialogRef.current?.close()}>×</V6Button>
    <AccessFields key={`${session}-${ctx.interest}`} initialInterest={ctx.interest} onClose={() => ctx.dialogRef.current?.close()} /></div>
  </dialog>;
}