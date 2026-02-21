import type { GestureResponderEvent } from "react-native";
import { View } from "react-native";
import type { HapticFeedbackStyle } from "../../utils";
import { cnx, hapticsImpact } from "../../utils";
import { AnimatedPressable, PressableHighlight, usePressableAnimation } from "../buttons/shared";
import { HStack, VStack } from "../layout";
import { Surface } from "../surface";
import { Heading } from "../typography/heading";
import { Text } from "../typography/text";
import {
  CARD_HIGHLIGHT_COLOR_MAP,
  CARD_LAYOUT,
  CARD_SPACING,
  FOOTER_JUSTIFY_CLASSES,
  IMAGE_ASPECT_RATIOS,
} from "./constants";
import type {
  CardBodyProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardImageProps,
  CardProps,
  CardTitleProps,
} from "./types";

// ============================================================================
// Static Card (internal)
// ============================================================================

function StaticCard({
  level = "default",
  variant = "solid",
  glassEffect = "regular",
  fogDirection,
  fogIntensity,
  isBordered = false,
  isElevated = false,
  children,
  className,
  style,
  ...viewProps
}: CardProps) {
  return (
    <Surface
      level={level}
      variant={variant}
      glassEffect={glassEffect}
      fogDirection={fogDirection}
      fogIntensity={fogIntensity}
      isBordered={isBordered}
      isElevated={isElevated}
      className={cnx("overflow-hidden", className)}
      style={style}
      {...viewProps}>
      {children}
    </Surface>
  );
}

// ============================================================================
// Pressable Card (internal)
// ============================================================================

function PressableCard({
  level = "default",
  variant = "solid",
  glassEffect = "regular",
  fogDirection,
  fogIntensity,
  isBordered = false,
  isElevated = false,
  children,
  className,
  style,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  disabled = false,
  haptics,
  animationConfig,
  accessibilityLabel,
  accessibilityHint,
  ...viewProps
}: CardProps & { onPress: () => void }) {
  const handleHapticPressIn = (event: GestureResponderEvent) => {
    if (haptics && !disabled) {
      const feedbackStyle = haptics === true ? undefined : (haptics as HapticFeedbackStyle);
      hapticsImpact(feedbackStyle);
    }
    onPressIn?.(event);
  };

  const { animatedStyle, isPressed, handlePressIn, handlePressOut } = usePressableAnimation(
    {
      duration: animationConfig?.scale?.duration,
      scaleValue: animationConfig?.scale?.scaleValue,
      isDisabled: disabled,
    },
    handleHapticPressIn,
    onPressOut,
  );

  const highlightColor = CARD_HIGHLIGHT_COLOR_MAP[level];

  return (
    <AnimatedPressable
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      style={animatedStyle}
      {...viewProps}>
      <Surface
        level={level}
        variant={variant}
        glassEffect={glassEffect}
        fogDirection={fogDirection}
        fogIntensity={fogIntensity}
        isBordered={isBordered}
        isElevated={isElevated}
        className={cnx("overflow-hidden", className)}
        style={style}>
        {children}
        <PressableHighlight
          isPressed={isPressed}
          colorKey={highlightColor}
          opacity={animationConfig?.highlight?.opacity}
          duration={animationConfig?.highlight?.duration}
          isDisabled={animationConfig?.highlight?.isDisabled}
        />
      </Surface>
    </AnimatedPressable>
  );
}

// ============================================================================
// Card (Main Component)
// ============================================================================

/**
 * Card component with optional pressable functionality.
 *
 * Supports two variants:
 * - **Static**: No `onPress` prop, renders as a simple container
 * - **Pressable**: Has `onPress` prop, includes press animations and haptics
 *
 * @example
 * ```tsx
 * // Static Card
 * <Card level="secondary" isBordered isElevated>
 *   <CardHeader>
 *     <CardTitle>Title</CardTitle>
 *     <CardDescription>Description</CardDescription>
 *   </CardHeader>
 *   <CardBody>
 *     <Text>Content</Text>
 *   </CardBody>
 * </Card>
 *
 * // Pressable Card
 * <Card onPress={() => navigate("details")} haptics>
 *   <CardBody>
 *     <Text>Tap me</Text>
 *   </CardBody>
 * </Card>
 * ```
 */
export function Card(props: CardProps) {
  const isPressable = "onPress" in props && props.onPress !== undefined;

  if (isPressable) {
    return <PressableCard {...(props as CardProps & { onPress: () => void })} />;
  }

  return <StaticCard {...props} />;
}

Card.displayName = "Aether.Card.Card";

// ============================================================================
// CardHeader
// ============================================================================

