# AI Development Guide — @byarcadia-app/aether

Standards and conventions for working on the @byarcadia-app/aether codebase. This is a React Native UI library built as a Tailwind CSS / NativeWind preset with themed components.

## Tech Stack

- TypeScript (strict mode, React 19, React Native 0.84)
- NativeWind v4 (Tailwind CSS for React Native)
- Tailwind CSS v3
- tailwind-variants (component variant logic)
- tailwind-merge via tailwind-variants (class conflict resolution)
- tsup (CJS + ESM + DTS bundling)
- oxlint / oxfmt (linting and formatting)
- changesets (versioning and releases)
- pnpm v10 (monorepo with `example/` app)
- Inter font family via @expo-google-fonts/inter

## Directory Structure

```
src/
├── index.ts                    # Root barrel export
├── hooks/
│   ├── use-color-scheme.ts     # NativeWind color scheme wrapper
│   ├── use-inter-fonts.ts      # Font loading hook
│   ├── use-navigation-theme.ts # React Navigation theme integration
│   ├── use-theme-color.ts      # CSS variable color resolver
│   └── use-animation-disabled.ts # Global animation-disabled hook
├── providers/
│   ├── aether-provider/        # Root provider (composes Theme + Animation + Text)
│   ├── text-provider/          # Global text props (font scaling)
│   ├── theme-provider/         # NativeWind CSS variable injection
│   └── animation-provider/     # Global animation control (Reduce Motion + explicit disable)
├── tailwind/
│   └── preset.ts               # Tailwind preset (colors, fonts)
├── theme/
│   ├── colors.ts               # HSLA color tokens + NativeWind vars
│   └── utils.ts                # Color palette merging utilities
├── ui/
│   ├── animation-wrapper/
│   │   ├── animation-wrapper.tsx # AnimationWrapper (Animated.View convenience wrapper)
│   │   └── types.ts            # AnimationWrapperProps
│   ├── buttons/
│   │   ├── shared/              # AnimatedPressable, PressableHighlight, usePressableAnimation
│   │   ├── button/              # Button, ButtonLabel, ButtonShimmer
│   │   ├── glass-button/        # GlassButton (iOS 26+ LiquidGlass + fallback)
│   │   └── highlight-tappable/  # HighlightTappable
│   ├── card/
│   │   └── card.tsx            # Card, CardHeader, CardTitle, CardDescription, CardBody, CardImage, CardFooter
│   ├── forms/
│   │   ├── error-view/
│   │   │   ├── error-view.tsx  # ErrorView (conditional error message)
│   │   │   └── types.ts        # ErrorViewProps
│   │   └── text-field/
│   │       ├── text-field.tsx   # TextField compound component (7 sub-components)
│   │       ├── styles.ts       # tv() slot-based variants
│   │       └── types.ts        # All TextField type definitions
│   ├── surface/
│   │   ├── surface.tsx         # Surface (solid, glass, fog variants)
│   │   ├── styles.ts           # Platform-specific shadow styles
│   │   └── utils.ts            # Surface hierarchy color generation
│   ├── icons/
│   │   ├── icon-symbol.tsx     # SF Symbol component (iOS, expo-symbols)
│   │   ├── icon-symbol.types.ts # IconSymbol prop types
│   │   └── types.ts            # Base icon types (BaseIconProps, ColorScheme)
│   ├── list/
│   │   ├── list.tsx             # List, ListItem, ListItemContent, ListItemIcon, ListItemAccessory, ListSectionHeader
│   │   ├── list-item-chevron.tsx # Animated chevron with rotation
│   │   ├── list-item-collapse.tsx # Collapsible content with height animation
│   │   ├── constants.ts         # Display names, animation timing, defaults
│   │   ├── context.ts           # ListContext, ListItemContext hooks
│   │   └── types.ts             # All List type definitions
│   ├── layout/
│   │   ├── layout.tsx          # VStack, HStack polymorphic components
│   │   └── types.ts            # PolymorphicComponentProps, RNComponentType
│   ├── scroll-fade/
│   │   ├── scroll-fade.tsx     # ScrollFade (gradient overlay for scroll containers)
│   │   └── types.ts            # ScrollFadeProps
│   ├── skeleton/
│   │   ├── skeleton.tsx        # Skeleton (pulsing loading placeholder)
│   │   └── types.ts            # SkeletonProps
│   └── typography/
│       ├── base-text/          # Internal primitive (global text config)
│       ├── heading/            # H1-H4 (iOS HIG)
│       ├── text/               # Body text variants
│       └── caption/            # Caption sizes (md, sm)
├── icons/
│   └── index.ts                # Entrypoint re-export for @byarcadia-app/aether/icons
└── utils/
    ├── children-type-guards.ts # isTextContent(), isRenderFunction() type guards
    ├── class-names.ts          # cn() and cnx() utilities
    ├── color.ts                # HSLA parsing, conversion, manipulation
    ├── get-element.ts          # getElementByDisplayName() compound component utility
    └── haptics.ts              # HapticFeedbackStyle type, hapticsImpact() utility
```

