# Hooks

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
import { useNavigationTheme } from "@byarcadiaapp/aether";
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
import { useThemeColor } from "@byarcadiaapp/aether";

const primary = useThemeColor("primary");
// "hsla(245, 70%, 58%, 1)"

const primaryRgb = useThemeColor("primary", { format: "rgb" });
// "rgba(98, 71, 198, 1)"
```