/**
 * Header section for Card. Contains title and description.
 *
 * @example
 * ```tsx
 * <CardHeader>
 *   <CardTitle>Product Name</CardTitle>
 *   <CardDescription>Brief description</CardDescription>
 * </CardHeader>
 * ```
 */
export function CardHeader({ children, className, ...viewProps }: CardHeaderProps) {
  return (
    <VStack className={cnx(CARD_LAYOUT.header, CARD_SPACING.header, className)} {...viewProps}>
      {children}
    </VStack>
  );
}

CardHeader.displayName = "Aether.Card.CardHeader";

// ============================================================================
// CardTitle
// ============================================================================

/**
 * Title component for Card. Auto-wraps strings with Heading.
 *
 * @example
 * ```tsx
 * // Simple string (auto-styled)
 * <CardTitle>Product Name</CardTitle>
 *
 * // Custom composition
 * <CardTitle variant={2} color="primary">
 *   Custom Title
 * </CardTitle>
 * ```
 */
export function CardTitle({ children, variant = 3, ...headingProps }: CardTitleProps) {
  return (
    <Heading variant={variant} {...headingProps}>
      {children}
    </Heading>
  );
}

CardTitle.displayName = "Aether.Card.CardTitle";

// ============================================================================
// CardDescription
// ============================================================================

/**
 * Description component for Card. Auto-wraps strings with muted Text.
 *
 * @example
 * ```tsx
 * // Simple string (auto-styled as muted)
 * <CardDescription>Brief product description</CardDescription>
 *
 * // Custom composition
 * <CardDescription variant="footnote" color="warning">
 *   Custom description
 * </CardDescription>
 * ```
 */
export function CardDescription({
  children,
  variant = "subhead",
  color = "muted",
  ...textProps
}: CardDescriptionProps) {
  return (
    <Text variant={variant} color={color} {...textProps}>
      {children}
    </Text>
  );
}

CardDescription.displayName = "Aether.Card.CardDescription";

// ============================================================================
// CardBody
// ============================================================================

/**
 * Main content section for Card. Expands to fill available space.
 *
 * @example
 * ```tsx
 * <CardBody>
 *   <Text>Main content here</Text>
 * </CardBody>
 *
 * // With border separator
 * <CardBody isBordered>
 *   <Text>Content with top border</Text>
 * </CardBody>
 * ```
 */
export function CardBody({ children, className, isBordered = false, ...viewProps }: CardBodyProps) {
  return (
    <VStack
      className={cnx(
        CARD_LAYOUT.body,
        CARD_SPACING.body,
        isBordered && "border-border border-t",
        className,
      )}
      {...viewProps}>
      {children}
    </VStack>
  );
}

CardBody.displayName = "Aether.Card.CardBody";

// ============================================================================
// CardImage
// ============================================================================

/**
 * Image container for Card with aspect ratio control.
 *
 * @example
 * ```tsx
 * <CardImage aspectRatio="square" position="top">
 *   <Image source={{ uri: "..." }} className="w-full h-full" />
 * </CardImage>
 * ```
 */
export function CardImage({
  children,
  className,
  aspectRatio = "video",
  position = "top",
  ...viewProps
}: CardImageProps) {
  const aspectClass = IMAGE_ASPECT_RATIOS[aspectRatio];
  const positionClass = position === "top" ? "rounded-t-3xl" : "";

  return (
    <View
      className={cnx("w-full overflow-hidden", aspectClass, positionClass, className)}
      {...viewProps}>
      {children}
    </View>
  );
}

CardImage.displayName = "Aether.Card.CardImage";

// ============================================================================
// CardFooter
// ============================================================================

/**
 * Footer section for Card. Horizontal layout for actions.
 *
 * @example
 * ```tsx
 * <CardFooter justify="end">
 *   <Button variant="ghost">Cancel</Button>
 *   <Button variant="primary">Save</Button>
 * </CardFooter>
 *
 * // With border separator
 * <CardFooter isBordered justify="between">
 *   <Button variant="outline">Add to Cart</Button>
 *   <Button variant="primary">Buy Now</Button>
 * </CardFooter>
 * ```
 */
export function CardFooter({
  children,
  className,
  isBordered = false,
  justify = "start",
  ...viewProps
}: CardFooterProps) {
  const justifyClass = FOOTER_JUSTIFY_CLASSES[justify];

  return (
    <HStack
      className={cnx(
        CARD_LAYOUT.footer,
        CARD_SPACING.footer,
        justifyClass,
        isBordered && "border-border border-t",
        className,
      )}
      {...viewProps}>
      {children}
    </HStack>
  );
}

CardFooter.displayName = "Aether.Card.CardFooter";
