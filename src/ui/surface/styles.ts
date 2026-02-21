import { Platform, StyleSheet } from "react-native";

/**
 * Platform-specific surface styles
 */
export const surfaceStyles = StyleSheet.create({
	/**
	 * Elevation shadow for floating surfaces
	 *
	 * iOS: Uses native shadow properties
	 * Android: Uses elevation
	 */
	elevated: {
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 4 },
				shadowOpacity: 0.25,
				shadowRadius: 12,
			},
			android: {
				elevation: 6,
			},
			default: {},
		}),
	},
	fogOverlay: {
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		borderRadius: 24,
		zIndex: 0,
	},
	content: {
		zIndex: 1,
		flex: 1,
	},
});
