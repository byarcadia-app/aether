import type { ViewProps } from "react-native";

/**
 * Surface hierarchy levels for visual depth
 *
 * - `default` - Primary surface background
 * - `secondary` - One level deeper
 * - `tertiary` - Two levels deeper
 * - `quaternary` - Three levels deeper (maximum depth)
 * - `transparent` - No background
 */
export type SurfaceLevel = "default" | "secondary" | "tertiary" | "quaternary" | "transparent";

/**
 * Surface variant type
 *
 * - `solid` - Standard opaque background
 * - `glass` - Liquid Glass effect (iOS 26+, falls back to solid)
 * - `fog` - Gradient fog effect for depth and atmosphere
 */
export type SurfaceVariant = "solid" | "glass" | "fog";

/**
 * Glass effect type for Liquid Glass variant
 *
 * - `regular` - Frosted blur effect
 * - `clear` - More transparent effect
 */
export type GlassEffect = "clear" | "regular";

/**
 * Fog gradient direction for fog variant
 *
 * - `top` - Darker at top, fading downward (default)
 * - `bottom` - Darker at bottom, fading upward
 * - `both` - Darker at both edges, lighter in middle
 */
export type FogDirection = "top" | "bottom" | "both";

export interface SurfaceProps extends ViewProps {
	/**
	 * Background level in visual hierarchy
	 * @default 'default'
	 */
	level?: SurfaceLevel;

	/**
	 * Surface variant
	 * - 'solid' - Standard opaque background (default)
	 * - 'glass' - Liquid Glass effect (iOS 26+, falls back to solid)
	 * @default 'solid'
	 */
	variant?: SurfaceVariant;

	/**
	 * Glass effect type (only when variant="glass")
	 * - 'regular' - Frosted blur effect
	 * - 'clear' - More transparent
	 * @default 'regular'
	 */
	glassEffect?: GlassEffect;

	/**
	 * Fog gradient direction (only when variant="fog")
	 * - 'top' - Darker at top, fading downward
	 * - 'bottom' - Darker at bottom, fading upward
	 * - 'both' - Darker at both edges, lighter in middle
	 * @default 'top'
	 */
	fogDirection?: FogDirection;

	/**
	 * Fog gradient intensity (only when variant="fog")
	 * Controls gradient opacity from 0 (invisible) to 1 (full opacity)
	 * @default 0.15
	 */
	fogIntensity?: number;

	/**
	 * Whether to show a border
	 * @default false
	 */
	isBordered?: boolean;

	/**
	 * Whether to apply elevation shadow
	 * @default false
	 */
	isElevated?: boolean;

	children?: React.ReactNode;
	className?: string;
}
