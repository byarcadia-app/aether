import { View } from "react-native";
import { cnx } from "../../utils";
import type { PolymorphicComponentProps, RNComponentType } from "./types";

/**
 * Vertical stack layout. Renders children in a column with flexbox.
 *
 * @example
 * ```tsx
 * <VStack className="gap-4">
 *   <Text>Item 1</Text>
 *   <Text>Item 2</Text>
 * </VStack>
 * ```
 *
 * @example
 * ```tsx
 * <VStack as={Pressable} onPress={handlePress}>
 *   <Text>Clickable stack</Text>
 * </VStack>
 * ```
 */
export function VStack<C extends RNComponentType = typeof View>({
  as,
  className,
  ...props
}: PolymorphicComponentProps<C>) {
  const Component = as ?? View;
  return <Component className={cnx("flex flex-col", className)} {...props} />;
}

VStack.displayName = "Aether.Layout.VStack";

/**
 * Horizontal stack layout. Renders children in a row with flexbox.
 *
 * @example
 * ```tsx
 * <HStack className="gap-2 items-center">
 *   <Icon name="star" />
 *   <Text>Favorite</Text>
 * </HStack>
 * ```
 *
 * @example
 * ```tsx
 * <HStack as={ScrollView} horizontal>
 *   <Card />
 *   <Card />
 * </HStack>
 * ```
 */
export function HStack<C extends RNComponentType = typeof View>({
  as,
  className,
  ...props
}: PolymorphicComponentProps<C>) {
  const Component = as ?? View;
  return <Component className={cnx("flex flex-row", className)} {...props} />;
}

HStack.displayName = "Aether.Layout.HStack";
