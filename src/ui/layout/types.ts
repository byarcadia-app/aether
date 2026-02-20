import type { ComponentProps, ComponentType } from "react";
import type { View } from "react-native";

// oxlint-disable-next-line @typescript-eslint/no-explicit-any
export type RNComponentType = ComponentType<any>;

export type PolymorphicComponentProps<C extends RNComponentType = typeof View, Props = object> = {
	as?: C;
	className?: string;
} & Props &
	Omit<ComponentProps<C>, keyof Props | "as" | "className">;

export type ViewComponentProps<Props = object> = PolymorphicComponentProps<typeof View, Props>;
