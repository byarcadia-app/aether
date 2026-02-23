# VStack / HStack

Polymorphic flexbox layout primitives. VStack renders a column, HStack renders a row. Both accept an `as` prop to render as any React Native component.

## Import

```tsx
import { VStack, HStack } from "@byarcadia-app/aether";
```

## Usage

### VStack Basic Example

```tsx
<VStack className="gap-4 p-4">
  <Text>Top</Text>
  <Text>Bottom</Text>
</VStack>
```

### HStack Basic Example

```tsx
<HStack className="gap-2 items-center">
  <IconSymbol name="star" />
  <Text>Favorite</Text>
</HStack>
```

### Polymorphic (as Pressable)

```tsx
{
  /* Polymorphic — renders as Pressable */
}
<VStack as={Pressable} onPress={handlePress} className="gap-2">
  <Text>Clickable stack</Text>
</VStack>;
```

## API Reference

| Prop        | Type            | Default | Description                                |
| ----------- | --------------- | ------- | ------------------------------------------ |
| `as`        | `ComponentType` | `View`  | Component to render as                     |
| `className` | `string`        | —       | Tailwind classes (merged with layout base) |
| `...props`  | —               | —       | All props of the `as` component            |
