# ErrorView

Conditional error message component. Renders error text only when isInvalid is true.

## Import

```tsx
import { ErrorView } from "@byarcadia/aether";
```

## Usage

### Basic Usage

```tsx
import { ErrorView } from "@byarcadia/aether";

<ErrorView isInvalid={!!error}>{error?.message}</ErrorView>;
```

### With TextField

```tsx
import { TextField, TextFieldInput, ErrorView } from "@byarcadia/aether";

<TextField isInvalid={!!error}>
  <TextFieldInput placeholder="Enter username" />
  <ErrorView isInvalid={!!error} className="mt-1">
    {error?.message}
  </ErrorView>
</TextField>;
```

## API Reference

### ErrorView

| Prop      | Values    | Default | Description                       |
| --------- | --------- | ------- | --------------------------------- |
| isInvalid | boolean   | —       | Whether to show the error message |
| children  | ReactNode | —       | The error message content         |
| className | string    | —       | Additional classes                |

Supports all standard `TextProps`.
