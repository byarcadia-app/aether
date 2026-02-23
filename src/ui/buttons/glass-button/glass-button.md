# GlassButton

iOS 26+ Liquid Glass button with automatic fallback to glass styling. Requires `@callstack/liquid-glass` (required peer dependency).

## Import

```tsx
import { GlassButton } from "@arcadia/aether";
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

### Force fallback (no LiquidGlass)

```tsx
<GlassButton size="icon" useLiquidGlass={false} accessibilityLabel="Close" onPress={() => {}}>
  ×
</GlassButton>
```

## API Reference

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
