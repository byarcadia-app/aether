# @arcadia/aether 🌬️

> **Alpha** — This library is in early development. APIs will change. Use at your own risk.

iOS-first React Native component library built as a [Tailwind CSS](https://tailwindcss.com/) / [NativeWind](https://www.nativewind.dev/) preset for [Expo](https://expo.dev/).

Named after the Greek primordial deity of light and the pure upper air that gods breathe — Aether sits between your app and the design layer, providing the atmosphere for your UI.

> **iOS only.** This library targets iOS exclusively. I'm building it for my own projects where iOS is the only platform I care about. Android and web are not supported and won't be.

## What it does

- **Tailwind Preset** — HSLA color token system (25+ semantic tokens) with light and dark themes
- **Theme Providers** — automatic dark mode via NativeWind CSS variables (`vars()` API)
- **Typography** — Heading, Text, Caption components following iOS HIG sizing
- **Layout** — VStack, HStack polymorphic flexbox primitives
- **Icons** — IconSymbol with SF Symbols (iOS), theme color integration, separate entrypoint
- **Buttons** — Button (5 variants, shimmer, loading), GlassButton (iOS 26+ Liquid Glass), HighlightTappable
- **Surface** — Layered backgrounds with visual hierarchy (solid, glass, fog variants)
- **Card** — Compound card component (header, body, footer, image) with optional pressable
- **List** — Compound list component (items, sections, collapsible, accessories, chevron) following iOS Settings patterns
- **Skeleton** — Pulsing loading placeholder with theme-aware colors
- **ScrollFade** — Gradient fade overlay for scroll container edges
- **AnimationWrapper** — Declarative enter/exit/layout animation wrapper
- **React Navigation** — theme integration hook
- **Inter Font** — built-in font loading for the Inter family
- **Utilities** — class-name merging (`cn`, `cnx`) and HSLA color manipulation

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
