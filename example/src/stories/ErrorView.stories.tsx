import { ErrorView } from "@arcadia/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

const meta = {
  title: "Forms/ErrorView",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Visible: Story = {
  render: () => (
    <View className="p-4">
      <ErrorView isInvalid>This field is required</ErrorView>
    </View>
  ),
};

export const Hidden: Story = {
  render: () => (
    <View className="p-4">
      <ErrorView isInvalid={false}>This won't show</ErrorView>
    </View>
  ),
};
