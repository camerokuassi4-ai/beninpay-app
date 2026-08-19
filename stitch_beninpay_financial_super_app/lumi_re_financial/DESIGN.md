---
name: Lumière Financial
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3c4a40'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6c7b70'
  outline-variant: '#bbcabe'
  surface-tint: '#006d43'
  primary: '#006d43'
  on-primary: '#ffffff'
  primary-container: '#00b875'
  on-primary-container: '#004126'
  inverse-primary: '#4cdf98'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#855300'
  on-tertiary: '#ffffff'
  tertiary-container: '#e08f00'
  on-tertiary-container: '#503100'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6dfcb2'
  primary-fixed-dim: '#4cdf98'
  on-primary-fixed: '#002111'
  on-primary-fixed-variant: '#005231'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  price-display:
    fontFamily: Sora
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -1px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style
The design system is engineered for the West African fintech landscape, prioritizing high legibility under direct sunlight and a sense of institutional trust mixed with modern agility. The brand personality is efficient, secure, and optimistic. 

The visual style follows a **Corporate / Modern** aesthetic with a **Mobile-First** priority. It leverages generous whitespace to reduce cognitive load during complex financial transactions. The interface utilizes high-contrast surfaces and crisp functional elements to ensure accessibility for a wide range of users, from urban professionals to rural merchants using the app in high-glare environments.

## Colors
The palette is anchored by a vibrant Emerald Green, symbolizing growth and prosperity within the UEMOA region. 

- **Primary (#00B875):** Used for main actions, success states, and brand-heavy components like balance cards.
- **Secondary/Deep Navy (#01172A):** Provides strong contrast for primary text and bottom navigation backgrounds.
- **Tertiary/Gold (#F59E0B):** Reserved for alerts, rewards, and high-priority warnings.
- **Neutral/Slate (#64748B):** Used for secondary information and supporting labels.

For Dark Mode, the interface shifts to a Slate-based dark theme (#0F172A) rather than pure black to maintain depth and reduce eye strain, while keeping the primary emerald green punchy.

## Typography
This design system uses a dual-font approach to balance character with utility. **Sora** is used for headlines and currency displays to provide a distinctive, tech-forward geometric feel. **Inter** is utilized for all body copy and UI labels to ensure maximum readability at small sizes.

On mobile devices, currency displays (Price-display) should never drop below 24px. Use "Body-md" for general transactional details and "Label-md" for micro-copy such as network carrier names (MTN, Moov).

## Layout & Spacing
The layout follows a **Fluid Grid** model optimized for mobile viewport widths (360px to 428px). A 4-column grid is used for mobile, expanding to 12 columns for tablet/desktop.

- **Margins:** 20px side margins provide a breathing room for the thumb-zone.
- **Grids:** Quick-action menus use a 4-column icon grid with 8px gutters.
- **Rhythm:** Vertical spacing between cards should consistently be 16px (md) to maintain a clear hierarchy of information blocks.

## Elevation & Depth
The design uses **Tonal Layers** combined with **Ambient Shadows**. Instead of heavy dropshadows, we use subtle, diffused shadows with a slight navy tint (#0F172A at 4-8% opacity) to ground elements without creating visual "dirt."

- **Level 0 (Surface):** Default background (#F8FAFC).
- **Level 1 (Cards):** White (#FFFFFF) with 4px blur shadow.
- **Level 2 (Modals/Popovers):** White (#FFFFFF) with 12px blur shadow and 0.5px Slate-200 border.
- **Interactive:** Hover or active states for buttons include a subtle increase in shadow spread to simulate physical lift.

## Shapes
The shape language is friendly and approachable, utilizing a consistent **16px (1rem)** corner radius for primary cards, buttons, and input fields. 

- **Small elements (Checkboxes, mini-chips):** 4px radius.
- **Medium elements (Buttons, Inputs, Action Cards):** 16px radius.
- **Large elements (Main Balance Card):** 24px radius to distinguish it as the core interface container.

## Components
### Balance Cards
The primary focal point. Uses the Emerald Green as a solid background or a subtle top-to-bottom gradient. Currency is set in Sora (Price-display) in White. Include a "Hide/Show" toggle and a secondary navy action button within the card for "Add Money."

### Quick Action Grids
Icons are 24px, contained in a 48px circular or rounded-square container with a light tint of the icon color. Labels use Body-sm and are centered.

### Transaction List Items
Standardized 72px height. Left-aligned network logos (MTN, Moov, Celtiis) are 40px circular avatars. Secondary text (Timestamp) is in Slate. Amounts are bold; negative amounts use Secondary (Navy), while credits use Primary (Green).

### Buttons
- **Primary:** Emerald background, White text, 56px height for mobile reachability.
- **Secondary:** Slate-100 background, Navy text.
- **Outline:** Transparent background, Navy border, 1.5px stroke.

### Input Fields
Floating label pattern. Background is White with a 1px Slate-200 border. On focus, the border shifts to 2px Primary Green.

### Bottom Navigation
Fixed 64px height. Navy background with White icons for high contrast. Active state indicated by a Primary Green bar above the icon or the icon changing to the Primary Green.