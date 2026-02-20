import { HStack, VStack } from "@arcadia/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Pressable, View } from "react-native";
import { Text } from "@arcadia/aether";

const meta = {
  title: "Layout/VStack & HStack",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render() {
    return (
      <VStack className="gap-4 p-4">
        <View className="h-16 rounded-lg bg-primary" />
        <View className="h-16 rounded-lg bg-secondary" />
        <View className="h-16 rounded-lg bg-success" />
      </VStack>
    );
  },
};

export const HStackDefault: Story = {
  render() {
    return (
      <HStack className="gap-4 p-4">
        <View className="h-16 w-16 rounded-lg bg-primary" />
        <View className="h-16 w-16 rounded-lg bg-secondary" />
        <View className="h-16 w-16 rounded-lg bg-success" />
      </HStack>
    );
  },
};

export const Nested: Story = {
  render() {
    return (
      <VStack className="gap-4 p-4">
        <HStack className="gap-2 items-center">
          <View className="h-8 w-8 rounded-full bg-primary" />
          <Text variant="headline">Row One</Text>
        </HStack>
        <HStack className="gap-2 items-center">
          <View className="h-8 w-8 rounded-full bg-secondary" />
          <Text variant="headline">Row Two</Text>
        </HStack>
        <HStack className="gap-2 items-center">
          <View className="h-8 w-8 rounded-full bg-success" />
          <Text variant="headline">Row Three</Text>
        </HStack>
      </VStack>
    );
  },
};

export const WithPolymorphicAs: Story = {
  render() {
    return (
      <VStack
        as={Pressable}
        onPress={() => {}}
        className="gap-2 p-4 rounded-lg bg-surface"
      >
        <Text variant="headline">Clickable Stack</Text>
        <Text variant="body" color="muted">
          This VStack renders as a Pressable via the `as` prop.
        </Text>
      </VStack>
    );
  },
};
