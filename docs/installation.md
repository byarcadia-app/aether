# Installation

@byarcadia/aether is a preset on top of NativeWind. Installation means setting up NativeWind in your Expo project and adding the aether preset.

For the full NativeWind setup reference, see the [official installation guide](https://www.nativewind.dev/docs/getting-started/installation).

### 1. Install dependencies

```bash
npx expo install nativewind react-native-reanimated react-native-safe-area-context
npm install --save-dev tailwindcss@^3.4.17
```

### 2. Install @byarcadia/aether

```bash
npm install @byarcadia/aether @expo-google-fonts/inter
```

### 3. Install required peer dependencies

```bash
npm install @callstack/liquid-glass expo-haptics
```

### 4. Configure Tailwind (tailwind.config.js)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@byarcadia/aether/dist/**/*.{js,mjs}"],
  presets: [require("nativewind/preset"), require("@byarcadia/aether/tailwind-preset").preset],
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
import { AetherProvider, useInterFonts, useNavigationTheme } from "@byarcadia/aether";
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
