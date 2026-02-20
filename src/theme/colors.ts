import { vars } from "nativewind";

/**
 * Umbra Design System - Comprehensive Color System
 *
 * HSLA-based color tokens for excellent React Native compatibility across light and dark themes.
 * All CSS variables use the `--color-` prefix for consistent naming.
 *
 * Color Space: HSLA (H: Hue 0-360°, S: Saturation 0-100%, L: Lightness 0-100%, A: Alpha 0-1)
 * Total: 25+ semantic tokens with base + foreground pairs
 *
 * Rules:
 * - Base colors (e.g., --color-primary) can be used as text OR background
 * - Foreground colors (e.g., --color-primary-foreground) ONLY for text on colored backgrounds
 * - Typography components use base colors as text color
 * - All variables accessible via Tailwind utilities (e.g., text-primary, bg-primary)
 *
 * @example
 * ```tsx
 * // Using theme colors in Tailwind
 * <Text className="text-primary">Brand colored text</Text>
 * <View className="bg-primary">
 *   <Text className="text-primary-foreground">White text on primary bg</Text>
 * </View>
 * ```
 *
 * @see https://www.nativewind.dev/docs/api/vars
 */

/**
 * Light theme color values using HSLA color space
 * Optimized for iOS light mode with good contrast and vibrant semantic colors
 */
const lightColors = {
	background: "hsla(240, 3%, 99%, 1)",
	foreground: "hsla(240, 5%, 15%, 1)",

	surface: "hsla(240, 4%, 97%, 1)",
	"surface-foreground": "hsla(240, 5%, 15%, 1)",
	overlay: "hsla(240, 3%, 98%, 1)",
	"overlay-foreground": "hsla(240, 5%, 15%, 1)",

	primary: "hsla(245, 70%, 58%, 1)",
	"primary-foreground": "hsla(245, 3%, 99%, 1)",

	secondary: "hsla(240, 5%, 89%, 1)",
	"secondary-foreground": "hsla(240, 5%, 15%, 1)",

	success: "hsla(145, 55%, 50%, 1)",
	"success-foreground": "hsla(145, 3%, 99%, 1)",

	warning: "hsla(45, 90%, 60%, 1)",
	"warning-foreground": "hsla(45, 5%, 20%, 1)",

	danger: "hsla(0, 70%, 58%, 1)",
	"danger-foreground": "hsla(0, 3%, 99%, 1)",

	info: "hsla(200, 80%, 55%, 1)",
	"info-foreground": "hsla(200, 3%, 99%, 1)",

	muted: "hsla(240, 5%, 95%, 1)",
	"muted-foreground": "hsla(240, 5%, 49%, 1)",
	border: "hsla(240, 8%, 88%, 1)",
	input: "hsla(240, 4%, 97%, 1)",
	ring: "hsla(245, 70%, 58%, 1)",

	glass: "hsla(240, 4%, 97%, 0.6)",
	"glass-border": "hsla(240, 5%, 95%, 0.3)",
	"glass-highlight": "hsla(0, 0%, 100%, 0.15)",

	// Tag colors (deep/earthy for light mode contrast)
	"tag-coral": "hsla(0, 75%, 40%, 1)",
	"tag-amber": "hsla(30, 90%, 35%, 1)",
	"tag-sky": "hsla(205, 80%, 35%, 1)",
	"tag-lavender": "hsla(265, 70%, 45%, 1)",
	"tag-slate": "hsla(220, 15%, 35%, 1)",
	"tag-mint": "hsla(150, 90%, 25%, 1)",
	"tag-stone": "hsla(30, 10%, 35%, 1)",
} as const;

/**
 * Dark theme color values using HSLA color space
 * All colors are adjusted for optimal dark mode appearance with proper contrast
 */
