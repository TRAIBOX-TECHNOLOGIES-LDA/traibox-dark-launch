import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(100),
  email: z.string().trim().email('Please enter a valid work email.').max(255),
  company: z.string().trim().min(1, 'Please enter your company.').max(200),
  interest: z.enum(['early_access', 'design_partner', 'ecosystem_partner', 'investment']),
  request_id: z.string().uuid(),
  website: z.string().max(0).optional(),
});