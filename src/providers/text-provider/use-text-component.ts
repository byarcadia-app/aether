import { createContext } from "react";
import type { TextProviderProps } from "./types";

export const TextComponentContext = createContext<TextProviderProps>({} as TextProviderProps);

export const useProvideDefaultTextComponent = () => {
	return {
		allowFontScaling: true,
		maxFontSizeMultiplier: 1.5,
	} satisfies TextProviderProps;
};
