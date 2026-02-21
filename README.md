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

### 3. Install required peer dependencies

```bash
npm install @callstack/liquid-glass expo-haptics
```

### 4. Configure Tailwind (tailwind.config.js)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@arcadia/aether/dist/**/*.{js,mjs}"],
  presets: [require("nativewind/preset"), require("@arcadia/aether/tailwind-preset").preset],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 5. Create global CSS (global.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Configure Babel (babel.config.js)

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }], "nativewind/babel"],
  };
};
```

### 7. Configure Metro (metro.config.js)

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

### 8. Import CSS in your root layout

```tsx
import "./global.css";
```

### 9. TypeScript (nativewind-env.d.ts)

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

| Prop           | Type                 | Description                        |
| -------------- | -------------------- | ---------------------------------- |
| `textConfig`   | `TextProviderProps`  | Global text accessibility settings |
| `colorPalette` | `ColorPaletteConfig` | Light/dark color overrides         |

### Heading

Heading levels 1-4 mapping to iOS HIG: Large Title (34pt), Title 1 (28pt), Title 2 (22pt), Title 3 (20pt).

```tsx
import { Heading } from "@arcadia/aether";

<Heading variant={1}>Large Title</Heading>
<Heading variant={2} color="primary">Title 1</Heading>
<Heading variant={3} weight="medium">Title 2</Heading>
<Heading variant={4}>Title 3</Heading>
```

| Prop      | Values                                                                                                        | Default      |
| --------- | ------------------------------------------------------------------------------------------------------------- | ------------ |
| `variant` | `1` \| `2` \| `3` \| `4`                                                                                      | `1`          |
| `weight`  | `regular` \| `medium` \| `semibold` \| `bold`                                                                 | per iOS spec |
| `color`   | `default` \| `primary` \| `secondary` \| `muted` \| `success` \| `warning` \| `danger` \| `info` \| `inherit` | `default`    |

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

| Prop      | Values                                                                                                                                                   | Default      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `variant` | `headline` \| `body` \| `callout` \| `subhead` \| `footnote`                                                                                             | `body`       |
| `weight`  | `regular` \| `medium` \| `semibold` \| `bold`                                                                                                            | per iOS spec |
| `color`   | base colors + `primary-foreground` \| `secondary-foreground` \| `success-foreground` \| `warning-foreground` \| `danger-foreground` \| `info-foreground` | `default`    |

### Caption

Small text for metadata, timestamps, and badges. Sizes: md (12pt) and sm (11pt).

```tsx
import { Caption } from "@arcadia/aether";

<Caption color="muted">Posted 2 hours ago</Caption>
<Caption variant="sm" color="success">Active</Caption>
```

| Prop      | Values                                        | Default   |
| --------- | --------------------------------------------- | --------- |
| `variant` | `md` \| `sm`                                  | `md`      |
| `weight`  | `regular` \| `medium` \| `semibold` \| `bold` | `regular` |
| `color`   | base colors + foreground variants             | `default` |

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

| Prop        | Type            | Default | Description                                |
| ----------- | --------------- | ------- | ------------------------------------------ |
| `as`        | `ComponentType` | `View`  | Component to render as                     |
| `className` | `string`        | —       | Tailwind classes (merged with layout base) |
| `...props`  | —               | —       | All props of the `as` component            |

### Button

Full-featured button with 5 variants, 3 sizes, loading state, shimmer animation, and haptic feedback.

```tsx
import { Button, ButtonLabel } from "@arcadia/aether";

<Button onPress={() => {}}>Press me</Button>
<Button variant="secondary" size="lg" onPress={() => {}}>Secondary</Button>
<Button variant="outline" isLoading={true} onPress={() => {}}>Loading...</Button>
<Button variant="destructive" disabled={true} onPress={() => {}}>Disabled</Button>
<Button withShimmer={true} onPress={() => {}}>Shimmer</Button>

