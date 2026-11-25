CREATE TABLE public.website_enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
 company text NOT NULL CHECK (char_length(company) BETWEEN 1 AND 200),
 interest text NOT NULL CHECK (interest IN ('early_access','design_partner','ecosystem_partner','investment')),
 request_id uuid NOT NULL UNIQUE
);
GRANT ALL ON public.website_enquiries TO service_role;
ALTER TABLE public.website_enquiries ENABLE ROW LEVEL SECURITY;