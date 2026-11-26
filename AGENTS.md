# Architecture rules
- Keep the V6 website in modular React sections with shared React state for illustrative experiences; this preserves reference fidelity without an iframe or executable imported HTML.
- Scope reference presentation styles to the V6 website and centralize its palette in global HSL tokens; this keeps existing app routes independent.
- Store public enquiries through a validated Cloud function in a private table; never present submission success before confirmed storage.
- Preserve existing marketing components and app routes during the V6 transition; prior revisions remain recoverable in repository history.- Build V7 as an isolated route (/v7) in src/components/v7 with styles scoped under .v7-site, reusing V6 lead capture; this keeps V6 comparable and restorable.

- Serve V14 as its own page entry (v14/index.html → src/main-v14.tsx) without global app styles, running the supplied V14 markup/CSS/script from src/components/v14 with tracked cleanup and real enquiry submission; this keeps pixel fidelity and leaves the current homepage untouched.