{/* With ButtonLabel for explicit styling */}
<Button onPress={() => {}}>
  <ButtonLabel>Styled Label</ButtonLabel>
</Button>
```

| Prop          | Values                                                                     | Default   |
| ------------- | -------------------------------------------------------------------------- | --------- |
| `variant`     | `primary` \| `secondary` \| `outline` \| `ghost` \| `destructive`          | `primary` |
| `size`        | `sm` \| `md` \| `lg`                                                       | `md`      |
| `isIconOnly`  | `boolean`                                                                  | `false`   |
| `isRounded`   | `boolean`                                                                  | `false`   |
| `disabled`    | `boolean`                                                                  | `false`   |
| `isLoading`   | `boolean`                                                                  | `false`   |
| `withShimmer` | `boolean`                                                                  | `false`   |
| `haptics`     | `boolean` \| `"light"` \| `"medium"` \| `"heavy"` \| `"rigid"` \| `"soft"` | —         |
| `children`    | `ReactNode` \| `(context) => ReactNode`                                    | required  |

### GlassButton

iOS 26+ Liquid Glass button with automatic fallback to glass styling. Requires `@callstack/liquid-glass` (required peer dependency).

```tsx
import { GlassButton } from "@arcadia/aether";

{
  /* Icon button (back/close) */
}
<GlassButton size="icon" accessibilityLabel="Go back" onPress={() => {}}>
  ←
</GlassButton>;

{
  /* Floating action button */
}
<GlassButton size="fab" accessibilityLabel="Add new" onPress={() => {}}>
  +
</GlassButton>;

{
  /* Force fallback (no LiquidGlass) */
}
<GlassButton size="icon" useLiquidGlass={false} accessibilityLabel="Close" onPress={() => {}}>
  ×
</GlassButton>;
```

| Prop                 | Values                             | Default  |
| -------------------- | ---------------------------------- | -------- |
| `size`               | `icon` \| `fab` \| `badge`         | `icon`   |
| `effect`             | `regular` \| `clear`               | per size |
| `colorScheme`        | `system` \| `light` \| `dark`      | `system` |
| `disabled`           | `boolean`                          | `false`  |
| `useLiquidGlass`     | `boolean`                          | `true`   |
| `haptics`            | `boolean` \| `HapticFeedbackStyle` | `true`   |
| `accessibilityLabel` | `string`                           | required |
| `tintColor`          | `ColorValue`                       | —        |

> **Required dependency**: `@callstack/liquid-glass` must be installed for GlassButton. On iOS 26+ it renders native Liquid Glass; on older iOS it automatically falls back to themed glass styling.

### HighlightTappable

Lightweight pressable with highlight overlay and optional scale animation. Ideal for list rows and tappable cards.

```tsx
import { HighlightTappable } from "@arcadia/aether";

{
  /* List row pattern */
}
<HighlightTappable onPress={() => {}} className="px-4 py-3">
  <Text>Settings</Text>
</HighlightTappable>;

{
  /* With scale animation */
}
<HighlightTappable enableScale={true} onPress={() => {}}>
  <Text>Press me</Text>
</HighlightTappable>;

{
  /* Custom highlight color */
}
<HighlightTappable highlightColor="primary" highlightOpacity={0.3} onPress={() => {}}>
  <Text>Custom highlight</Text>
</HighlightTappable>;
```

| Prop               | Values                             | Default   |
| ------------------ | ---------------------------------- | --------- |
| `disabled`         | `boolean`                          | `false`   |
| `className`        | `string`                           | —         |
| `highlightColor`   | `ThemeColor`                       | `"muted"` |
| `highlightOpacity` | `number` (0-1)                     | `1`       |
| `haptics`          | `boolean` \| `HapticFeedbackStyle` | —         |
| `enableScale`      | `boolean`                          | `false`   |
| `scaleValue`       | `number` (0-1)                     | `0.98`    |

### Surface

Layered background component with 4 depth levels and 3 variants (solid, glass, fog).

```tsx
import { Surface, Text } from "@arcadia/aether";

