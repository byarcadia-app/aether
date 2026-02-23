# Component Documentation Templates

Two template variants for @byarcadia/aether component documentation.

## Conventions

- Import path: `@byarcadia/aether` (exception: IconSymbol uses `@byarcadia/aether/icons`)
- Only document content from the existing README — no new examples or sections
- Use relative links between docs (from file location)
- Props tables use: `| Prop | Type/Values | Default | Description |`

---

## Simple Component Template

For components without sub-components: Heading, Text, Caption, VStack/HStack, Button, GlassButton, HighlightTappable, Surface, Skeleton, ScrollFade, AnimationWrapper, IconSymbol.

```markdown
# {ComponentName}

{One-line description from README.}

## Import

\`\`\`tsx
import { {ComponentName} } from "@byarcadia/aether";
\`\`\`

## Usage

### {Usage Pattern 1}

{Description.}

\`\`\`tsx
{Code example from README}
\`\`\`

### {Usage Pattern 2}

{Description.}

\`\`\`tsx
{Code example from README}
\`\`\`

## API Reference

### {ComponentName}

| Prop | Values | Default | Description |
| ---- | ------ | ------- | ----------- |
| ...  | ...    | ...     | ...         |
```

---

## Compound Component Template

For components with sub-components: Card (7 parts), List (8 parts), Button (with ButtonLabel).

```markdown
# {ComponentName}

{One-line description from README.}

## Import

\`\`\`tsx
import { {Component}, {SubComponent1}, {SubComponent2} } from "@byarcadia/aether";
\`\`\`

## Anatomy

- **{Component}** — {Description of main container}
- **{SubComponent1}** — {Description}
- **{SubComponent2}** — {Description}

## Usage

### {Usage Pattern 1}

{Description.}

\`\`\`tsx
{Code example from README}
\`\`\`

### {Usage Pattern 2}

{Description.}

\`\`\`tsx
{Code example from README}
\`\`\`

## API Reference

### {Component}

| Prop | Values | Default | Description |
| ---- | ------ | ------- | ----------- |
| ...  | ...    | ...     | ...         |

### {SubComponent1}

| Prop | Values | Default | Description |
| ---- | ------ | ------- | ----------- |
| ...  | ...    | ...     | ...         |
```
