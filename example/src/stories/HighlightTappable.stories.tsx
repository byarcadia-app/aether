import { HighlightTappable, HStack, Text, VStack } from "@arcadia/aether";
import type { Meta, StoryObj } from "@storybook/react-native";

const meta = {
  title: "Buttons/HighlightTappable",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render() {
    return (
      <VStack className="p-4">
        <HighlightTappable onPress={() => console.log("Tapped")}>
          <HStack className="items-center justify-between p-4 bg-surface rounded-lg">
            <Text>Tap me</Text>
            <Text>→</Text>
          </HStack>
        </HighlightTappable>
      </VStack>
    );
  },
};

export const WithScale: Story = {
  render() {
    return (
      <VStack className="p-4">
        <HighlightTappable enableScale={true} onPress={() => console.log("Scaled")}>
          <HStack className="items-center justify-center p-4 bg-surface rounded-lg">
            <Text>Scale on press</Text>
          </HStack>
        </HighlightTappable>
      </VStack>
    );
  },
};

export const CustomHighlight: Story = {
  render() {
    return (
      <VStack className="p-4">
        <HighlightTappable
          highlightColor="primary"
          highlightOpacity={0.3}
          onPress={() => console.log("Custom highlight")}
        >
          <HStack className="items-center justify-center p-4 bg-surface rounded-lg">
            <Text>Custom highlight color</Text>
          </HStack>
        </HighlightTappable>
      </VStack>
    );
  },
};

export const ListItems: Story = {
  render() {
    return (
      <VStack className="p-4">
        <VStack className="gap-0">
          <HighlightTappable onPress={() => console.log("Settings")}>
            <HStack className="items-center justify-between p-4 bg-surface border-b border-border">
              <Text>Settings</Text>
              <Text className="text-muted">→</Text>
            </HStack>
          </HighlightTappable>
          <HighlightTappable onPress={() => console.log("Profile")}>
            <HStack className="items-center justify-between p-4 bg-surface border-b border-border">
              <Text>Profile</Text>
              <Text className="text-muted">→</Text>
            </HStack>
          </HighlightTappable>
          <HighlightTappable onPress={() => console.log("Help")}>
            <HStack className="items-center justify-between p-4 bg-surface">
              <Text>Help</Text>
              <Text className="text-muted">→</Text>
            </HStack>
          </HighlightTappable>
        </VStack>
      </VStack>
    );
  },
};
