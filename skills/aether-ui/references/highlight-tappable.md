# HighlightTappable

Lightweight pressable with highlight overlay and optional scale animation. Ideal for list rows and tappable cards.

## Import

```tsx
import { HighlightTappable } from "@byarcadia-app/aether";
```

## Usage

### List row pattern

```tsx
<HighlightTappable onPress={() => {}} className="px-4 py-3">
  <Text>Settings</Text>
</HighlightTappable>
```

### With scale animation

```tsx
<HighlightTappable enableScale={true} onPress={() => {}}>
  <Text>Press me</Text>
</HighlightTappable>
```

### Custom highlight color

```tsx
<HighlightTappable highlightColor="primary" highlightOpacity={0.3} onPress={() => {}}>
  <Text>Custom highlight</Text>
</HighlightTappable>
```

## API Reference

| Prop               | Values                             | Default   |
| ------------------ | ---------------------------------- | --------- |
| `disabled`         | `boolean`                          | `false`   |
| `className`        | `string`                           | —         |
| `highlightColor`   | `ThemeColor`                       | `"muted"` |
| `highlightOpacity` | `number` (0-1)                     | `1`       |
| `haptics`          | `boolean` \| `HapticFeedbackStyle` | —         |
| `enableScale`      | `boolean`                          | `false`   |
| `scaleValue`       | `number` (0-1)                     | `0.98`    |
