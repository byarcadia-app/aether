# Color Tokens

Available as Tailwind classes (e.g., `bg-primary`, `text-danger-foreground`, `border-border`):

| Token                                        | Description                                                 |
| -------------------------------------------- | ----------------------------------------------------------- |
| `background` / `foreground`                  | Page background and default text                            |
| `surface` / `surface-foreground`             | Card and section backgrounds                                |
| `primary` / `primary-foreground`             | Brand color                                                 |
| `secondary` / `secondary-foreground`         | Secondary actions                                           |
| `success` / `success-foreground`             | Success state                                               |
| `warning` / `warning-foreground`             | Warning state                                               |
| `danger` / `danger-foreground`               | Error/destructive state                                     |
| `info` / `info-foreground`                   | Informational state                                         |
| `muted` / `muted-foreground`                 | Subtle backgrounds and secondary text                       |
| `border` / `input` / `ring`                  | UI chrome                                                   |
| `glass` / `glass-border` / `glass-highlight` | Glassmorphism effects                                       |
| `tag-*`                                      | Tag colors: coral, amber, sky, lavender, slate, mint, stone |

All colors are HSLA-based and support custom overrides via the `colorPalette` prop on `AetherProvider`.

## Usage

Use tokens as Tailwind classes with any utility prefix:

```tsx
// Backgrounds
<View className="bg-primary" />
<View className="bg-surface" />
<View className="bg-muted" />

// Text
<Text className="text-foreground" />
<Text className="text-primary-foreground" />
<Text className="text-muted-foreground" />

// Borders
<View className="border border-border" />
<View className="border border-primary" />

// Combined
<View className="bg-primary p-4">
  <Text className="text-primary-foreground">Contrast text on brand color</Text>
</View>

<View className="bg-danger rounded-lg p-3">
  <Text className="text-danger-foreground">Error message</Text>
</View>
```
