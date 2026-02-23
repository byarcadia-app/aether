import { Button, ButtonLabel, VStack } from "@byarcadiaapp/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

const meta = {
  title: "Buttons/Button",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <View className="p-4">
      <Button onPress={() => {}}>Press me</Button>
    </View>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <VStack className="gap-3 p-4">
      <Button variant="primary" onPress={() => {}}>
        Primary
      </Button>
      <Button variant="secondary" onPress={() => {}}>
        Secondary
      </Button>
      <Button variant="outline" onPress={() => {}}>
        Outline
      </Button>
      <Button variant="ghost" onPress={() => {}}>
        Ghost
      </Button>
      <Button variant="destructive" onPress={() => {}}>
        Destructive
      </Button>
    </VStack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <VStack className="gap-3 p-4">
      <Button size="sm" onPress={() => {}}>
        Small
      </Button>
      <Button size="md" onPress={() => {}}>
        Medium
      </Button>
      <Button size="lg" onPress={() => {}}>
        Large
      </Button>
    </VStack>
  ),
};

export const Loading: Story = {
  render: () => (
    <View className="p-4">
      <Button isLoading onPress={() => {}}>
        Loading...
      </Button>
    </View>
  ),
};

export const WithButtonLabel: Story = {
  render: () => (
    <View className="p-4">
      <Button onPress={() => {}}>
        <ButtonLabel>Label Text</ButtonLabel>
      </Button>
    </View>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <View className="p-4">
      <Button isIconOnly isRounded onPress={() => {}}>
        +
      </Button>
    </View>
  ),
};

export const Disabled: Story = {
  render: () => (
    <View className="p-4">
      <Button disabled onPress={() => {}}>
        Disabled
      </Button>
    </View>
  ),
};

export const WithShimmer: Story = {
  render: () => (
    <View className="p-4">
      <Button withShimmer onPress={() => {}}>
        Shimmer Effect
      </Button>
    </View>
  ),
};
