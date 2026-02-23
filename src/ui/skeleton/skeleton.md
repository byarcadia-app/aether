# Skeleton

Pulsing loading placeholder. Size and shape are controlled through Tailwind classes.

## Import

```tsx
import { Skeleton } from "@arcadia/aether";
```

## Usage

### Basic placeholder

```tsx
<Skeleton className="h-32 w-full rounded-2xl" />
```

### Text rows

```tsx
import { VStack } from "@arcadia/aether";

<VStack className="gap-2">
  <Skeleton className="h-4 w-full rounded-lg" />
  <Skeleton className="h-4 w-3/4 rounded-lg" />
  <Skeleton className="h-4 w-1/2 rounded-lg" />
</VStack>;
```

### Avatar

```tsx
<Skeleton className="h-12 w-12 rounded-full" />
```

## API Reference

| Prop              | Type     | Default             | Description                    |
| ----------------- | -------- | ------------------- | ------------------------------ |
| `backgroundColor` | `string` | theme surface color | Custom background color        |
| `className`       | `string` | —                   | Tailwind classes (size, shape) |