Every directory has an `index.ts` barrel export. Barrel files chain upward to `src/index.ts`.

## Component Conventions

### File Organization

Each component gets its own directory under `src/ui/{category}/{component-name}/` with three files:

1. `{component-name}.tsx` — implementation
2. `types.ts` — all type definitions (never inline in the component file)
3. `index.ts` — barrel export

### Implementation Pattern

```tsx
import { tv } from "tailwind-variants";
import { BaseText } from "../base-text";
import type { ComponentProps } from "./types";

export const componentVariants = tv({
  variants: {
    variant: {
      /* ... */
    },
    color: {
      /* ... */
    },
  },
  defaultVariants: {
    /* ... */
  },
});

export function Component({ variant, color, children, ...props }: ComponentProps) {
  return (
    <BaseText
      {...props}
      className={componentVariants({ variant, color, className: props.className })}
    >
      {children}
    </BaseText>
  );
}

Component.displayName = "Aether.{Category}.{Name}";
```

### Rules

- Use `tailwind-variants` (`tv()`) for all styling. Export variant constants as named exports.
- Derive props from `VariantProps<typeof variants>` combined with base props in `types.ts`.
- Don't use `forwardRef`. React 19 handles refs as standard props.
- Set `displayName` using the format `Aether.{Category}.{Name}`.
- All text components compose through the internal `BaseText` primitive.
- `BaseText` reads global config from `TextComponentContext` via React 19 `use()`.

## Styling

All styling uses Tailwind classes through NativeWind. No inline `StyleSheet` objects.

### Color System

HSLA-based semantic tokens. Colors are CSS variables at runtime via NativeWind `vars()` API, and `var(--color-{token})` references in the Tailwind preset.

Token categories:

- **Base**: `background`, `foreground`, `surface`, `overlay`
- **Semantic**: `primary`, `secondary`, `success`, `warning`, `danger`, `info`
- **UI**: `muted`, `border`, `input`, `ring`
- **Special**: `glass` (with border, highlight), `tag` colors (coral, amber, sky, lavender, slate, mint, stone)

Every semantic color has a `-foreground` variant for text on colored backgrounds.

### Class Name Utilities

- `cn()` — fast string join, no conflict resolution
- `cnx()` — merge with Tailwind conflict resolution. **Prefer this** for component props.

### Font Family

Inter via `@expo-google-fonts/inter`. Tailwind classes: `font-inter`, `font-interMedium`, `font-interSemiBold`, `font-interBold`.

## Theme Synchronization (Critical)

Three files must stay in sync when modifying color tokens:

| File                     | Role                                          |
| ------------------------ | --------------------------------------------- |
| `src/theme/colors.ts`    | Raw HSLA values + NativeWind `vars()` objects |
| `src/tailwind/preset.ts` | Tailwind config (`var(--color-*)` references) |
| `src/theme/utils.ts`     | Variable generation for custom palettes       |

Always update both `lightColors` and `darkColors` together.

## Package Exports

