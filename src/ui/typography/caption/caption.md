# Caption

Small text for metadata, timestamps, and badges. Sizes: md (12pt) and sm (11pt).

## Import

```tsx
import { Caption } from "@arcadia/aether";
```

## Usage

### Basic Usage

Use captions for metadata, timestamps, and supplementary information.

```tsx
import { Caption } from "@arcadia/aether";

<Caption color="muted">Posted 2 hours ago</Caption>
<Caption variant="sm" color="success">Active</Caption>
```

## API Reference

### Caption

| Prop | Values | Default | Description |
| ---- | ------ | ------- | ----------- |
| `variant` | `md` \| `sm` | `md` | |
| `weight` | `regular` \| `medium` \| `semibold` \| `bold` | `regular` | |
| `color` | base colors + foreground variants | `default` | |