const darkColors = {
	background: "hsla(240, 8%, 12%, 1)",
	foreground: "hsla(240, 5%, 92%, 1)",

	surface: "hsla(240, 8%, 18%, 1)",
	"surface-foreground": "hsla(240, 5%, 97%, 1)",
	overlay: "hsla(240, 8%, 15%, 1)",
	"overlay-foreground": "hsla(240, 5%, 97%, 1)",

	primary: "hsla(216, 60%, 65%, 1)",
	"primary-foreground": "hsla(216, 8%, 12%, 1)",

	secondary: "hsla(240, 5%, 25%, 1)",
	"secondary-foreground": "hsla(240, 5%, 97%, 1)",

	success: "hsla(145, 45%, 60%, 1)",
	"success-foreground": "hsla(145, 8%, 12%, 1)",

	warning: "hsla(45, 80%, 70%, 1)",
	"warning-foreground": "hsla(45, 8%, 15%, 1)",

	danger: "hsla(0, 60%, 65%, 1)",
	"danger-foreground": "hsla(0, 8%, 12%, 1)",

	info: "hsla(200, 70%, 65%, 1)",
	"info-foreground": "hsla(200, 8%, 12%, 1)",

	muted: "hsla(240, 5%, 22%, 1)",
	"muted-foreground": "hsla(240, 5%, 71%, 1)",
	border: "hsla(240, 8%, 28%, 1)",
	input: "hsla(240, 8%, 18%, 1)",
	ring: "hsla(216, 60%, 65%, 1)",

	glass: "hsla(240, 8%, 18%, 0.5)",
	"glass-border": "hsla(240, 5%, 25%, 0.25)",
	"glass-highlight": "hsla(0, 0%, 100%, 0.08)",

	// Tag colors (bright/pastel for dark mode contrast)
	"tag-coral": "hsla(0, 94%, 75%, 1)",
	"tag-amber": "hsla(38, 92%, 65%, 1)",
	"tag-sky": "hsla(199, 89%, 75%, 1)",
	"tag-lavender": "hsla(265, 89%, 80%, 1)",
	"tag-slate": "hsla(220, 13%, 75%, 1)",
	"tag-mint": "hsla(150, 80%, 70%, 1)",
	"tag-stone": "hsla(30, 10%, 75%, 1)",
} as const;

/**
 * Core color palette for Umbra design system.
 * Organized by theme mode (light/dark).
 */
export const colors = {
	light: lightColors,
	dark: darkColors,
} as const;

/**
 * Type representing available theme color keys.
 */
export type ThemeColor = keyof typeof colors.light;

/**
 * Type representing the complete light theme color palette.
 */
export type LightColors = typeof lightColors;

/**
 * Type representing the complete dark theme color palette.
 */
export type DarkColors = typeof darkColors;

/**
 * Partial color palette override for light mode.
 * All properties are optional, allowing selective color customization.
 */
export type LightColorOverride = Partial<LightColors>;

/**
 * Partial color palette override for dark mode.
 * All properties are optional, allowing selective color customization.
 */
export type DarkColorOverride = Partial<DarkColors>;

/**
 * Configuration interface for custom color palettes.
 * Allows overriding colors independently for light and dark modes.
 *
 * @example
 * ```tsx
 * const customPalette: ColorPaletteConfig = {
 *   light: {
 *     primary: "hsla(280, 70%, 58%, 1)",
 *     success: "hsla(120, 55%, 50%, 1)",
 *   },
 *   dark: {
 *     primary: "hsla(280, 60%, 65%, 1)",
 *   },
 * };
 * ```
 */
export interface ColorPaletteConfig {
	light?: LightColorOverride;
	dark?: DarkColorOverride;
}

/**
 * Light theme CSS variables for NativeWind.
 *
 * Uses NativeWind's vars() API to define runtime CSS variables that work
 * natively with React Native. Apply this to a View component's style prop
 * to enable theme variables throughout the component tree.
 *
 * All variables use the `--color-` prefix:
 * - Core: --color-background, --color-foreground
 * - Semantic: --color-primary, --color-success, --color-danger, etc.
 * - UI: --color-muted, --color-border, --color-input, --color-ring
 *
 * @example
 * ```tsx
 * import { lightNativewindVars } from '~/theme';
 *
 * <View style={lightNativewindVars}>
 *   <Text className="text-primary">Uses --color-primary</Text>
 * </View>
 * ```
 *
 * @see {@link https://www.nativewind.dev/docs/api/vars NativeWind vars() API}
 */
