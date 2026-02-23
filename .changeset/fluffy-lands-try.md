---
"@byarcadiaapp/aether": minor
---

Initial public release
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
