# AnimationWrapper

Convenience wrapper around `Animated.View` for declarative enter/exit/layout animations from react-native-reanimated.

## Import

```tsx
import { AnimationWrapper } from "@arcadia/aether";
```

## Usage

```tsx
import { AnimationWrapper } from "@arcadia/aether";
import { FadeIn, FadeOut, LinearTransition } from "react-native-reanimated";
import { Text } from "@arcadia/aether";

<AnimationWrapper entering={FadeIn} exiting={FadeOut} layout={LinearTransition}>
  <Text>Animated content</Text>
</AnimationWrapper>
```

## API Reference

| Prop       | Type                    | Description                      |
| ---------- | ----------------------- | -------------------------------- |
| `entering` | `AnimationBuilder`      | Enter animation (e.g., `FadeIn`) |
| `exiting`  | `AnimationBuilder`      | Exit animation (e.g., `FadeOut`) |
| `layout`   | `LayoutAnimationConfig` | Layout transition animation      |
| `...props` | `ViewProps`             | All standard Animated.View props |
