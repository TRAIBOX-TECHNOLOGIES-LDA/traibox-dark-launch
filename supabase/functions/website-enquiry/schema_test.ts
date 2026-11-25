import { leadSchema } from './schema.ts';

const valid = { name: 'Test', email: 'test@example.com', company: 'Test company', request_id: '6688a9d5-134c-4401-8271-725230748a31' };
Deno.test('Early access and design partners remain distinguishable', () => {
  for (const interest of ['early_access', 'design_partner']) {
    const parsed = leadSchema.parse({ ...valid, interest });
    if (parsed.interest !== interest) throw new Error('Interest was lost');
  }
});
Deno.test('Invalid interest cannot be saved', () => {
  if (leadSchema.safeParse({ ...valid, interest: 'unknown' }).success) throw new Error('Invalid interest accepted');
});
Deno.test('Invalid emails cannot be saved', () => {
  if (leadSchema.safeParse({ ...valid, interest: 'early_access', email: 'invalid' }).success) throw new Error('Invalid email accepted');
});
Deno.test('Honeypot submissions cannot be saved', () => {
  if (leadSchema.safeParse({ ...valid, interest: 'early_access', website: 'spam' }).success) throw new Error('Spam accepted');
});