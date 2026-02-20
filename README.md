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
- **React Navigation** — theme integration hook
- **Inter Font** — built-in font loading for the Inter family
- **Utilities** — class-name merging (`cn`, `cnx`) and HSLA color manipulation

## Inspiration

This project draws heavily from:

- [React Aria](https://react-spectrum.adobe.com/react-aria/) — Adobe's headless UI primitives. The gold standard for accessible component architecture and composable API design.
- [HeroUI Native](https://github.com/heroui-inc/heroui-native) — A React Native component library built on NativeWind and tailwind-variants. Closest to what Aether aims to be in terms of styling approach.
- [RN Primitives](https://github.com/roninoss/rn-primitives) — Unstyled, accessible primitives for React Native.
- [React Native Reusables](https://github.com/founded-labs/react-native-reusables) — shadcn/ui patterns adapted for React Native.

## Installation

@arcadia/aether is a preset on top of NativeWind. Installation means setting up NativeWind in your Expo project and adding the aether preset.

For the full NativeWind setup reference, see the [official installation guide](https://www.nativewind.dev/docs/getting-started/installation).

### 1. Install dependencies

```bash
npx expo install nativewind react-native-reanimated react-native-safe-area-context
npm install --save-dev tailwindcss@^3.4.17
```

### 2. Install @arcadia/aether

```bash
npm install @arcadia/aether @expo-google-fonts/inter
```

### 3. Configure Tailwind (tailwind.config.js)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@arcadia/aether/dist/**/*.{js,mjs}",
  ],
  presets: [
    require("nativewind/preset"),
    require("@arcadia/aether/tailwind-preset").preset,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4. Create global CSS (global.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Configure Babel (babel.config.js)

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

### 6. Configure Metro (metro.config.js)

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

### 7. Import CSS in your root layout

```tsx
import "./global.css";
```

### 8. TypeScript (nativewind-env.d.ts)

```ts
/// <reference types="nativewind/types" />
```

## Quick Start

Wrap your app with `AetherProvider`, load fonts with `useInterFonts`, and optionally integrate React Navigation theming:

```tsx
import { AetherProvider, useInterFonts, useNavigationTheme } from "@arcadia/aether";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { fontsLoaded, fontError } = useInterFonts();
  const navigationTheme = useNavigationTheme();

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AetherProvider>
      <ThemeProvider value={navigationTheme}>
        <Stack />
      </ThemeProvider>
    </AetherProvider>
  );
}
```

## Components

### AetherProvider

Root provider. Composes ThemeProvider (CSS variable injection) and TextComponentProvider (global text config).

```tsx
<AetherProvider
  textConfig={{ maxFontSizeMultiplier: 2.0 }}
  colorPalette={{
    light: { primary: "hsla(280, 70%, 58%, 1)" },
    dark: { primary: "hsla(280, 60%, 65%, 1)" },
  }}
>
  <App />
</AetherProvider>
```

| Prop | Type | Description |
|------|------|-------------|
| `textConfig` | `TextProviderProps` | Global text accessibility settings |
| `colorPalette` | `ColorPaletteConfig` | Light/dark color overrides |

### Heading

Heading levels 1-4 mapping to iOS HIG: Large Title (34pt), Title 1 (28pt), Title 2 (22pt), Title 3 (20pt).

```tsx
import { Heading } from "@arcadia/aether";

<Heading variant={1}>Large Title</Heading>
<Heading variant={2} color="primary">Title 1</Heading>
<Heading variant={3} weight="medium">Title 2</Heading>
<Heading variant={4}>Title 3</Heading>
```

| Prop | Values | Default |
|------|--------|---------|
| `variant` | `1` \| `2` \| `3` \| `4` | `1` |
| `weight` | `regular` \| `medium` \| `semibold` \| `bold` | per iOS spec |
| `color` | `default` \| `primary` \| `secondary` \| `muted` \| `success` \| `warning` \| `danger` \| `info` \| `inherit` | `default` |

### Text

Body text variants following iOS HIG: headline (17pt semibold), body (17pt), callout (16pt), subhead (15pt), footnote (13pt).

```tsx
import { Text } from "@arcadia/aether";

<Text>Default body text</Text>
<Text variant="headline">Important Message</Text>
<Text variant="callout" color="muted">Description</Text>
<Text variant="footnote">Fine print</Text>

{/* On colored backgrounds */}
<View className="bg-primary">
  <Text color="primary-foreground">Contrast text</Text>
</View>
```

| Prop | Values | Default |
|------|--------|---------|
| `variant` | `headline` \| `body` \| `callout` \| `subhead` \| `footnote` | `body` |
| `weight` | `regular` \| `medium` \| `semibold` \| `bold` | per iOS spec |
| `color` | base colors + `primary-foreground` \| `secondary-foreground` \| `success-foreground` \| `warning-foreground` \| `danger-foreground` \| `info-foreground` | `default` |

### Caption

Small text for metadata, timestamps, and badges. Sizes: md (12pt) and sm (11pt).

```tsx
import { Caption } from "@arcadia/aether";

<Caption color="muted">Posted 2 hours ago</Caption>
<Caption variant="sm" color="success">Active</Caption>
```

| Prop | Values | Default |
|------|--------|---------|
| `variant` | `md` \| `sm` | `md` |
| `weight` | `regular` \| `medium` \| `semibold` \| `bold` | `regular` |
| `color` | base colors + foreground variants | `default` |

### VStack / HStack

Polymorphic flexbox layout primitives. VStack renders a column, HStack renders a row. Both accept an `as` prop to render as any React Native component.

```tsx
import { VStack, HStack } from "@arcadia/aether";

<VStack className="gap-4 p-4">
  <Text>Top</Text>
  <Text>Bottom</Text>
</VStack>

<HStack className="gap-2 items-center">
  <IconSymbol name="star" />
  <Text>Favorite</Text>
</HStack>

{/* Polymorphic — renders as Pressable */}
<VStack as={Pressable} onPress={handlePress} className="gap-2">
  <Text>Clickable stack</Text>
</VStack>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `ComponentType` | `View` | Component to render as |
| `className` | `string` | — | Tailwind classes (merged with layout base) |
| `...props` | — | — | All props of the `as` component |

## Icons

Install `expo-symbols` (iOS only — SF Symbols):

```bash
npx expo install expo-symbols
```

Import from the separate `@arcadia/aether/icons` entrypoint:

### IconSymbol

```tsx
import { IconSymbol } from "@arcadia/aether/icons";

<IconSymbol name="heart.fill" colorScheme="danger" />
<IconSymbol name="star" weight="bold" size={32} colorScheme="primary" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `SFSymbol` | required | SF Symbol name |
| `size` | `number` | `24` | Width and height in points |
| `colorScheme` | `ThemeColor` | — | Semantic theme color |
| `weight` | `SymbolWeight` | `"regular"` | Symbol weight |
| `className` | `string` | — | Tailwind classes |

## Hooks

### useInterFonts

Loads the Inter font family (400 Regular, 500 Medium, 600 SemiBold, 700 Bold).

```tsx
const { fontsLoaded, fontError } = useInterFonts();
```

### useColorScheme

NativeWind color scheme with convenience booleans.

```tsx
const { colorScheme, isDarkTheme, isLightTheme } = useColorScheme();
```

### useNavigationTheme

Returns a React Navigation compatible theme object derived from Aether color tokens. Does not require `@react-navigation/native` as a dependency of this library.

```tsx
import { useNavigationTheme } from "@arcadia/aether";
import { ThemeProvider } from "@react-navigation/native";

const navigationTheme = useNavigationTheme();
// <ThemeProvider value={navigationTheme}>

// With custom colors:
const customTheme = useNavigationTheme({
  light: { primary: "hsla(280, 70%, 58%, 1)" },
  dark: { primary: "hsla(280, 60%, 65%, 1)" },
});
```

### useThemeColor

Resolves theme color CSS variables to their actual runtime values.

```tsx
import { useThemeColor } from "@arcadia/aether";

const primary = useThemeColor("primary");
// "hsla(245, 70%, 58%, 1)"

const primaryRgb = useThemeColor("primary", { format: "rgb" });
// "rgba(98, 71, 198, 1)"
```

## Utilities

### Class Names

```tsx
import { cn, cnx } from "@arcadia/aether";

// cn: fast join, no conflict resolution
cn("flex gap-4", isActive && "opacity-100");

// cnx: merge with Tailwind conflict resolution (preferred)
cnx("text-sm p-4", "text-lg p-8"); // -> "text-lg p-8"
```

### Color Utilities

```tsx
import {
  parseHsla,
  generateHsla,
  adjustLightness,
  hslaToRgba,
  withAlpha,
} from "@arcadia/aether";

parseHsla("hsla(240, 4%, 97%, 1)");
// { hue: 240, saturation: 4, lightness: 97, alpha: 1 }

hslaToRgba("hsla(245, 70%, 58%, 1)");
// "rgba(98, 71, 198, 1)"

withAlpha("hsla(240, 4%, 97%, 1)", 0.5);
// "hsla(240, 4%, 97%, 0.5)"
```

## Color Tokens

Available as Tailwind classes (e.g., `bg-primary`, `text-danger-foreground`, `border-border`):

| Token | Description |
|-------|-------------|
| `background` / `foreground` | Page background and default text |
| `surface` / `surface-foreground` | Card and section backgrounds |
| `primary` / `primary-foreground` | Brand color |
| `secondary` / `secondary-foreground` | Secondary actions |
| `success` / `success-foreground` | Success state |
| `warning` / `warning-foreground` | Warning state |
| `danger` / `danger-foreground` | Error/destructive state |
| `info` / `info-foreground` | Informational state |
| `muted` / `muted-foreground` | Subtle backgrounds and secondary text |
| `border` / `input` / `ring` | UI chrome |
| `glass` / `glass-border` / `glass-highlight` | Glassmorphism effects |
| `tag-*` | Tag colors: coral, amber, sky, lavender, slate, mint, stone |

All colors are HSLA-based and support custom overrides via the `colorPalette` prop on `AetherProvider`.

## Example App

A complete working integration lives in `example/`. It demonstrates provider setup, Storybook integration, and all component variants.

```bash
pnpm example:start    # Start Expo dev server
pnpm example:ios      # Run on iOS simulator
```

## Requirements

| Dependency | Version |
|------------|---------|
| React | >= 18 |
| React Native | >= 0.72 |
| NativeWind | >= 4 |
| Tailwind CSS | ^3.3.5 |
| @expo-google-fonts/inter | >= 0.4.2 |
| Expo | recommended |

## License

MIT
