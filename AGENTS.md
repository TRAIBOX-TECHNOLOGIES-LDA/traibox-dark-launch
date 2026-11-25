# Architecture rules
- Keep the V6 website in modular React sections with shared React state for illustrative experiences; this preserves reference fidelity without an iframe or executable imported HTML.
- Scope reference presentation styles to the V6 website and centralize its palette in global HSL tokens; this keeps existing app routes independent.
- Store public enquiries through a validated Cloud function in a private table; never present submission success before confirmed storage.
- Preserve existing marketing components and app routes during the V6 transition; prior revisions remain recoverable in repository history.