{
  /* Basic solid surface */
}
<Surface level="secondary" isBordered={true} className="p-4">
  <Text>Level 2 Surface</Text>
</Surface>;

{
  /* Glass variant */
}
<Surface variant="glass" className="p-4">
  <Text>Glass Surface</Text>
</Surface>;

{
  /* Fog variant with custom intensity */
}
<Surface variant="fog" fogDirection="bottom" fogIntensity={0.2} className="p-4">
  <Text>Fog Surface</Text>
</Surface>;
```

| Prop           | Values                                                                  | Default   |
| -------------- | ----------------------------------------------------------------------- | --------- |
| `level`        | `default` \| `secondary` \| `tertiary` \| `quaternary` \| `transparent` | `default` |
| `variant`      | `solid` \| `glass` \| `fog`                                             | `solid`   |
| `glassEffect`  | `regular` \| `clear`                                                    | `regular` |
| `fogDirection` | `top` \| `bottom` \| `both`                                             | `top`     |
| `fogIntensity` | `number` (0-1)                                                          | `0.15`    |
| `isBordered`   | `boolean`                                                               | `false`   |
| `isElevated`   | `boolean`                                                               | `false`   |

### Card

Compound card component. Static or pressable (determined by presence of `onPress` prop).

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardImage,
  CardFooter,
  Button,
  Text,
} from "@arcadia/aether";

<Card onPress={() => console.log("Card pressed")}>
  <CardImage aspectRatio="video">{/* Image component here */}</CardImage>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>This is a description of the card.</CardDescription>
  </CardHeader>
  <CardBody>
    <Text>Main content goes here.</Text>
  </CardBody>
  <CardFooter justify="end" isBordered={true}>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>;
```

#### Card Props (Shared)

| Prop         | Values                      | Default   |
| ------------ | --------------------------- | --------- |
| `level`      | `SurfaceLevel`              | `default` |
| `variant`    | `SurfaceVariant`            | `solid`   |
| `isBordered` | `boolean`                   | `false`   |
| `isElevated` | `boolean`                   | `false`   |
| `...props`   | `SurfaceProps` dependencies | —         |

#### Card Props (Pressable)

Active when `onPress` is provided.

| Prop              | Values                             | Default  |
| ----------------- | ---------------------------------- | -------- |
| `onPress`         | `() => void`                       | required |
| `haptics`         | `boolean` \| `HapticFeedbackStyle` | —        |
| `disabled`        | `boolean`                          | `false`  |
| `animationConfig` | `CardAnimationConfig`              | —        |

#### Compound Components

- **Card** — Main wrapper (static or pressable)
- **CardHeader** — Header section (title + description)
- **CardTitle** — Title (wraps Heading, default variant=3)
- **CardDescription** — Description (wraps Text, default variant=subhead, color=muted)
- **CardBody** — Main content area (optional `isBordered` for separator)
- **CardImage** — Image container with aspect ratio control
- **CardFooter** — Footer with horizontal layout (optional `isBordered`, `justify`)

### List

iOS Settings-style compound list component with sections, collapsible items, and accessories.

#### Basic Usage

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemChevron,
  ListSectionHeader,
  VStack,
} from "@arcadia/aether";

<VStack className="gap-2">
  <ListSectionHeader>Account</ListSectionHeader>
  <List variant="surface" surfaceLevel="secondary">
    <ListItem onPress={handleProfile} haptics>
      <ListItemContent>Profile</ListItemContent>
      <ListItemChevron />
    </ListItem>
    <ListItem onPress={handleSettings}>
      <ListItemContent>Settings</ListItemContent>
      <ListItemChevron />
    </ListItem>
  </List>
