import { z } from 'npm:zod@3.25.76';

export const leadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(200),
  interest: z.enum(['early_access', 'design_partner', 'ecosystem_partner', 'investment']),
  request_id: z.string().uuid(),
  website: z.string().max(0).optional(),
});