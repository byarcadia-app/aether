---
name: aether-ui
description: "Full API knowledge for building screens with @byarcadia-app/aether — an iOS-only React Native component library built on NativeWind/Tailwind. Use this skill whenever a user wants to use aether components, build a screen with aether, add a button/card/list/form, create React Native UI with aether, use @byarcadia-app/aether components, create a form/screen/layout using aether, or work with the aether NativeWind component library. MUST USE for any task involving aether-ui components, styling, hooks, or color tokens."
---

# aether-ui

iOS-first React Native component library built as a Tailwind CSS / NativeWind preset for Expo. All components use `tailwind-variants` for styling and NativeWind CSS variables for theming.

**Color tokens**: See [colors.md](references/colors.md)
**Hooks & utilities**: See [hooks.md](references/hooks.md), [utilities.md](references/utilities.md)
**Provider setup**: See [provider.md](references/provider.md)
**Detailed component API**: See `references/` directory

## iOS Only

This library targets **iOS exclusively**. Android and web are not supported and won't be. Do not add platform checks or cross-platform fallbacks.

## Imports

All components are named exports from the main entrypoint:

```tsx
import { Button, ButtonLabel, Card, CardHeader, Text } from "@byarcadia-app/aether";
```

Icons are a separate entrypoint:

```tsx
import { IconSymbol } from "@byarcadia-app/aether/icons";
```

## Compound Components

Card, TextField, and List use sub-components composed as children (not configuration props). All sub-components are **flat named exports** — import them directly. Internally, each has a `displayName` like `Aether.Card.CardTitle` used by `getElementByDisplayName()` to extract and position children. See individual reference files for usage examples.

## Styling System

All component styling uses `tailwind-variants` (`tv()`) from the `tailwind-variants` package. Variant constants are exported as named exports for external access (e.g., `buttonVariants`, `textVariants`).

- `cn(...classes)` — Fast string join. No conflict resolution. Use for simple concatenation.
- `cnx(...classes)` — Merge with Tailwind conflict resolution via `tailwind-merge`. **Prefer this** when accepting `className` from component props.
- Custom color palettes via `colorPalette` prop on `AetherProvider`.

-> [utilities.md](references/utilities.md) for full utility API.

## Color Tokens

HSLA-based semantic color system via NativeWind CSS variables. Tokens: base (`background`, `foreground`, `surface`), semantic (`primary`, `secondary`, `success`, `warning`, `danger`, `info`), UI (`muted`, `border`, `input`, `ring`), special (`glass`, tag colors). Every semantic color has a `-foreground` variant.

Usage: `bg-primary`, `text-foreground`, `text-danger-foreground`, `border-border`, `bg-muted`.

-> [colors.md](references/colors.md) for the complete token table.

## Hooks

- `useInterFonts()` — Load Inter font family
- `useColorScheme()` — Get `"light"` or `"dark"`
- `useThemeColor(token)` — Resolve token to runtime HSLA string
- `useNavigationTheme()` — React Navigation theme with aether colors
- `useAnimationDisabled()` — Check global animation-disabled state

-> [hooks.md](references/hooks.md) for full signatures and examples.

## Haptics

Exports `hapticsImpact(style: HapticFeedbackStyle)` for triggering haptic feedback. `Button` has a built-in `haptics` prop. Use `hapticsImpact()` directly for custom interactive components.

## Provider Setup

All aether components require `AetherProvider` at the root. Key props: `colorPalette`, `disableAnimations`, `allowFontScaling`, `maxFontSizeMultiplier`.

-> [provider.md](references/provider.md) for full configuration options.

## References

[$REFERENCES_START$]: #

### Typography

[Heading](references/heading.md): H1–H4 components following iOS Human Interface Guidelines sizing. Inter font family with configurable weight.
[Text](references/text.md): Body text with size variants (lg, md, sm, xs) and weight variants (regular, medium, semibold, bold).
[Caption](references/caption.md): Small auxiliary text in two sizes (md, sm). Muted foreground color by default.

### Buttons

[Button](references/button.md): Primary interactive element with 5 variants (primary, secondary, outline, ghost, destructive). Supports shimmer, loading spinner, haptic feedback, press animation. Compound: ButtonLabel, ButtonShimmer.
[GlassButton](references/glass-button.md): iOS 26+ LiquidGlass button via @callstack/liquid-glass. Falls back to standard primary Button on older iOS.
[HighlightTappable](references/highlight-tappable.md): Lightweight press feedback wrapper with subtle background highlight on touch.

### Forms

[TextField](references/text-field.md): Compound input with TextFieldLabel, TextFieldInput, TextFieldInputStartContent, TextFieldInputEndContent, TextFieldDescription, TextFieldErrorMessage. Animated focus border, clearable, multiline, validation.
[ErrorView](references/error-view.md): Conditional error message display. Renders danger-colored message when error string provided, nothing otherwise.

### Layout & Structure

[Layout (VStack / HStack)](references/layout.md): Polymorphic flexbox primitives. Accept `as` prop to render as any React Native component.
[Card](references/card.md): Compound card with CardHeader, CardTitle, CardDescription, CardBody, CardImage, CardFooter. Optionally pressable with haptics. Surface-based variants (solid, glass, fog).
[Surface](references/surface.md): Layered background container. Three variants: solid (opaque), glass (translucent blur), fog (subtle gradient). Auto-darkens by nesting depth via `level` prop.
[List](references/list.md): Compound list following iOS Settings patterns. ListItem, ListItemContent, ListItemIcon, ListItemAccessory, ListSectionHeader, ListItemChevron (animated), ListItemCollapse (animated expand/collapse).

### Feedback

[Skeleton](references/skeleton.md): Pulsing loading placeholder. Theme-aware, respects global animation-disabled state.
[ScrollFade](references/scroll-fade.md): Gradient fade overlay for scroll container edges. Position top or bottom.
[AnimationWrapper](references/animation-wrapper.md): Declarative enter/exit/layout animation via react-native-reanimated. Consumer-controlled, not affected by global animation-disabled state.

### Icons

[IconSymbol](references/icon-symbol.md): SF Symbols component for iOS via expo-symbols. Separate entrypoint: `@byarcadia-app/aether/icons`.

### Theming & Configuration

[Colors](references/colors.md): Complete HSLA color token table for light and dark themes.
[Provider](references/provider.md): AetherProvider configuration — theme injection, animation control, text config.
[Hooks](references/hooks.md): All hook signatures and usage examples.
[Utilities](references/utilities.md): cn(), cnx() class name utilities and other helpers.

[$REFERENCES_END$]: #
