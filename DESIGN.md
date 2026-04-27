# Design Brief

## Direction
Meghana Suvarna Premium Portfolio — Tech-forward personal brand for a data-driven CS/Business Systems student, combining Stripe's premium minimalism, Notion's clarity, and futuristic data dashboard aesthetics.

## Tone
Futuristic startup investor-ready aesthetic with dark mode sophistication, neon accent highlights applied sparingly for maximum impact, and glassmorphic depth.

## Differentiation
Glowing neon borders on hover + gradient text on hero create an alive, premium portfolio that feels like a product, not a resume site.

## Color Palette

| Token        | OKLCH          | Role                                |
|--------------|----------------|-------------------------------------|
| background   | 0.09 0.005 280 | Near-black charcoal base            |
| foreground   | 0.92 0.01 280  | Soft light text for contrast        |
| card         | 0.14 0.01 280  | Elevated semi-transparent surfaces  |
| primary      | 0.68 0.22 296  | Vivid neon purple for CTAs          |
| accent       | 0.7 0.2 220    | Bright blue for highlights          |
| secondary    | 0.2 0.015 280  | Dark mid-tone for layers            |
| muted        | 0.2 0.015 280  | Subtle text and disabled states     |
| destructive  | 0.65 0.19 22   | Warm red for warnings               |
| border       | 0.24 0.01 280  | Ultra-dark subtle dividers          |

## Typography
- Display: Space Grotesk — bold, geometric, tech-forward hero headings and sections
- Body: DM Sans — clean, modern UI labels and paragraph text
- Scale: hero `text-5xl md:text-7xl`, h2 `text-3xl md:text-5xl`, label `text-sm uppercase tracking-widest`, body `text-base`

## Elevation & Depth
Multi-layered glass surfaces with backdrop-blur, thin bright borders on interactive elements, and neon glow shadows create depth without heavy drop-shadows.

## Structural Zones

| Zone    | Background              | Border                    | Notes                                   |
|---------|-------------------------|---------------------------|-----------------------------------------|
| Hero    | bg-background + blobs   | —                         | Full-viewport with floating gradients   |
| Header  | bg-card/50 glass        | border-primary/20         | Sticky, minimal nav                     |
| Content | bg-background alternates| border-white/5            | Sections with bg-card/5 for depth       |
| Cards   | bg-card/40 glass        | border-primary/30 on hover| Hover glow + lift effect                |
| Footer  | bg-secondary/5          | border-white/5            | Minimal spacing, reduced opacity        |

## Spacing & Rhythm
Generous vertical rhythm (6–8 section gaps), tight horizontal padding on cards (1.5rem), and 0.5rem micro-spacing for accessibility balance.

## Component Patterns
- Buttons: rounded-lg, gradient neon border on hover, no fill (transparent), smooth 0.3s transition, glow shadow
- Cards: rounded-lg, glass treatment, border-white/10 default + border-primary/40 on hover, backdrop-blur
- Badges: inline-flex, text-xs font-semibold, bg-primary/10 with text-primary, rounded-full

## Motion
- Entrance: Scroll fade-in via `animate-fade-in` (0.6s ease-out), stagger groups by 100ms
- Hover: Button glow + border highlight + 2px lift (translate-y), CTA icons float (6s cycle)
- Decorative: Floating blobs animate via `animate-blob` (15s infinite), hero gradient breathes via gradient stop shifts

## Constraints
- Never use raw hex or rgb colors; always consume OKLCH tokens
- Glow shadows use OKLCH with 0.3–0.4 opacity to prevent over-intensity
- Neon accents reserved for CTAs, hover states, and hero text; never entire backgrounds
- Backdrop-blur always 12px or more for readability over floating blobs

## Signature Detail
Dual-axis neon gradient borders that glow on hover, paired with Space Grotesk's geometric letterforms, creates a premium SaaS-grade portfolio that feels architectural and forward-thinking.

