import { Caption } from "@arcadia/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

const meta = {
  title: "Typography/Caption",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const AllSizes: Story = {
  render() {
    return (
      <View className="gap-2 p-4">
        <Caption variant="md">Caption 1 - Medium (12pt)</Caption>
        <Caption variant="sm">Caption 2 - Small (11pt - smallest)</Caption>
      </View>
    );
  },
};

export const Medium: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Caption>Default caption (medium)</Caption>
        <Caption variant="md">Posted 2 hours ago</Caption>
        <Caption variant="md">Last updated: Jan 15, 2025</Caption>
        <Caption variant="md">© 2025 Aether Design System</Caption>
      </View>
    );
  },
};

export const Small: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Caption variant="sm">Smallest caption text</Caption>
        <Caption variant="sm">Version 1.0.0 · Build 123</Caption>
        <Caption variant="sm">Terms and conditions apply</Caption>
        <Caption variant="sm">
          This product is subject to our privacy policy and terms of service.
        </Caption>
      </View>
    );
  },
};

export const Weights: Story = {
  render() {
    return (
      <View className="gap-6 p-4">
        <View className="gap-2">
          <Caption weight="regular">Caption - Regular (default)</Caption>
          <Caption weight="medium">Caption - Medium</Caption>
          <Caption weight="semibold">Caption - SemiBold</Caption>
          <Caption weight="bold">Caption - Bold</Caption>
        </View>
        <View className="gap-2">
          <Caption variant="sm" weight="regular">
            Small - Regular (default)
          </Caption>
          <Caption variant="sm" weight="medium">
            Small - Medium
          </Caption>
          <Caption variant="sm" weight="semibold">
            Small - SemiBold
          </Caption>
          <Caption variant="sm" weight="bold">
            Small - Bold
          </Caption>
        </View>
      </View>
    );
  },
};

export const Colors: Story = {
  render() {
    return (
      <View className="gap-2 p-4">
        <Caption color="default">Default foreground</Caption>
        <Caption color="primary">Primary</Caption>
        <Caption color="muted">Muted</Caption>
        <Caption color="success">Success</Caption>
        <Caption color="warning">Warning</Caption>
        <Caption color="danger">Danger</Caption>
        <Caption color="info">Info</Caption>
      </View>
    );
  },
};

export const UseCases: Story = {
  render() {
    return (
      <View className="gap-6 p-4">
        <View className="gap-1">
          <Caption weight="medium">Timestamps</Caption>
          <Caption color="muted">2 hours ago</Caption>
          <Caption color="muted">Last edited: 5 minutes ago</Caption>
        </View>

        <View className="gap-1">
          <Caption weight="medium">Metadata</Caption>
          <Caption color="muted">Version 1.2.0 · iOS 15+</Caption>
          <Caption color="muted">5.2 MB · Free</Caption>
        </View>

        <View className="gap-1">
          <Caption weight="medium">Status</Caption>
          <Caption color="success">Connected · Synced 2 min ago</Caption>
          <Caption color="muted">Last backup: Today at 3:45 PM</Caption>
        </View>

        <View className="gap-1">
          <Caption weight="medium">Legal</Caption>
          <Caption variant="sm" color="muted">
            © 2025 Company Name. All rights reserved.
          </Caption>
          <Caption variant="sm" color="muted">
            Terms · Privacy · Licenses
          </Caption>
        </View>
      </View>
    );
  },
};
