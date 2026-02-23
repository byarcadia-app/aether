# AetherProvider

Root provider. Composes ThemeProvider (CSS variable injection) and TextComponentProvider (global text config).

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
