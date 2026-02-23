import { Surface, Text, VStack } from "@byarcadiaapp/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

const meta = {
  title: "Layout/Surface",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <View className="p-4">
      <Surface className="p-4 rounded-lg">
        <Text>Default Surface</Text>
      </Surface>
    </View>
  ),
};

export const Levels: Story = {
  render: () => (
    <VStack className="gap-4 p-4">
      <Surface level="default" className="p-4 rounded-lg">
        <Text>Level: Default</Text>
      </Surface>
      <Surface level="secondary" className="p-4 rounded-lg">
        <Text>Level: Secondary</Text>
      </Surface>
      <Surface level="tertiary" className="p-4 rounded-lg">
        <Text>Level: Tertiary</Text>
      </Surface>
      <Surface level="quaternary" className="p-4 rounded-lg">
        <Text>Level: Quaternary</Text>
      </Surface>
      <Surface level="transparent" className="p-4 rounded-lg border border-border">
        <Text>Level: Transparent</Text>
      </Surface>
    </VStack>
  ),
};

export const Bordered: Story = {
  render: () => (
    <View className="p-4">
      <Surface isBordered className="p-4 rounded-lg">
        <Text>Bordered Surface</Text>
      </Surface>
    </View>
  ),
};

export const Elevated: Story = {
  render: () => (
    <View className="p-4">
      <Surface isElevated className="p-4 rounded-lg">
        <Text>Elevated Surface</Text>
      </Surface>
    </View>
  ),
};

export const Glass: Story = {
  render: () => (
    <View className="p-4">
      <Surface variant="glass" className="p-4 rounded-lg">
        <Text>Glass Surface (iOS 26+ LiquidGlass or fallback)</Text>
      </Surface>
    </View>
  ),
};
