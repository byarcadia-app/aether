import type React from "react";
import { use } from "react";
import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import { TextComponentContext } from "../../../providers";

/**
 * Extends React Native's TextProps with explicit ref support for React 19.
 * In React 19, ref is a regular prop (no forwardRef needed), but TypeScript
 * requires explicit typing to recognize it.
 */
export type BaseTextProps = RNTextProps & {
	/**
	 * Ref object to access the underlying RNText instance.
	 *
	 * @example
	 * ```tsx
	 * const textRef = useRef<RNText>(null);
	 * <BaseText ref={textRef}>Hello</BaseText>
	 * ```
	 */
	ref?: React.Ref<RNText>;
};

/**
 * Primitive text component that applies global text configuration from TextComponentProvider.
 *
 * **Internal component** - Use `Text` component instead.
 *
 * This component automatically merges:
 * - Global text props from TextComponentProvider
 * - Component-level props (props override global config)
 *
 * Applied global settings:
 * - `allowFontScaling` - Respect iOS accessibility text size
 * - `maxFontSizeMultiplier` - Limit maximum text scaling
 * - `adjustsFontSizeToFit` - Auto-shrink to fit container
 * - `minimumFontScale` - Minimum scale limit (iOS only)
 *
 * @internal
 *
 * @example
 * ```tsx
 * // Don't use directly
 * <BaseText>Hello</BaseText>
 *
 * // Use public components
 * <Text>Hello</Text>
 * <Heading>Title</Heading>
 * ```
 */
export const BaseText = (props: BaseTextProps) => {
	const textComponentProps = use(TextComponentContext);
	const mergedProps = Object.assign({}, textComponentProps, props);

	return <RNText {...mergedProps} />;
};

BaseText.displayName = "Aether.Typography.BaseText";
