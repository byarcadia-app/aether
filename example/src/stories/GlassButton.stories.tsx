import { GlassButton, HStack } from "@byarcadia-app/aether";
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
        <GlassButton size="icon" accessibilityLabel="Go back" onPress={() => {}}>
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
          <GlassButton size="icon" accessibilityLabel="Back button" onPress={() => {}}>
            ←
          </GlassButton>
          <GlassButton size="fab" accessibilityLabel="Add new item" onPress={() => {}}>
            +
          </GlassButton>
          <GlassButton size="badge" accessibilityLabel="Hot badge" onPress={() => {}}>
            🔥 42
          </GlassButton>
        </HStack>
      </View>
    );
  },
};

export const Variants: Story = {
  render() {
    return (
      <View className="gap-3 p-4 items-center">
        <HStack className="gap-3">
          <GlassButton size="fab" accessibilityLabel="Default" onPress={() => {}}>
            ○
          </GlassButton>
          <GlassButton size="fab" variant="primary" accessibilityLabel="Primary" onPress={() => {}}>
            ★
          </GlassButton>
          <GlassButton
            size="fab"
            variant="secondary"
            accessibilityLabel="Secondary"
            onPress={() => {}}
          >
            ◆
          </GlassButton>
        </HStack>
      </View>
    );
  },
};

export const VariantsFallback: Story = {
  render() {
    return (
      <View className="gap-3 p-4 items-center">
        <HStack className="gap-3">
          <GlassButton
            size="fab"
            useLiquidGlass={false}
            accessibilityLabel="Default"
            onPress={() => {}}
          >
            ○
          </GlassButton>
          <GlassButton
            size="fab"
            variant="primary"
            useLiquidGlass={false}
            accessibilityLabel="Primary"
            onPress={() => {}}
          >
            ★
          </GlassButton>
          <GlassButton
            size="fab"
            variant="secondary"
            useLiquidGlass={false}
            accessibilityLabel="Secondary"
            onPress={() => {}}
          >
            ◆
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
        <GlassButton size="icon" disabled accessibilityLabel="Go back" onPress={() => {}}>
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
        <GlassButton
          size="fab"
          useLiquidGlass={false}
          accessibilityLabel="Add new item"
          onPress={() => {}}
        >
          +
        </GlassButton>
      </View>
    );
  },
};
