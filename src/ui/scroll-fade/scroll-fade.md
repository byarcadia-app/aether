# ScrollFade

Gradient fade overlay to indicate scrollable content. Placed at edges of scroll containers with absolute positioning.

## Import

```tsx
import { ScrollFade } from "@arcadia/aether";
```

## Usage

### Bottom fade for vertical scroll

```tsx
import { ScrollFade } from "@arcadia/aether";
import { ScrollView, View } from "react-native";

<View className="relative flex-1">
  <ScrollView>...</ScrollView>
  <ScrollFade position="bottom" />
</View>
```

### Horizontal fades

```tsx
import { ScrollFade } from "@arcadia/aether";
import { ScrollView, View } from "react-native";

<View className="relative">
  <ScrollView horizontal>...</ScrollView>
  <ScrollFade position="left" size={16} intensity={0.5} />
  <ScrollFade position="right" size={16} intensity={0.5} />
</View>
```

## API Reference

| Prop        | Values                                 | Default                              |
| ----------- | -------------------------------------- | ------------------------------------ |
| `position`  | `top` \| `bottom` \| `left` \| `right` | required                             |
| `size`      | `number`                               | `120` (vertical) / `24` (horizontal) |
| `color`     | `string`                               | theme background color               |
| `intensity` | `number` (0-1)                         | `1`                                  |
