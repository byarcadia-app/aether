import type { SFSymbol, SymbolViewProps, SymbolWeight } from "expo-symbols";
import type { BaseIconProps, ColorScheme } from "./types";

export type IconSymbolName = SFSymbol;

export type { ColorScheme };

export interface IconSymbolProps
  extends
    BaseIconProps,
    Omit<SymbolViewProps, "name" | "weight" | "tintColor" | "resizeMode" | "style" | "className"> {
  name: IconSymbolName;
  /** @default "regular" */
  weight?: SymbolWeight;
}
