# Surface

Layered background component with 4 depth levels and 3 variants (solid, glass, fog).

## Import

```tsx
import { Surface } from "@byarcadia/aether";
```

## Usage

### Basic solid surface

```tsx
import { Surface, Text } from "@byarcadia/aether";

<Surface level="secondary" isBordered={true} className="p-4">
  <Text>Level 2 Surface</Text>
</Surface>;
```

### Glass variant

```tsx
import { Surface, Text } from "@byarcadia/aether";

<Surface variant="glass" className="p-4">
  <Text>Glass Surface</Text>
</Surface>;
```

### Fog variant with custom intensity

```tsx
import { Surface, Text } from "@byarcadia/aether";

<Surface variant="fog" fogDirection="bottom" fogIntensity={0.2} className="p-4">
  <Text>Fog Surface</Text>
</Surface>;
```

## API Reference

| Prop           | Values                                                                  | Default   |
| -------------- | ----------------------------------------------------------------------- | --------- |
| `level`        | `default` \| `secondary` \| `tertiary` \| `quaternary` \| `transparent` | `default` |
| `variant`      | `solid` \| `glass` \| `fog`                                             | `solid`   |
| `glassEffect`  | `regular` \| `clear`                                                    | `regular` |
| `fogDirection` | `top` \| `bottom` \| `both`                                             | `top`     |
| `fogIntensity` | `number` (0-1)                                                          | `0.15`    |
| `isBordered`   | `boolean`                                                               | `false`   |
| `isElevated`   | `boolean`                                                               | `false`   |