</VStack>;
```

#### Collapsible Items

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemChevron,
  ListItemCollapse,
  Text,
} from "@arcadia/aether";

<List variant="surface">
  <ListItem isCollapsible defaultExpanded={false}>
    <ListItemContent>Notifications</ListItemContent>
    <ListItemChevron />
    <ListItemCollapse>
      <Text color="muted">Configure your notification preferences.</Text>
    </ListItemCollapse>
  </ListItem>
</List>;
```

#### With Accessories

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemAccessory,
  ListItemChevron,
  Text,
} from "@arcadia/aether";
import { Switch } from "react-native";

<List variant="surface">
  <ListItem interactive={false}>
    <ListItemContent>Dark Mode</ListItemContent>
    <ListItemAccessory>
      <Switch value={isDark} onValueChange={setIsDark} />
    </ListItemAccessory>
  </ListItem>
  <ListItem onPress={handleLanguage}>
    <ListItemContent>Language</ListItemContent>
    <ListItemAccessory>
      <Text color="muted">English</Text>
    </ListItemAccessory>
    <ListItemChevron />
  </ListItem>
</List>;
```

#### List Props

| Prop           | Values                                                                  | Default     |
| -------------- | ----------------------------------------------------------------------- | ----------- |
| `variant`      | `default` \| `surface`                                                  | `default`   |
| `surfaceLevel` | `default` \| `secondary` \| `tertiary` \| `quaternary` \| `transparent` | `secondary` |
| `showDividers` | `boolean`                                                               | `true`      |

#### ListItem Props

| Prop              | Values                             | Default |
| ----------------- | ---------------------------------- | ------- |
| `onPress`         | `() => void`                       | —       |
| `interactive`     | `boolean`                          | `true`  |
| `isCollapsible`   | `boolean`                          | `false` |
| `isExpanded`      | `boolean`                          | —       |
| `defaultExpanded` | `boolean`                          | `false` |
| `disabled`        | `boolean`                          | `false` |
| `haptics`         | `boolean` \| `HapticFeedbackStyle` | —       |
| `animationConfig` | `ListItemAnimationConfig`          | —       |

#### Compound Components

- **List** — Root container with optional Surface wrapping
- **ListItem** — Interactive item with press highlight and optional collapsible mode
- **ListItemContent** — Content wrapper (auto-wraps strings with Text)
- **ListItemIcon** — Icon container with position control (`left` | `right`)
- **ListItemAccessory** — Right-side accessories (Switch, Text, Badge)
- **ListItemChevron** — Animated chevron that rotates when expanded (requires `expo-symbols`)
- **ListItemCollapse** — Collapsible content with smooth height animation
- **ListSectionHeader** — Section header (placed OUTSIDE List, auto-uppercased)

### Skeleton

Pulsing loading placeholder. Size and shape are controlled through Tailwind classes.

```tsx
import { Skeleton, VStack } from "@arcadia/aether";

{
  /* Basic placeholder */
}
<Skeleton className="h-32 w-full rounded-2xl" />;

{
  /* Text rows */
}
<VStack className="gap-2">
  <Skeleton className="h-4 w-full rounded-lg" />
  <Skeleton className="h-4 w-3/4 rounded-lg" />
  <Skeleton className="h-4 w-1/2 rounded-lg" />
</VStack>;

{
  /* Avatar */
}
<Skeleton className="h-12 w-12 rounded-full" />;
```

| Prop              | Type     | Default             | Description                    |
| ----------------- | -------- | ------------------- | ------------------------------ |
| `backgroundColor` | `string` | theme surface color | Custom background color        |
| `className`       | `string` | —                   | Tailwind classes (size, shape) |

### ScrollFade

Gradient fade overlay to indicate scrollable content. Placed at edges of scroll containers with absolute positioning.

```tsx
import { ScrollFade } from "@arcadia/aether";
import { ScrollView, View } from "react-native";

