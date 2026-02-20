/**
 * Color utility functions for parsing and generating HSLA colors
 */

/**
 * Parsed HSLA color components
 */
export interface HslaComponents {
	hue: number;
	saturation: number;
	lightness: number;
	alpha: number;
}

/**
 * Parse HSLA color string into components
 *
 * @param hsla - HSLA color string (e.g., "hsla(240, 4%, 97%, 1)")
 * @returns Parsed color components or null if invalid format
 *
 * @example
 * ```ts
 * const color = parseHsla("hsla(240, 4%, 97%, 1)");
 * // { hue: 240, saturation: 4, lightness: 97, alpha: 1 }
 * ```
 */
export function parseHsla(hsla: string): HslaComponents | null {
	const match = hsla.match(/hsla\((\d+),\s*(\d+)%,\s*(\d+)%,\s*([\d.]+)\)/);
	if (!match || !match[1] || !match[2] || !match[3] || !match[4]) return null;

	const [, h, s, l, a] = match;
	return {
		hue: parseInt(h, 10),
		saturation: parseInt(s, 10),
		lightness: parseInt(l, 10),
		alpha: parseFloat(a),
	};
}

/**
 * Generate HSLA color string from components
 *
 * @param hue - Hue (0-360)
 * @param saturation - Saturation (0-100)
 * @param lightness - Lightness (0-100)
 * @param alpha - Alpha (0-1)
 * @returns HSLA color string
 *
 * @example
 * ```ts
 * const color = generateHsla(240, 4, 97, 1);
 * // "hsla(240, 4%, 97%, 1)"
 * ```
 */
export function generateHsla(
	hue: number,
	saturation: number,
	lightness: number,
	alpha: number
): string {
	return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
}

/**
 * Adjust lightness of an HSLA color by a given amount
 *
 * @param hsla - Base HSLA color string
 * @param adjustment - Lightness adjustment in percentage points (can be negative)
 * @returns Adjusted HSLA color string or null if invalid input
 *
 * @example
 * ```ts
 * const darker = adjustLightness("hsla(240, 4%, 97%, 1)", -3);
 * // "hsla(240, 4%, 94%, 1)"
 *
 * const lighter = adjustLightness("hsla(240, 8%, 18%, 1)", 3);
 * // "hsla(240, 8%, 21%, 1)"
 * ```
 */
export function adjustLightness(hsla: string, adjustment: number): string | null {
	const parsed = parseHsla(hsla);
	if (!parsed) return null;

	const { hue, saturation, lightness, alpha } = parsed;
	const newLightness = Math.max(0, Math.min(100, lightness + adjustment));

	return generateHsla(hue, saturation, newLightness, alpha);
}

/**
 * Convert HSLA color to RGBA format
 *
 * @param hsla - HSLA color string (e.g., "hsla(240, 4%, 97%, 1)")
 * @returns RGBA color string or null if invalid input
 *
 * @example
 * ```ts
 * const rgba = hslaToRgba("hsla(240, 70%, 58%, 1)");
 * // "rgba(98, 71, 198, 1)"
 * ```
 */
export function hslaToRgba(hsla: string): string | null {
	const parsed = parseHsla(hsla);
	if (!parsed) return null;

	const { hue, saturation, lightness, alpha } = parsed;

	// Normalize saturation and lightness to 0-1 range
	const s = saturation / 100;
	const l = lightness / 100;

	// Calculate chroma
	const c = (1 - Math.abs(2 * l - 1)) * s;
	const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
	const m = l - c / 2;

	let r = 0;
	let g = 0;
	let b = 0;

	// Determine RGB values based on hue sector
	if (hue >= 0 && hue < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (hue >= 60 && hue < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (hue >= 120 && hue < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (hue >= 180 && hue < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (hue >= 240 && hue < 300) {
		r = x;
		g = 0;
		b = c;
	} else if (hue >= 300 && hue < 360) {
		r = c;
		g = 0;
		b = x;
	}

	// Convert to 0-255 range and round
	const red = Math.round((r + m) * 255);
	const green = Math.round((g + m) * 255);
	const blue = Math.round((b + m) * 255);

	return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/**
 * Adjust alpha (opacity) of an HSLA color string
 *
 * @param hsla - HSLA color string (e.g., "hsla(240, 4%, 97%, 1)")
 * @param alpha - New alpha value (0-1)
 * @returns HSLA color string with adjusted alpha, or original if invalid
 *
 * @example
 * ```ts
 * const semiTransparent = withAlpha("hsla(240, 4%, 97%, 1)", 0.5);
 * // "hsla(240, 4%, 97%, 0.5)"
 * ```
 */
export function withAlpha(hsla: string, alpha: number): string {
	const parsed = parseHsla(hsla);
	if (!parsed) return hsla;
	return generateHsla(parsed.hue, parsed.saturation, parsed.lightness, alpha);
}
