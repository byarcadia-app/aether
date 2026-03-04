<p align="center">
  <img src=".github/assets/banner.png" alt="Aether" />
</p>

<h1 align="center">@byarcadia-app/aether 🌬️</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@byarcadia-app/aether"><img src="https://img.shields.io/npm/v/@byarcadia-app/aether?style=flat" alt="npm version" /></a>&nbsp;<a href="https://github.com/ArcadiaApp/aether-ui/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@byarcadia-app/aether?style=flat" alt="License" /></a>&nbsp;<img src="https://img.shields.io/badge/platform-iOS-black?style=flat" alt="iOS only" />&nbsp;<img src="https://img.shields.io/badge/status-alpha-orange?style=flat" alt="Alpha" />
</p>

<p align="center">
  iOS-first React Native component library for <a href="https://expo.dev/">Expo</a> — powered by a built-in <a href="https://tailwindcss.com/">Tailwind CSS</a> / <a href="https://www.nativewind.dev/">NativeWind</a> preset.
</p>

Named after the Greek primordial deity of light and the pure upper air that gods breathe — Aether sits between your app and the design layer, providing the atmosphere for your UI.

> **iOS only.** This library targets iOS exclusively. I'm building it for my own projects where iOS is the only platform I care about. Android and web are not supported and won't be.

## What it does

 - **[Tailwind Preset](docs/colors.md)** — HSLA color token system (25+ semantic tokens) with light and dark themes
 - **[Theme Providers](docs/provider.md)** — automatic dark mode via NativeWind CSS variables (`vars()` API), global animation control with iOS Reduce Motion support
 - **Typography** — [Heading](src/ui/typography/heading/heading.md), [Text](src/ui/typography/text/text.md), [Caption](src/ui/typography/caption/caption.md) components following iOS HIG sizing
 - **[Layout](src/ui/layout/layout.md)** — VStack, HStack polymorphic flexbox primitives
 - **[Icons](src/ui/icons/icon-symbol.md)** — IconSymbol with SF Symbols (iOS), theme color integration, separate entrypoint
 - **Buttons** — [Button](src/ui/buttons/button/button.md) (5 variants, shimmer, loading), [GlassButton](src/ui/buttons/glass-button/glass-button.md) (iOS 26+ Liquid Glass), [HighlightTappable](src/ui/buttons/highlight-tappable/highlight-tappable.md)
 - **[Surface](src/ui/surface/surface.md)** — Layered backgrounds with visual hierarchy (solid, glass, fog variants)
 - **[Card](src/ui/card/card.md)** — Compound card component (header, body, footer, image) with optional pressable
 - **Forms** — [TextField](src/ui/forms/text-field/text-field.md) compound input (label, validation, clearable, multiline, animated focus) and [ErrorView](src/ui/forms/error-view/error-view.md)
 - **[List](src/ui/list/list.md)** — Compound list component (items, sections, collapsible, accessories, chevron) following iOS Settings patterns
 - **[Skeleton](src/ui/skeleton/skeleton.md)** — Pulsing loading placeholder with theme-aware colors
 - **[ScrollFade](src/ui/scroll-fade/scroll-fade.md)** — Gradient fade overlay for scroll container edges
 - **[AnimationWrapper](src/ui/animation-wrapper/animation-wrapper.md)** — Declarative enter/exit/layout animation wrapper
 - **[React Navigation](docs/hooks.md)** — theme integration hook
 - **[Inter Font](docs/hooks.md)** — built-in font loading for the Inter family
 - **[Utilities](docs/utilities.md)** — class-name merging (`cn`, `cnx`), HSLA color manipulation, compound component child extraction

## Inspiration

This project draws heavily from:

- [React Aria](https://react-spectrum.adobe.com/react-aria/) — Adobe's headless UI primitives. The gold standard for accessible component architecture and composable API design.
- [HeroUI Native](https://github.com/heroui-inc/heroui-native) — A React Native component library built on NativeWind and tailwind-variants. Closest to what Aether aims to be in terms of styling approach.
- [RN Primitives](https://github.com/roninoss/rn-primitives) — Unstyled, accessible primitives for React Native.
- [React Native Reusables](https://github.com/founded-labs/react-native-reusables) — shadcn/ui patterns adapted for React Native.

## Documentation

- [Installation & Quick Start](docs/installation.md)
- [AetherProvider](docs/provider.md)
- [Components](docs/components.md)
- [Hooks](docs/hooks.md)
- [Utilities](docs/utilities.md)
- [Color Tokens](docs/colors.md)

## AI Tools

This library ships with built-in AI agent support:

- **[Claude Code Skills](https://skills.sh)** — `aether-ui` (component API reference) and `aether-setup` (installation guide). Install via [skills.sh](https://skills.sh) or add `skills/` to your project.
- **[Context7](https://context7.com)** — AI agents can query up-to-date docs and usage patterns via `context7.json`. Use `use context7` in your prompt to activate.

## Example App

A complete working integration lives in `example/`. It demonstrates provider setup, Storybook integration, and all component variants.

```bash
pnpm example:start    # Start Expo dev server
pnpm example:ios      # Run on iOS simulator
```

## Requirements

| Dependency               | Version     |
| ------------------------ | ----------- |
| React                    | >= 18       |
| React Native             | >= 0.72     |
| NativeWind               | >= 4        |
| react-native-reanimated  | >= 3        |
| @callstack/liquid-glass  | >= 0.7      |
| expo-linear-gradient     | >= 14       |
| expo-haptics             | >= 14       |
| Tailwind CSS             | ^3.3.5      |
| @expo-google-fonts/inter | >= 0.4.2    |
| Expo                     | recommended |

## License

MIT