{
  /* Bottom fade for vertical scroll */
}
<View className="relative flex-1">
  <ScrollView>...</ScrollView>
  <ScrollFade position="bottom" />
</View>;

{
  /* Horizontal fades */
}
<View className="relative">
  <ScrollView horizontal>...</ScrollView>
  <ScrollFade position="left" size={16} intensity={0.5} />
  <ScrollFade position="right" size={16} intensity={0.5} />
</View>;
```

| Prop        | Values                                 | Default                              |
| ----------- | -------------------------------------- | ------------------------------------ |
| `position`  | `top` \| `bottom` \| `left` \| `right` | required                             |
| `size`      | `number`                               | `120` (vertical) / `24` (horizontal) |
| `color`     | `string`                               | theme background color               |
| `intensity` | `number` (0-1)                         | `1`                                  |

### AnimationWrapper

Convenience wrapper around `Animated.View` for declarative enter/exit/layout animations from react-native-reanimated.

```tsx
import { AnimationWrapper } from "@arcadia/aether";
import { FadeIn, FadeOut, LinearTransition } from "react-native-reanimated";

<AnimationWrapper entering={FadeIn} exiting={FadeOut} layout={LinearTransition}>
  <Text>Animated content</Text>
</AnimationWrapper>;
```

| Prop       | Type                    | Description                      |
| ---------- | ----------------------- | -------------------------------- |
| `entering` | `AnimationBuilder`      | Enter animation (e.g., `FadeIn`) |
| `exiting`  | `AnimationBuilder`      | Exit animation (e.g., `FadeOut`) |
| `layout`   | `LayoutAnimationConfig` | Layout transition animation      |
| `...props` | `ViewProps`             | All standard Animated.View props |

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

| Prop          | Type           | Default     | Description                |
| ------------- | -------------- | ----------- | -------------------------- |
| `name`        | `SFSymbol`     | required    | SF Symbol name             |
| `size`        | `number`       | `24`        | Width and height in points |
| `colorScheme` | `ThemeColor`   | —           | Semantic theme color       |
| `weight`      | `SymbolWeight` | `"regular"` | Symbol weight              |
| `className`   | `string`       | —           | Tailwind classes           |

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
import { parseHsla, generateHsla, adjustLightness, hslaToRgba, withAlpha } from "@arcadia/aether";

parseHsla("hsla(240, 4%, 97%, 1)");
// { hue: 240, saturation: 4, lightness: 97, alpha: 1 }

hslaToRgba("hsla(245, 70%, 58%, 1)");
// "rgba(98, 71, 198, 1)"

withAlpha("hsla(240, 4%, 97%, 1)", 0.5);
// "hsla(240, 4%, 97%, 0.5)"
```

## Color Tokens

Available as Tailwind classes (e.g., `bg-primary`, `text-danger-foreground`, `border-border`):

| Token                                        | Description                                                 |
| -------------------------------------------- | ----------------------------------------------------------- |
| `background` / `foreground`                  | Page background and default text                            |
| `surface` / `surface-foreground`             | Card and section backgrounds                                |
| `primary` / `primary-foreground`             | Brand color                                                 |
| `secondary` / `secondary-foreground`         | Secondary actions                                           |
| `success` / `success-foreground`             | Success state                                               |
| `warning` / `warning-foreground`             | Warning state                                               |
| `danger` / `danger-foreground`               | Error/destructive state                                     |
| `info` / `info-foreground`                   | Informational state                                         |
| `muted` / `muted-foreground`                 | Subtle backgrounds and secondary text                       |
| `border` / `input` / `ring`                  | UI chrome                                                   |
| `glass` / `glass-border` / `glass-highlight` | Glassmorphism effects                                       |
| `tag-*`                                      | Tag colors: coral, amber, sky, lavender, slate, mint, stone |

All colors are HSLA-based and support custom overrides via the `colorPalette` prop on `AetherProvider`.

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
