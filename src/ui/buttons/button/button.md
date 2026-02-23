# Button

Full-featured button with 5 variants, 3 sizes, loading state, shimmer animation, and haptic feedback.

## Import

```tsx
import { Button, ButtonLabel } from "@arcadia/aether";
```

## Anatomy

- **Button** — Main container that handles press interactions, animations, and variants
- **ButtonLabel** — Text content of the button, for explicit label styling

## Usage

### Basic usage

```tsx
<Button onPress={() => {}}>Press me</Button>
```

### Variants

```tsx
<Button variant="secondary" size="lg" onPress={() => {}}>Secondary</Button>
<Button variant="destructive" disabled={true} onPress={() => {}}>Disabled</Button>
```

### Loading state

```tsx
<Button variant="outline" isLoading={true} onPress={() => {}}>Loading...</Button>
```

### Shimmer effect

```tsx
<Button withShimmer={true} onPress={() => {}}>Shimmer</Button>
```

### With ButtonLabel

```tsx
<Button onPress={() => {}}>
  <ButtonLabel>Styled Label</ButtonLabel>
</Button>
```

## API Reference

### Button

| Prop          | Values                                                                     | Default   |
| ------------- | -------------------------------------------------------------------------- | --------- |
| `variant`     | `primary` \| `secondary` \| `outline` \| `ghost` \| `destructive`          | `primary` |
| `size`        | `sm` \| `md` \| `lg`                                                       | `md`      |
| `isIconOnly`  | `boolean`                                                                  | `false`   |
| `isRounded`   | `boolean`                                                                  | `false`   |
| `disabled`    | `boolean`                                                                  | `false`   |
| `isLoading`   | `boolean`                                                                  | `false`   |
| `withShimmer` | `boolean`                                                                  | `false`   |
| `haptics`     | `boolean` \| `"light"` \| `"medium"` \| `"heavy"` \| `"rigid"` \| `"soft"` | —         |
| `children`    | `ReactNode` \| `(context) => ReactNode`                                    | required  |
