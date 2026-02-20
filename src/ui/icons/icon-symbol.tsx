import { SymbolView } from "expo-symbols";
import { useThemeColor } from "../../hooks/use-theme-color";
import type { IconSymbolProps } from "./icon-symbol.types";

export function IconSymbol({
	name,
	size = 24,
	colorScheme,
	weight = "regular",
	className,
	style,
	...props
}: IconSymbolProps) {
	// Always call hook (React hooks rules), then use result conditionally
	const themeColor = useThemeColor(colorScheme ?? "foreground", { format: "rgb" });
	const tintColor = colorScheme ? themeColor : undefined;

	return (
		<SymbolView
			name={name}
			weight={weight}
			tintColor={tintColor}
			resizeMode="scaleAspectFit"
			className={className}
			style={[{ width: size, height: size }, style]}
			{...props}
		/>
	);
}

IconSymbol.displayName = "Aether.IconSymbol";
