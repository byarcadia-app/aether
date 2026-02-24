import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { cnx } from "../../utils";
import { useAnimationDisabled } from "../../hooks";
import { IconSymbol } from "../icons";
import { LIST_ANIMATION, LIST_DISPLAY_NAMES } from "./constants";
import { useListItemContext } from "./context";
import type { ListItemChevronProps } from "./types";

/**
 * Custom easing curve for smooth, iOS-like animations.
 */
const ANIMATION_EASING = Easing.bezier(0.25, 0.1, 0.25, 1);

/**
 * Animated chevron indicator for list items.
 *
 * Rotates from 0° to 90° when expanded (typically used with collapsible items).
 * Uses the same easing curve as other Aether press animations for consistency.
 *
 * @example
 * ```tsx
 * <ListItem isCollapsible>
 *   <ListItemContent>Settings</ListItemContent>
 *   <ListItemChevron />
 *   <ListItemCollapse>
 *     <Text>Collapsed content</Text>
 *   </ListItemCollapse>
 * </ListItem>
 * ```
 */
export function ListItemChevron({
  duration = LIST_ANIMATION.chevronDuration,
  className,
}: ListItemChevronProps) {
  const { isExpanded } = useListItemContext();
  const isAnimationDisabled = useAnimationDisabled();
  const animDisabledRef = useSharedValue(isAnimationDisabled);
  animDisabledRef.value = isAnimationDisabled;

  const animatedStyle = useAnimatedStyle(() => {
    const targetRotation = isExpanded ? "90deg" : "0deg";

    if (animDisabledRef.value) {
      return {
        transform: [
          {
            rotate: targetRotation,
          },
        ],
      };
    }

    return {
      transform: [
        {
          rotate: withTiming(targetRotation, {
            duration,
            easing: ANIMATION_EASING,
          }),
        },
      ],
    };
  });

  return (
    <Animated.View style={animatedStyle} className={cnx("ml-auto", className)}>
      <IconSymbol name="chevron.right" size={16} colorScheme="muted-foreground" />
    </Animated.View>
  );
}

ListItemChevron.displayName = LIST_DISPLAY_NAMES.LIST_ITEM_CHEVRON;
