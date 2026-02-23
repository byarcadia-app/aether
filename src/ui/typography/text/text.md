# Text

Body text variants following iOS HIG: headline (17pt semibold), body (17pt), callout (16pt), subhead (15pt), footnote (13pt).

## Import

```tsx
import { Text } from "@arcadia/aether";
```

## Usage

### Basic Usage

Use text for body copy, descriptions, and labels.

```tsx
import { Text } from "@arcadia/aether";

<Text>Default body text</Text>
<Text variant="headline">Important Message</Text>
<Text variant="callout" color="muted">Description</Text>
<Text variant="footnote">Fine print</Text>

{/* On colored backgrounds */}
<View className="bg-primary">
  <Text color="primary-foreground">Contrast text</Text>
</View>
```

## API Reference

### Text

| Prop | Values | Default | Description |
| ---- | ------ | ------- | ----------- |
| `variant` | `headline` \| `body` \| `callout` \| `subhead` \| `footnote` | `body` | |
| `weight` | `regular` \| `medium` \| `semibold` \| `bold` | per iOS spec | |
| `color` | base colors + `primary-foreground` \| `secondary-foreground` \| `success-foreground` \| `warning-foreground` \| `danger-foreground` \| `info-foreground` | `default` | |
