import { supabase } from '@/integrations/supabase/client';
import { leadSchema } from '@/components/v6/lead-schema';

// V14 "I'm interested in" options, in order; option 2 is the early-partner path.
const INTERESTS = ['early_access', 'design_partner', 'ecosystem_partner', 'investment'] as const;

export async function submitEnquiry(form: HTMLFormElement): Promise<boolean> {
  const value = (id: string) => (form.querySelector<HTMLInputElement>(`#${id}`)?.value ?? '');
  const errorBox = form.querySelector<HTMLElement>('#form-error');
  const button = form.querySelector<HTMLButtonElement>('button[type=submit]');
  const showError = (msg: string) => { if (errorBox) { errorBox.textContent = msg; errorBox.hidden = false; } };
  if (errorBox) errorBox.hidden = true;
  const select = form.querySelector<HTMLSelectElement>('#interest');
  const parsed = leadSchema.safeParse({
    name: value('name'), email: value('email'), company: value('business'),
    interest: INTERESTS[select?.selectedIndex ?? 0] ?? 'early_access', request_id: crypto.randomUUID(),
  });
  if (!parsed.success) { showError(parsed.error.issues[0]?.message ?? 'Please check your details.'); return false; }
  const label = button?.textContent;
  if (button) { button.disabled = true; button.textContent = 'Sending…'; }
  try {
    const { data, error } = await supabase.functions.invoke('website-enquiry', { body: parsed.data });
    if (error || !data?.success) throw new Error('failed');
    return true;
  } catch {
    showError('We couldn’t save your request. Please try again.');
    return false;
  } finally {
    if (button) { button.disabled = false; button.textContent = label ?? 'Send request'; }
  }
}
