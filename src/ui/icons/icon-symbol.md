# IconSymbol

SF Symbol component for iOS. Requires `expo-symbols` (iOS only).

## Prerequisites

Install `expo-symbols` (iOS only — SF Symbols):

```bash
npx expo install expo-symbols
```

## Import

```tsx
import { IconSymbol } from "@byarcadiaapp/aether/icons";
```

## Usage

```tsx
<IconSymbol name="heart.fill" colorScheme="danger" />
<IconSymbol name="star" weight="bold" size={32} colorScheme="primary" />
```

## API Reference

| Prop          | Type           | Default     | Description                |
| ------------- | -------------- | ----------- | -------------------------- |
| `name`        | `SFSymbol`     | required    | SF Symbol name             |
| `size`        | `number`       | `24`        | Width and height in points |
| `colorScheme` | `ThemeColor`   | —           | Semantic theme color       |
| `weight`      | `SymbolWeight` | `"regular"` | Symbol weight              |
| `className`   | `string`       | —           | Tailwind classes           |
