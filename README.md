# @arcadia/aether 🌬️

> **Alpha** — This library is in early development. APIs will change. Use at your own risk.

iOS-first React Native component library built as a [Tailwind CSS](https://tailwindcss.com/) / [NativeWind](https://www.nativewind.dev/) preset for [Expo](https://expo.dev/).

Named after the Greek primordial deity of light and the pure upper air that gods breathe — Aether sits between your app and the design layer, providing the atmosphere for your UI.

> **iOS only.** This library targets iOS exclusively. I'm building it for my own projects where iOS is the only platform I care about. Android and web are not supported and won't be.

## What it does

 **[Tailwind Preset](docs/colors.md)** — HSLA color token system (25+ semantic tokens) with light and dark themes
 **[Theme Providers](docs/provider.md)** — automatic dark mode via NativeWind CSS variables (`vars()` API)
 **Typography** — [Heading](src/ui/typography/heading/heading.md), [Text](src/ui/typography/text/text.md), [Caption](src/ui/typography/caption/caption.md) components following iOS HIG sizing
 **[Layout](src/ui/layout/layout.md)** — VStack, HStack polymorphic flexbox primitives
 **[Icons](src/ui/icons/icon-symbol.md)** — IconSymbol with SF Symbols (iOS), theme color integration, separate entrypoint
 **Buttons** — [Button](src/ui/buttons/button/button.md) (5 variants, shimmer, loading), [GlassButton](src/ui/buttons/glass-button/glass-button.md) (iOS 26+ Liquid Glass), [HighlightTappable](src/ui/buttons/highlight-tappable/highlight-tappable.md)
 **[Surface](src/ui/surface/surface.md)** — Layered backgrounds with visual hierarchy (solid, glass, fog variants)
 **[Card](src/ui/card/card.md)** — Compound card component (header, body, footer, image) with optional pressable
 **Forms** — [TextField](src/ui/forms/text-field/text-field.md) compound input (label, validation, clearable, multiline, animated focus) and [ErrorView](src/ui/forms/error-view/error-view.md)
 **[List](src/ui/list/list.md)** — Compound list component (items, sections, collapsible, accessories, chevron) following iOS Settings patterns
 **[Skeleton](src/ui/skeleton/skeleton.md)** — Pulsing loading placeholder with theme-aware colors
 **[ScrollFade](src/ui/scroll-fade/scroll-fade.md)** — Gradient fade overlay for scroll container edges
 **[AnimationWrapper](src/ui/animation-wrapper/animation-wrapper.md)** — Declarative enter/exit/layout animation wrapper
 **[React Navigation](docs/hooks.md)** — theme integration hook
 **[Inter Font](docs/hooks.md)** — built-in font loading for the Inter family
 **[Utilities](docs/utilities.md)** — class-name merging (`cn`, `cnx`), HSLA color manipulation, compound component child extraction

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
