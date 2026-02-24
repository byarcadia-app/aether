import React from "react";
import type { LayoutChangeEvent } from "react-native";
import { View } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { cnx } from "../../utils";
import { useAnimationDisabled } from "../../hooks";
import { LIST_ANIMATION, LIST_DISPLAY_NAMES } from "./constants";
import { useListItemContext } from "./context";
import type { ListItemCollapseProps } from "./types";

/**
 * Custom easing curve for smooth, iOS-like animations.
 */
const ANIMATION_EASING = Easing.bezier(0.25, 0.1, 0.25, 1);

/**
 * Collapsible content section for list items.
 *
 * Renders content with smooth height animation when item is expanded/collapsed.
 * Uses height interpolation for smooth transitions.
 *
 * @example
 * ```tsx
 * <ListItem isCollapsible>
 *   <ListItemContent>Notifications</ListItemContent>
 *   <ListItemChevron />
 *   <ListItemCollapse>
 *     <VStack className="gap-2 py-2">
 *       <Text color="muted">Configure your notification preferences.</Text>
 *       <Button>Manage Notifications</Button>
 *     </VStack>
 *   </ListItemCollapse>
 * </ListItem>
 * ```
 */
export function ListItemCollapse({
  duration = LIST_ANIMATION.collapseDuration,
  children,
  className,
  ...viewProps
}: ListItemCollapseProps) {
  const { isExpanded } = useListItemContext();
  const isAnimationDisabled = useAnimationDisabled();

  // Measured content height for smooth animation
  const contentHeight = useSharedValue(0);

  // Animation progress (0 = collapsed, 1 = expanded)
  const animationProgress = useSharedValue(isExpanded ? 1 : 0);

  // Animate progress when expanded state changes
  React.useEffect(() => {
    if (isAnimationDisabled) {
      animationProgress.value = isExpanded ? 1 : 0;
    } else {
      animationProgress.value = withTiming(isExpanded ? 1 : 0, {
        duration,
        easing: ANIMATION_EASING,
      });
    }
  }, [isExpanded, animationProgress, duration, isAnimationDisabled]);

  // Measure content height on layout
  const handleLayout = (event: LayoutChangeEvent) => {
    const measuredHeight = event.nativeEvent.layout.height;
    if (measuredHeight > 0) {
      contentHeight.value = measuredHeight;
    }
  };

  // Animated style with interpolated height and opacity
  const animatedStyle = useAnimatedStyle(() => ({
    height: interpolate(
      animationProgress.value,
      [0, 1],
      [0, contentHeight.value || 1000], // Fallback if not measured yet
    ),
    opacity: animationProgress.value,
    overflow: "hidden" as const,
  }));

  return (
    <Animated.View
      style={animatedStyle}
      className={cnx("w-full px-4 pb-3", className)}
      {...viewProps}
    >
      <View onLayout={handleLayout}>{children}</View>
    </Animated.View>
  );
}

ListItemCollapse.displayName = LIST_DISPLAY_NAMES.LIST_ITEM_COLLAPSE;
