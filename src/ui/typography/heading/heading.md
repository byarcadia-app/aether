# Heading

Heading levels 1-4 mapping to iOS HIG: Large Title (34pt), Title 1 (28pt), Title 2 (22pt), Title 3 (20pt).

## Import

```tsx
import { Heading } from "@arcadia/aether";
```

## Usage

### Basic Usage

Use headings to provide structure and hierarchy to your layouts.

```tsx
import { Heading } from "@arcadia/aether";

<Heading variant={1}>Large Title</Heading>
<Heading variant={2} color="primary">Title 1</Heading>
<Heading variant={3} weight="medium">Title 2</Heading>
<Heading variant={4}>Title 3</Heading>
```

## API Reference

### Heading

| Prop | Values | Default | Description |
| ---- | ------ | ------- | ----------- |
| `variant` | `1` \| `2` \| `3` \| `4` | `1` | |
| `weight` | `regular` \| `medium` \| `semibold` \| `bold` | per iOS spec | |
| `color` | `default` \| `primary` \| `secondary` \| `muted` \| `success` \| `warning` \| `danger` \| `info` \| `inherit` | `default` | |
