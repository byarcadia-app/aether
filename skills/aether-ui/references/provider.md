# AetherProvider

Root provider. Composes ThemeProvider (CSS variable injection), AnimationProvider (global animation control), and TextComponentProvider (global text config).

## Usage

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

## API Reference

| Prop           | Type                 | Description                        |
| -------------- | -------------------- | ---------------------------------- |
| `textConfig`   | `TextProviderProps`  | Global text accessibility settings |
| `colorPalette` | `ColorPaletteConfig` | Light/dark color overrides         |
| `disableAnimations` | `boolean | undefined` | Disables all animations globally. Also respects iOS Reduce Motion. |

## Animation Control

When `disableAnimations` is `true` — or the device has iOS **Reduce Motion** enabled — all built-in component animations switch to instant transitions. Press feedback and layout behavior are preserved; only the animated transitions are removed.

| Component | Normal | Animation disabled |
| --------- | ------ | ------------------ |
| Button | Scale press animation, shimmer sweep | Instant scale snap, shimmer hidden |
| HighlightTappable | Animated highlight fade | Instant highlight snap |
| Card (pressable) | Scale + highlight animation | Instant scale + highlight snap |
| TextField | Animated focus border color | Instant border color change |
| Skeleton | Pulsing opacity loop | Static block at full opacity |
| List chevron | Smooth rotation on expand | Instant rotation |
| List collapse | Smooth height animation | Instant expand/collapse |

For custom components, use the [`useAnimationDisabled`](./hooks.md#useanimationdisabled) hook to read the global state.
