# GlassButton

iOS 26+ Liquid Glass button with automatic fallback to glass styling. Requires `@callstack/liquid-glass` (required peer dependency).

## Import

```tsx
import { GlassButton } from "@byarcadia-app/aether";
```

## Usage

### Icon button (back/close)

```tsx
<GlassButton size="icon" accessibilityLabel="Go back" onPress={() => {}}>
  ←
</GlassButton>
```

### Floating action button

```tsx
<GlassButton size="fab" accessibilityLabel="Add new" onPress={() => {}}>
  +
</GlassButton>
```

### Variants

The `variant` prop controls the visual appearance in fallback mode (iOS < 26). In native Liquid Glass mode, use `tintColor` for branding.

```tsx
{
  /* Default — neutral glass */
}
<GlassButton size="fab" accessibilityLabel="Add" onPress={() => {}}>
  +
</GlassButton>;

{
  /* Primary — bold colored glass */
}
<GlassButton size="fab" variant="primary" accessibilityLabel="Add" onPress={() => {}}>
  +
</GlassButton>;

{
  /* Secondary — subtle colored glass */
}
<GlassButton size="fab" variant="secondary" accessibilityLabel="Filter" onPress={() => {}}>
  ⚙
</GlassButton>;
```

> In native Liquid Glass mode (iOS 26+), `variant` has no visual effect. Use the `tintColor` prop to brand the glass surface.

### Force fallback (no LiquidGlass)

```tsx
<GlassButton size="icon" useLiquidGlass={false} accessibilityLabel="Close" onPress={() => {}}>
  ×
</GlassButton>
```

## API Reference

| Prop                 | Values                                | Default   |
| -------------------- | ------------------------------------- | --------- |
| `size`               | `icon` \| `fab` \| `badge`            | `icon`    |
| `variant`            | `default` \| `primary` \| `secondary` | `default` |
| `effect`             | `regular` \| `clear`                  | per size  |
| `colorScheme`        | `system` \| `light` \| `dark`         | `system`  |
| `disabled`           | `boolean`                             | `false`   |
| `useLiquidGlass`     | `boolean`                             | `true`    |
| `haptics`            | `boolean` \| `HapticFeedbackStyle`    | `true`    |
| `accessibilityLabel` | `string`                              | required  |
| `tintColor`          | `ColorValue`                          | —         |

> **Required dependency**: `@callstack/liquid-glass` must be installed for GlassButton. On iOS 26+ it renders native Liquid Glass; on older iOS it automatically falls back to themed glass styling.
