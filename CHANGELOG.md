# @byarcadia-app/aether

## 0.1.3

### Patch Changes

- [`a928b39`](https://github.com/byarcadia-app/aether/commit/a928b393d0438df5fba58a5f50b32374ef924bf7) Thanks [@dominikwozniak](https://github.com/dominikwozniak)! - Add color `variant` prop to GlassButton with `primary`, `secondary`, `success`, `warning`, `danger`, and `info` options. Each variant applies a matching tint to both the iOS 26+ Liquid Glass effect and the pre-iOS 26 fallback style.

## 0.1.2

### Patch Changes

- [`195d540`](https://github.com/byarcadia-app/aether/commit/195d5407ed381b306a39f3cdbf8ed794166a39d6) Thanks [@dominikwozniak](https://github.com/dominikwozniak)! - fix bg color for outline button

## 0.1.1

### Patch Changes

- [`4a5cdb0`](https://github.com/byarcadia-app/aether/commit/4a5cdb0a9e3781a0a63e1865e36440545f73d866) Thanks [@dominikwozniak](https://github.com/dominikwozniak)! - Add `AnimationProvider` with global animation control. All built-in animations respect `disableAnimations` prop on AetherProvider and iOS Reduce Motion setting. New `useAnimationDisabled` hook for custom components.

## 0.1.0

### Minor Changes

- [`e411e95`](https://github.com/byarcadia-app/aether/commit/e411e950f399eb62b126261336b5e3010bb562fc) Thanks [@dominikwozniak](https://github.com/dominikwozniak)! - Initial public release
  - Tailwind CSS preset with HSLA semantic color tokens (light + dark themes)
  - AetherProvider with NativeWind CSS variable injection and global text config
  - Typography: Heading (H1-H4), Text, Caption following iOS HIG
  - Layout: VStack, HStack polymorphic flexbox primitives
  - Buttons: Button (5 variants, shimmer, loading), GlassButton (iOS 26+ Liquid Glass), HighlightTappable
  - Surface: Layered backgrounds with solid, glass, fog variants
  - Card: Compound component (header, body, footer, image) with optional pressable
  - List: Compound component (items, sections, collapsible, accessories, chevron)
  - Forms: TextField compound input (label, validation, clearable, multiline, animated focus) and ErrorView
  - Icons: IconSymbol with SF Symbols and theme color integration
  - Skeleton: Pulsing loading placeholder
  - ScrollFade: Gradient fade overlay for scroll edges
  - AnimationWrapper: Declarative enter/exit/layout animation wrapper
  - Hooks: useInterFonts, useColorScheme, useNavigationTheme, useThemeColor
  - Utilities: cn/cnx class merging, HSLA color manipulation, compound component child extraction
