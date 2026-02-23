import { AnimationWrapper, Surface, Text, VStack } from "@byarcadia/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { FadeIn, SlideInRight } from "react-native-reanimated";
import { View } from "react-native";

const meta = {
  title: "Utility/AnimationWrapper",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const FadeInAnimation: Story = {
  render: () => (
    <View className="p-4">
      <AnimationWrapper entering={FadeIn}>
        <Surface className="rounded-xl p-4">
          <Text>Fade in content</Text>
        </Surface>
      </AnimationWrapper>
    </View>
  ),
};

export const SlideInAnimation: Story = {
  render: () => (
    <View className="p-4">
      <AnimationWrapper entering={SlideInRight}>
        <Surface className="rounded-xl p-4">
          <Text>Slide in from right</Text>
        </Surface>
      </AnimationWrapper>
    </View>
  ),
};

export const MultipleAnimations: Story = {
  render: () => (
    <View className="p-4">
      <VStack className="gap-4">
        <AnimationWrapper entering={FadeIn}>
          <Surface className="rounded-xl p-4">
            <Text>First item fades in</Text>
          </Surface>
        </AnimationWrapper>
        <AnimationWrapper entering={SlideInRight}>
          <Surface className="rounded-xl p-4">
            <Text>Second item slides in</Text>
          </Surface>
        </AnimationWrapper>
      </VStack>
    </View>
  ),
};
