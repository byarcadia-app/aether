import { Heading } from "@byarcadiaapp/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

const meta = {
  title: "Typography/Heading",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const AllLevels: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Heading variant={1}>Large Title</Heading>
        <Heading variant={2}>Title 1</Heading>
        <Heading variant={3}>Title 2</Heading>
        <Heading variant={4}>Title 3</Heading>
      </View>
    );
  },
};

export const Level1: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Heading variant={1}>Large Title</Heading>
        <Heading variant={1}>Welcome to Aether</Heading>
        <Heading variant={1}>Getting Started</Heading>
      </View>
    );
  },
};

export const Level2: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Heading variant={2}>Title 1</Heading>
        <Heading variant={2}>Introduction</Heading>
        <Heading variant={2}>Features Overview</Heading>
      </View>
    );
  },
};

export const Level3: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Heading variant={3}>Title 2</Heading>
        <Heading variant={3}>Key Concepts</Heading>
        <Heading variant={3}>Implementation Details</Heading>
      </View>
    );
  },
};

export const Level4: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Heading variant={4}>Title 3</Heading>
        <Heading variant={4}>Component Properties</Heading>
        <Heading variant={4}>Usage Examples</Heading>
      </View>
    );
  },
};

export const CustomWeight: Story = {
  render() {
    return (
      <View className="gap-6 p-4">
        <View className="gap-2">
          <Heading variant={1} weight="regular">
            Level 1 - Regular
          </Heading>
          <Heading variant={1} weight="medium">
            Level 1 - Medium
          </Heading>
          <Heading variant={1} weight="semibold">
            Level 1 - SemiBold
          </Heading>
          <Heading variant={1} weight="bold">
            Level 1 - Bold (default)
          </Heading>
        </View>
        <View className="gap-2">
          <Heading variant={4} weight="regular">
            Level 4 - Regular
          </Heading>
          <Heading variant={4} weight="medium">
            Level 4 - Medium
          </Heading>
          <Heading variant={4} weight="semibold">
            Level 4 - SemiBold (default)
          </Heading>
          <Heading variant={4} weight="bold">
            Level 4 - Bold
          </Heading>
        </View>
      </View>
    );
  },
};

export const Colors: Story = {
  render() {
    return (
      <View className="gap-2 p-4">
        <Heading variant={3} color="default">
          Default
        </Heading>
        <Heading variant={3} color="primary">
          Primary
        </Heading>
        <Heading variant={3} color="muted">
          Muted
        </Heading>
        <Heading variant={3} color="success">
          Success
        </Heading>
        <Heading variant={3} color="warning">
          Warning
        </Heading>
        <Heading variant={3} color="danger">
          Danger
        </Heading>
        <Heading variant={3} color="info">
          Info
        </Heading>
      </View>
    );
  },
};
