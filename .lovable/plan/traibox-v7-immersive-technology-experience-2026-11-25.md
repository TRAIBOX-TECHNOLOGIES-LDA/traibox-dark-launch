# TRAIBOX V7 — Immersive Technology Experience

V7 is built as a separate preview page at `/v7`. The current V6 homepage stays live at `/` for side-by-side comparison. Nothing gets published.

## Safety first
- Save a checkpoint of V6 before starting, so it can always be restored.
- Keep the official symbol, wordmarks and favicon as they are.
- V7 reuses the existing Request early access and Become an early partner forms and their storage. No new form logic.
- Any demo screen carries an "Illustrative" label, so it is clear that it is not a live product.

## The experience: one continuous story
```text
01 Hero        a dark, connected world → zoom into one trade, which becomes a deal
02 Engine      a 3D TRAIBOX engine based on the symbol → exploded / X-ray view of its layers
03 TRADE.FLOW.GROW.  one pinned scroll journey: intent → orchestration → scale
04 Globe       an interactive globe showing information, decisions and value moving between businesses
05 Platform    5 interactive product panels: Trade, Intelligence, Network, Finance, Clearance
06 Connect     "Keep your stack. Connect the work." with integrations plugging into the engine
07 Proof/Trust security posture, written as short commitments (no metrics, no certifications)
08 Conversion  Request early access · Become an early partner
```

### Key moments
1. **Hero**: a large editorial headline, "Make trade flow. Everywhere.", sits over an atmospheric globe of business nodes. As you scroll, the camera moves in on one route, and its arcs come together into a deal card (buyer, seller, terms, status).
2. **Signature engine**: a 3D form built from the square-T geometry of the symbol, made of stacked layers (Interfaces, Agents, Policy and Compliance, Finance Rails, Proof Ledger). Scrolling or clicking pulls it apart into an exploded view. An "X-ray" toggle shows the internal data paths, and hovering a layer shows a one-line explanation.
3. **TRADE. FLOW. GROW.**: one sticky stage that changes as you scroll. The three words act as a large progress rail, while the scene changes from intent to an orchestrated flow to expanding networks.
4. **Globe**: you can drag to rotate it. Arcs are colour-coded by what they carry: information (mist blue), decisions (titanium) and value (champagne). Clicking a hub opens a short story card. Nothing about ships or shipments.
5. **Platform**: a tabbed product "window" with realistic mock interfaces for each pillar, such as a deal room, an AI risk brief, a partner graph, funding offers compared, and a compliance checklist with approval steps.

## Look and feel
- **Colour progression down the page**: obsidian (hero) → atmospheric blue (engine/globe) → glacial mist → warm porcelain (platform/connect) → sand/champagne accents at conversion. Glow is kept minimal: depth comes from gradients, fog and lighting.
- **Typography**: large, confident editorial headlines with tight tracking, monospaced technical labels and Inter body text. A small dev toggle switches headings between an editorial display face and Inter, so the two can be compared.
- **Motion**: scroll-linked camera moves, pinned scenes, perspective tilts and particles moving along paths. Standard fade-ins are avoided. With reduced motion, every scene shows a static final state.

## Copy
Short and human, for example: "Every trade, one flow." / "From first message to final proof." The existing promises are kept. No numbers or unverified claims.

## Technical details
- New route `/v7` → `src/pages/V7.tsx`, with components in `src/components/v7/` and styles scoped under `.v7-site`. Colour tokens are added as HSL to `index.css`.
- `three`, `@react-three/fiber@^8.18` and `@react-three/drei@^9.122` (React 18) are used for the engine and globe. Both load lazily and only when visible, use Lightformer lighting (no remote HDR), and have an SVG fallback when WebGL is missing or reduced motion is on.
- Scroll-driven motion uses framer-motion `useScroll`/`useTransform`. Per-frame state is kept in refs.
- Accessibility: keyboard controls for the engine layers, globe hubs and platform tabs, plus text alternatives for every scene.
- Checks: Playwright screenshots at desktop and mobile, a check that the 3D scenes render, and a test enquiry submitted through the reused form.
- `AGENTS.md` gets a V7 isolation rule, and the roadmap is updated.

## Not included
Publishing, replacing V6 at `/`, and any changes to the Request access or app pages.
