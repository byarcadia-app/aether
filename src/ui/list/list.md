# List

iOS Settings-style compound list component with sections, collapsible items, and accessories.

## Import

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemIcon,
  ListItemAccessory,
  ListItemChevron,
  ListItemCollapse,
  ListSectionHeader,
} from "@byarcadia/aether";
```

## Anatomy

- **List** — Root container with optional Surface wrapping
- **ListItem** — Interactive item with press highlight and optional collapsible mode
- **ListItemContent** — Content wrapper (auto-wraps strings with Text)
- **ListItemIcon** — Icon container with position control (`left` | `right`)
- **ListItemAccessory** — Right-side accessories (Switch, Text, Badge)
- **ListItemChevron** — Animated chevron that rotates when expanded (requires `expo-symbols`)
- **ListItemCollapse** — Collapsible content with smooth height animation
- **ListSectionHeader** — Section header (placed OUTSIDE List, auto-uppercased)

## Usage

### Basic Usage

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemChevron,
  ListSectionHeader,
  VStack,
} from "@byarcadia/aether";

<VStack className="gap-2">
  <ListSectionHeader>Account</ListSectionHeader>
  <List variant="surface" surfaceLevel="secondary">
    <ListItem onPress={handleProfile} haptics>
      <ListItemContent>Profile</ListItemContent>
      <ListItemChevron />
    </ListItem>
    <ListItem onPress={handleSettings}>
      <ListItemContent>Settings</ListItemContent>
      <ListItemChevron />
    </ListItem>
  </List>
</VStack>;
```

### Collapsible Items

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemChevron,
  ListItemCollapse,
  Text,
} from "@byarcadia/aether";

<List variant="surface">
  <ListItem isCollapsible defaultExpanded={false}>
    <ListItemContent>Notifications</ListItemContent>
    <ListItemChevron />
    <ListItemCollapse>
      <Text color="muted">Configure your notification preferences.</Text>
    </ListItemCollapse>
  </ListItem>
</List>;
```

### With Accessories

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemAccessory,
  ListItemChevron,
  Text,
} from "@byarcadia/aether";
import { Switch } from "react-native";

<List variant="surface">
  <ListItem interactive={false}>
    <ListItemContent>Dark Mode</ListItemContent>
    <ListItemAccessory>
      <Switch value={isDark} onValueChange={setIsDark} />
    </ListItemAccessory>
  </ListItem>
  <ListItem onPress={handleLanguage}>
    <ListItemContent>Language</ListItemContent>
    <ListItemAccessory>
      <Text color="muted">English</Text>
    </ListItemAccessory>
    <ListItemChevron />
  </ListItem>
</List>;
```

## API Reference

### List

| Prop           | Values                                                                  | Default     |
| -------------- | ----------------------------------------------------------------------- | ----------- |
| `variant`      | `default` \| `surface`                                                  | `default`   |
| `surfaceLevel` | `default` \| `secondary` \| `tertiary` \| `quaternary` \| `transparent` | `secondary` |
| `showDividers` | `boolean`                                                               | `true`      |

### ListItem

| Prop              | Values                             | Default |
| ----------------- | ---------------------------------- | ------- |
| `onPress`         | `() => void`                       | —       |
| `interactive`     | `boolean`                          | `true`  |
| `isCollapsible`   | `boolean`                          | `false` |
| `isExpanded`      | `boolean`                          | —       |
| `defaultExpanded` | `boolean`                          | `false` |
| `disabled`        | `boolean`                          | `false` |
| `haptics`         | `boolean` \| `HapticFeedbackStyle` | —       |
| `animationConfig` | `ListItemAnimationConfig`          | —       |

### Compound Components

- **List** — Root container with optional Surface wrapping
- **ListItem** — Interactive item with press highlight and optional collapsible mode
- **ListItemContent** — Content wrapper (auto-wraps strings with Text)
- **ListItemIcon** — Icon container with position control (`left` | `right`)
- **ListItemAccessory** — Right-side accessories (Switch, Text, Badge)
- **ListItemChevron** — Animated chevron that rotates when expanded (requires `expo-symbols`)
- **ListItemCollapse** — Collapsible content with smooth height animation
- **ListSectionHeader** — Section header (placed OUTSIDE List, auto-uppercased)