export const lightNativewindVars = vars({
	"--color-background": lightColors.background,
	"--color-foreground": lightColors.foreground,

	"--color-surface": lightColors.surface,
	"--color-surface-foreground": lightColors["surface-foreground"],
	"--color-overlay": lightColors.overlay,
	"--color-overlay-foreground": lightColors["overlay-foreground"],

	"--color-primary": lightColors.primary,
	"--color-primary-foreground": lightColors["primary-foreground"],
	"--color-secondary": lightColors.secondary,
	"--color-secondary-foreground": lightColors["secondary-foreground"],
	"--color-success": lightColors.success,
	"--color-success-foreground": lightColors["success-foreground"],
	"--color-warning": lightColors.warning,
	"--color-warning-foreground": lightColors["warning-foreground"],
	"--color-danger": lightColors.danger,
	"--color-danger-foreground": lightColors["danger-foreground"],
	"--color-info": lightColors.info,
	"--color-info-foreground": lightColors["info-foreground"],

	"--color-muted": lightColors.muted,
	"--color-muted-foreground": lightColors["muted-foreground"],
	"--color-border": lightColors.border,
	"--color-input": lightColors.input,
	"--color-ring": lightColors.ring,

	"--color-glass": lightColors.glass,
	"--color-glass-border": lightColors["glass-border"],
	"--color-glass-highlight": lightColors["glass-highlight"],

	"--color-tag-coral": lightColors["tag-coral"],
	"--color-tag-amber": lightColors["tag-amber"],
	"--color-tag-sky": lightColors["tag-sky"],
	"--color-tag-lavender": lightColors["tag-lavender"],
	"--color-tag-slate": lightColors["tag-slate"],
	"--color-tag-mint": lightColors["tag-mint"],
	"--color-tag-stone": lightColors["tag-stone"],
});

/**
 * Dark theme CSS variables for NativeWind.
 *
 * Uses NativeWind's vars() API to define runtime CSS variables that work
 * natively with React Native. Apply this to a View component's style prop
 * to enable theme variables throughout the component tree.
 *
 * All variables use the `--color-` prefix with adjusted values for dark mode:
 * - Lighter colors for better contrast on dark backgrounds
 * - Reduced saturation for comfortable viewing
 * - Same variable names as light mode for automatic theme switching
 *
 * @example
 * ```tsx
 * import { darkNativewindVars } from '~/theme';
 *
 * <View style={darkNativewindVars}>
 *   <Text className="text-primary">Uses --color-primary (dark mode)</Text>
 * </View>
 * ```
 *
 * @see {@link https://www.nativewind.dev/docs/api/vars NativeWind vars() API}
 */
export const darkNativewindVars = vars({
	"--color-background": darkColors.background,
	"--color-foreground": darkColors.foreground,

	"--color-surface": darkColors.surface,
	"--color-surface-foreground": darkColors["surface-foreground"],
	"--color-overlay": darkColors.overlay,
	"--color-overlay-foreground": darkColors["overlay-foreground"],

	"--color-primary": darkColors.primary,
	"--color-primary-foreground": darkColors["primary-foreground"],
	"--color-secondary": darkColors.secondary,
	"--color-secondary-foreground": darkColors["secondary-foreground"],
	"--color-success": darkColors.success,
	"--color-success-foreground": darkColors["success-foreground"],
	"--color-warning": darkColors.warning,
	"--color-warning-foreground": darkColors["warning-foreground"],
	"--color-danger": darkColors.danger,
	"--color-danger-foreground": darkColors["danger-foreground"],
	"--color-info": darkColors.info,
	"--color-info-foreground": darkColors["info-foreground"],

	"--color-muted": darkColors.muted,
	"--color-muted-foreground": darkColors["muted-foreground"],
	"--color-border": darkColors.border,
	"--color-input": darkColors.input,
	"--color-ring": darkColors.ring,

	"--color-glass": darkColors.glass,
	"--color-glass-border": darkColors["glass-border"],
	"--color-glass-highlight": darkColors["glass-highlight"],

	"--color-tag-coral": darkColors["tag-coral"],
	"--color-tag-amber": darkColors["tag-amber"],
	"--color-tag-sky": darkColors["tag-sky"],
	"--color-tag-lavender": darkColors["tag-lavender"],
	"--color-tag-slate": darkColors["tag-slate"],
	"--color-tag-mint": darkColors["tag-mint"],
	"--color-tag-stone": darkColors["tag-stone"],
});
