# Card

Compound card component. Static or pressable (determined by presence of `onPress` prop).

## Import

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardImage, CardFooter } from "@arcadia/aether";
```

## Anatomy

- **Card**, Main wrapper (static or pressable)
- **CardHeader**, Header section (title + description)
- **CardTitle**, Title (wraps Heading, default variant=3)
- **CardDescription**, Description (wraps Text, default variant=subhead, color=muted)
- **CardBody**, Main content area (optional `isBordered` for separator)
- **CardImage**, Image container with aspect ratio control
- **CardFooter**, Footer with horizontal layout (optional `isBordered`, `justify`)

## Usage

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardImage,
  CardFooter,
  Button,
  Text,
} from "@arcadia/aether";

<Card onPress={() => console.log("Card pressed")}>
  <CardImage aspectRatio="video">{/* Image component here */}</CardImage>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>This is a description of the card.</CardDescription>
  </CardHeader>
  <CardBody>
    <Text>Main content goes here.</Text>
  </CardBody>
  <CardFooter justify="end" isBordered={true}>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>;
```

## API Reference

### Card (Shared)

| Prop | Values | Default |
| --- | --- | --- |
| `level` | `SurfaceLevel` | `default` |
| `variant` | `SurfaceVariant` | `solid` |
| `isBordered` | `boolean` | `false` |
| `isElevated` | `boolean` | `false` |
| `...props` | `SurfaceProps` dependencies | . |

### Card (Pressable)

Active when `onPress` is provided.

| Prop | Values | Default |
| --- | --- | --- |
| `onPress` | `() => void` | required |
| `haptics` | `boolean` \| `HapticFeedbackStyle` | . |
| `disabled` | `boolean` | `false` |
| `animationConfig` | `CardAnimationConfig` | . |

### Compound Components

- **Card**, Main wrapper (static or pressable)
- **CardHeader**, Header section (title + description)
- **CardTitle**, Title (wraps Heading, default variant=3)
- **CardDescription**, Description (wraps Text, default variant=subhead, color=muted)
- **CardBody**, Main content area (optional `isBordered` for separator)
- **CardImage**, Image container with aspect ratio control
- **CardFooter**, Footer with horizontal layout (optional `isBordered`, `justify`)
