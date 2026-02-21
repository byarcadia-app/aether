import { Skeleton, Surface, VStack, HStack } from "@arcadia/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

const meta = {
  title: "Feedback/Skeleton",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <View className="p-4">
      <Skeleton className="h-32 w-full rounded-2xl" />
    </View>
  ),
};

export const TextRows: Story = {
  render: () => (
    <View className="p-4">
      <VStack className="gap-3">
        <Skeleton className="h-4 w-full rounded-lg" />
        <Skeleton className="h-4 w-3/4 rounded-lg" />
        <Skeleton className="h-4 w-1/2 rounded-lg" />
      </VStack>
    </View>
  ),
};

export const CardPlaceholder: Story = {
  render: () => (
    <View className="p-4">
      <Surface className="rounded-xl p-4">
        <HStack className="gap-3 items-center">
          <Skeleton className="h-12 w-12 rounded-full" />
          <VStack className="flex-1 gap-2">
            <Skeleton className="h-4 w-2/3 rounded-lg" />
            <Skeleton className="h-3 w-1/2 rounded-lg" />
          </VStack>
        </HStack>
      </Surface>
    </View>
  ),
};
