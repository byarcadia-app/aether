import { IconSymbol } from "@byarcadia-app/aether/icons";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

const meta = {
  title: "Icons/IconSymbol",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render() {
    return (
      <View className="flex-row flex-wrap gap-4 p-4">
        <IconSymbol name="heart.fill" colorScheme="danger" />
        <IconSymbol name="star.fill" colorScheme="warning" />
        <IconSymbol name="checkmark.circle.fill" colorScheme="success" />
        <IconSymbol name="bell.fill" colorScheme="info" />
        <IconSymbol name="person.fill" colorScheme="primary" />
        <IconSymbol name="gear" colorScheme="muted" />
      </View>
    );
  },
};

export const Sizes: Story = {
  render() {
    return (
      <View className="flex-row items-end gap-4 p-4">
        <IconSymbol name="heart.fill" colorScheme="danger" size={16} />
        <IconSymbol name="heart.fill" colorScheme="danger" size={24} />
        <IconSymbol name="heart.fill" colorScheme="danger" size={32} />
        <IconSymbol name="heart.fill" colorScheme="danger" size={48} />
        <IconSymbol name="heart.fill" colorScheme="danger" size={64} />
      </View>
    );
  },
};

export const Weights: Story = {
  render() {
    return (
      <View className="flex-row gap-4 p-4">
        <IconSymbol name="star" colorScheme="primary" weight="ultraLight" size={32} />
        <IconSymbol name="star" colorScheme="primary" weight="thin" size={32} />
        <IconSymbol name="star" colorScheme="primary" weight="light" size={32} />
        <IconSymbol name="star" colorScheme="primary" weight="regular" size={32} />
        <IconSymbol name="star" colorScheme="primary" weight="medium" size={32} />
        <IconSymbol name="star" colorScheme="primary" weight="semibold" size={32} />
        <IconSymbol name="star" colorScheme="primary" weight="bold" size={32} />
        <IconSymbol name="star" colorScheme="primary" weight="heavy" size={32} />
        <IconSymbol name="star" colorScheme="primary" weight="black" size={32} />
      </View>
    );
  },
};

export const Colors: Story = {
  render() {
    return (
      <View className="gap-3 p-4">
        <View className="flex-row items-center gap-3">
          <IconSymbol name="circle.fill" colorScheme="primary" size={20} />
          <IconSymbol name="circle.fill" colorScheme="secondary" size={20} />
          <IconSymbol name="circle.fill" colorScheme="success" size={20} />
          <IconSymbol name="circle.fill" colorScheme="warning" size={20} />
          <IconSymbol name="circle.fill" colorScheme="danger" size={20} />
          <IconSymbol name="circle.fill" colorScheme="info" size={20} />
          <IconSymbol name="circle.fill" colorScheme="muted" size={20} />
        </View>
        <View className="flex-row items-center gap-3">
          <IconSymbol name="circle.fill" colorScheme="foreground" size={20} />
          <IconSymbol name="circle.fill" colorScheme="surface-foreground" size={20} />
          <IconSymbol name="circle.fill" colorScheme="muted-foreground" size={20} />
        </View>
      </View>
    );
  },
};

export const CommonIcons: Story = {
  render() {
    return (
      <View className="flex-row flex-wrap gap-4 p-4">
        <IconSymbol name="house.fill" colorScheme="foreground" size={28} />
        <IconSymbol name="magnifyingglass" colorScheme="foreground" size={28} />
        <IconSymbol name="plus.circle.fill" colorScheme="foreground" size={28} />
        <IconSymbol name="trash.fill" colorScheme="danger" size={28} />
        <IconSymbol name="pencil" colorScheme="foreground" size={28} />
        <IconSymbol name="xmark.circle.fill" colorScheme="muted" size={28} />
        <IconSymbol name="chevron.right" colorScheme="muted" size={28} />
        <IconSymbol name="arrow.left" colorScheme="foreground" size={28} />
        <IconSymbol name="square.and.arrow.up" colorScheme="primary" size={28} />
        <IconSymbol name="ellipsis" colorScheme="foreground" size={28} />
      </View>
    );
  },
};
