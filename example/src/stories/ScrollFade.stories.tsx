import { ScrollFade, VStack, HStack } from "@byarcadia/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View, ScrollView } from "react-native";

const meta = {
  title: "Utility/ScrollFade",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Bottom: Story = {
  render: () => (
    <View className="p-4">
      <View className="relative h-48 overflow-hidden rounded-xl">
        <ScrollView className="flex-1">
          <VStack className="gap-2 p-4">
            <View className="h-16 rounded-lg bg-primary/20" />
            <View className="h-16 rounded-lg bg-secondary/20" />
            <View className="h-16 rounded-lg bg-success/20" />
            <View className="h-16 rounded-lg bg-warning/20" />
            <View className="h-16 rounded-lg bg-danger/20" />
            <View className="h-16 rounded-lg bg-info/20" />
          </VStack>
        </ScrollView>
        <ScrollFade position="bottom" />
      </View>
    </View>
  ),
};

export const Top: Story = {
  render: () => (
    <View className="p-4">
      <View className="relative h-48 overflow-hidden rounded-xl">
        <ScrollView className="flex-1">
          <VStack className="gap-2 p-4">
            <View className="h-16 rounded-lg bg-primary/20" />
            <View className="h-16 rounded-lg bg-secondary/20" />
            <View className="h-16 rounded-lg bg-success/20" />
            <View className="h-16 rounded-lg bg-warning/20" />
            <View className="h-16 rounded-lg bg-danger/20" />
            <View className="h-16 rounded-lg bg-info/20" />
          </VStack>
        </ScrollView>
        <ScrollFade position="top" />
      </View>
    </View>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <View className="p-4">
      <View className="relative overflow-hidden rounded-xl">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack className="gap-2 p-4">
            <View className="h-16 w-32 rounded-lg bg-primary/20" />
            <View className="h-16 w-32 rounded-lg bg-secondary/20" />
            <View className="h-16 w-32 rounded-lg bg-success/20" />
            <View className="h-16 w-32 rounded-lg bg-warning/20" />
            <View className="h-16 w-32 rounded-lg bg-danger/20" />
          </HStack>
        </ScrollView>
        <ScrollFade position="left" size={16} />
        <ScrollFade position="right" size={16} />
      </View>
    </View>
  ),
};
