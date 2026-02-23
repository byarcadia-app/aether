# TextField

Compound form input component with label, description, validation, clearable, multiline, and animated focus border.

## Import

```tsx
import {
  TextField,
  TextFieldLabel,
  TextFieldInput,
  TextFieldInputStartContent,
  TextFieldInputEndContent,
  TextFieldDescription,
  TextFieldErrorMessage,
} from "@byarcadia-app/aether";
```

## Anatomy

- **TextField** — Root container, provides context (isEditable, isDisabled, isInvalid, isRequired)
- **TextFieldLabel** — Label text, shows asterisk when required
- **TextFieldInput** — Main text input with animated border, supports clearable and multiline
- **TextFieldInputStartContent** — Left slot inside input wrapper (e.g., icon)
- **TextFieldInputEndContent** — Right slot inside input wrapper
- **TextFieldDescription** — Helper text below input, hidden when invalid
- **TextFieldErrorMessage** — Error text, visible only when invalid

## Usage

### Basic Usage

```tsx
import { TextField, TextFieldLabel, TextFieldInput } from "@byarcadia-app/aether";

<TextField>
  <TextFieldLabel>Username</TextFieldLabel>
  <TextFieldInput placeholder="Enter username" />
</TextField>;
```

### With Validation

```tsx
import { TextField, TextFieldLabel, TextFieldInput, TextFieldErrorMessage } from "@byarcadia-app/aether";

<TextField isInvalid={true} isRequired>
  <TextFieldLabel>Email</TextFieldLabel>
  <TextFieldInput defaultValue="invalid-email" />
  <TextFieldErrorMessage>Please enter a valid email address.</TextFieldErrorMessage>
</TextField>;
```

### Multiline

```tsx
import { TextField, TextFieldLabel, TextFieldInput } from "@byarcadia-app/aether";

<TextField>
  <TextFieldLabel>Bio</TextFieldLabel>
  <TextFieldInput multiline numberOfLines={4} placeholder="Tell us about yourself" />
</TextField>;
```

### With Start Content

```tsx
import {
  TextField,
  TextFieldLabel,
  TextFieldInput,
  TextFieldInputStartContent,
} from "@byarcadia-app/aether";
import { IconSymbol } from "@byarcadia-app/aether/icons";

<TextField>
  <TextFieldLabel>Search</TextFieldLabel>
  <TextFieldInput placeholder="Search...">
    <TextFieldInputStartContent>
      <IconSymbol name="magnifyingglass" size={18} color="muted" />
    </TextFieldInputStartContent>
  </TextFieldInput>
</TextField>;
```

## API Reference

### TextField

| Prop       | Values    | Default | Description               |
| ---------- | --------- | ------- | ------------------------- |
| children   | ReactNode | —       | Compound components       |
| isEditable | boolean   | true    | Whether input is editable |
| isDisabled | boolean   | false   | Whether input is disabled |
| isInvalid  | boolean   | false   | Whether in invalid state  |
| isRequired | boolean   | false   | Whether required          |
| className  | string    | —       | Additional classes        |

### TextFieldInput

| Prop             | Values               | Default | Description             |
| ---------------- | -------------------- | ------- | ----------------------- |
| value            | string               | —       | Controlled value        |
| defaultValue     | string               | ""      | Uncontrolled default    |
| isClearable      | boolean              | false   | Show clear button       |
| onClear          | () => void           | —       | Clear callback          |
| multiline        | boolean              | false   | Multiline mode          |
| numberOfLines    | number               | 4       | Lines for multiline     |
| children         | ReactNode            | —       | Start/end content slots |
| wrapperStyle     | StyleProp<ViewStyle> | —       | Wrapper styles          |
| wrapperClassName | string               | —       | Wrapper classes         |

Supports all standard `TextInputProps` except `value`, `defaultValue`, and `editable`.

### TextFieldLabel

| Prop      | Values    | Default | Description        |
| --------- | --------- | ------- | ------------------ |
| children  | ReactNode | —       | Label content      |
| className | string    | —       | Additional classes |

### TextFieldInputStartContent

| Prop      | Values    | Default | Description            |
| --------- | --------- | ------- | ---------------------- |
| children  | ReactNode | —       | Content for start slot |
| className | string    | —       | Additional classes     |

### TextFieldInputEndContent

| Prop      | Values    | Default | Description          |
| --------- | --------- | ------- | -------------------- |
| children  | ReactNode | —       | Content for end slot |
| className | string    | —       | Additional classes   |

### TextFieldDescription

| Prop      | Values    | Default | Description         |
| --------- | --------- | ------- | ------------------- |
| children  | ReactNode | —       | Helper text content |
| className | string    | —       | Additional classes  |

### TextFieldErrorMessage

| Prop      | Values    | Default | Description           |
| --------- | --------- | ------- | --------------------- |
| children  | ReactNode | —       | Error message content |
| className | string    | —       | Additional classes    |
