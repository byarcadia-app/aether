import { GlassButton, HStack } from "@arcadia/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

const meta = {
  title: "Buttons/GlassButton",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render() {
    return (
      <View className="p-4">
        <GlassButton size="icon" accessibilityLabel="Go back">
          ←
        </GlassButton>
      </View>
    );
  },
};

export const Sizes: Story = {
  render() {
    return (
      <View className="gap-3 p-4 items-center">
        <HStack className="gap-3">
          <GlassButton size="icon" accessibilityLabel="Back button">
            ←
          </GlassButton>
          <GlassButton size="fab" accessibilityLabel="Add new item">
            +
          </GlassButton>
          <GlassButton size="badge" accessibilityLabel="Hot badge">
            🔥 42
          </GlassButton>
        </HStack>
      </View>
    );
  },
};

export const Disabled: Story = {
  render() {
    return (
      <View className="p-4">
        <GlassButton size="icon" disabled accessibilityLabel="Go back">
          ←
        </GlassButton>
      </View>
    );
  },
};

export const FallbackMode: Story = {
  render() {
    return (
      <View className="p-4">
        <GlassButton size="fab" useLiquidGlass={false} accessibilityLabel="Add new item">
          +
        </GlassButton>
      </View>
    );
  },
};