Three export paths:

- `@byarcadia-app/aether` — components, hooks, providers, utils, theme types
- `@byarcadia-app/aether/icons` — IconSymbol component (requires `expo-symbols` optional peerDep, iOS only)
- `@byarcadia-app/aether/tailwind-preset` — Tailwind preset only (for `tailwind.config.js`)

## Scripts

```
pnpm build          # Build with tsup (CJS + ESM + DTS)
pnpm dev            # Build in watch mode
pnpm check          # TypeScript check (tsc --noEmit)
pnpm lint           # Lint with oxlint
pnpm fmt            # Format with oxfmt
pnpm fmt:check      # Check formatting
pnpm example:start  # Start example Expo app
pnpm example:ios    # Run example on iOS simulator
```

## Adding New Components

1. Create directory: `src/ui/{category}/{component-name}/`
2. Create files: `{component-name}.tsx`, `types.ts`, `index.ts`
3. Define variants with `tv()` from tailwind-variants
4. Export variant constants as named exports for external access
5. Derive props from `VariantProps` + appropriate base props
6. Set `displayName` as `Aether.{Category}.{Name}`
7. Re-export through parent `index.ts` barrel files up to `src/index.ts`
8. Add Storybook story in `example/src/stories/`
9. Create `{component-name}.md` in the component directory following `docs/_template.md`
10. Add entry to `docs/components.md` index table

## Adding New Hooks

1. Create `src/hooks/use-{name}.ts`
2. Export from `src/hooks/index.ts`
3. Add JSDoc with `@example` tag
4. Update `docs/hooks.md`

## Documentation Requirements

**Every public API must have JSDoc with at least one `@example` tag.** This is not optional.

When changing the codebase, keep documentation in sync:

| Change             | Documentation Action                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| New component      | Create per-component `.md` following `docs/_template.md`, add to `docs/components.md`, add Storybook story |
| New hook           | Update `docs/hooks.md`                                                                                     |
| New utility        | Update `docs/utilities.md`                                                                                 |
| New color tokens   | Update JSDoc header in `colors.ts`, update `docs/colors.md`                                                |
| Changed public API | Update relevant per-component `.md` file                                                                   |
| New provider prop  | Update `docs/provider.md`                                                                                  |

The `docs/` directory and per-component `.md` files are the source of truth for consumers. If you add something to `src/index.ts`, it must appear in the relevant documentation file.

## Skill Maintenance

This library publishes two skills to [skills.sh](https://skills.sh) in the `skills/` directory:

- `skills/aether-setup/` — Installation and NativeWind configuration guide
- `skills/aether-ui/` — Full component API knowledge with reference files

When modifying the codebase, keep skills in sync:

| Change | Skill Update |
| --- | --- |
| New/modified component | Copy updated `.md` to `skills/aether-ui/references/`, update component catalog in `skills/aether-ui/SKILL.md` |
| Changed component API (props, variants, sub-components) | Copy updated `.md` to `skills/aether-ui/references/` |
| New hook or utility | Update relevant section in `skills/aether-ui/SKILL.md` |
| New peer dependency | Update install step and peer deps list in `skills/aether-setup/SKILL.md` |
| New color tokens | Update color tokens section in `skills/aether-ui/SKILL.md` |

Reference files in `skills/aether-ui/references/` are snapshots of the per-component `.md` docs. After updating a source `.md` file, copy it to the matching reference file.

## Testing

No unit test infrastructure exists yet. Verification is done through:

- Storybook (on-device via `@storybook/react-native` in `example/` app)
- `pnpm check` for type safety
- `pnpm lint` for code quality
- Visual testing in the example app

## Build Configuration

tsup builds three entry points:

- `src/index.ts` — main package entry
- `src/icons/index.ts` — `@byarcadia-app/aether/icons`
- `src/tailwind/index.ts` — `@byarcadia-app/aether/tailwind-preset`

Externals: `react`, `react-native`, `nativewind`, `expo-symbols`. JSX uses automatic runtime with `nativewind` as jsxImportSource.
