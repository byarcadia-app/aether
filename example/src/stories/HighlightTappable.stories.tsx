import { HighlightTappable, HStack, Text, VStack } from "@byarcadia/aether";
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
        <HighlightTappable
          onPress={() => console.log("Tapped")}
          className="rounded-lg bg-surface p-4"
        >
          <HStack className="items-center justify-between">
            <Text>Tap me</Text>
            <Text color="muted">→</Text>
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
        <HighlightTappable
          enableScale={true}
          onPress={() => console.log("Scaled")}
          className="rounded-lg bg-surface p-4"
        >
          <HStack className="items-center justify-center">
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
          className="rounded-lg bg-surface p-4"
        >
          <HStack className="items-center justify-center">
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
          <HighlightTappable
            onPress={() => console.log("Settings")}
            className="bg-surface p-4 border-b border-border"
          >
            <HStack className="items-center justify-between">
              <Text>Settings</Text>
              <Text color="muted">→</Text>
            </HStack>
          </HighlightTappable>
          <HighlightTappable
            onPress={() => console.log("Profile")}
            className="bg-surface p-4 border-b border-border"
          >
            <HStack className="items-center justify-between">
              <Text>Profile</Text>
              <Text color="muted">→</Text>
            </HStack>
          </HighlightTappable>
          <HighlightTappable onPress={() => console.log("Help")} className="bg-surface p-4">
            <HStack className="items-center justify-between">
              <Text>Help</Text>
              <Text color="muted">→</Text>
            </HStack>
          </HighlightTappable>
        </VStack>
      </VStack>
    );
  },
};
