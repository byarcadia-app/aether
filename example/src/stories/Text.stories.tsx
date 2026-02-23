import { Text } from "@byarcadia-app/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

const meta = {
  title: "Typography/Text",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const AllVariants: Story = {
  render() {
    return (
      <View className="gap-2 p-4">
        <Text variant="headline">Headline - Content Emphasis</Text>
        <Text variant="body">Body - Default body text for reading</Text>
        <Text variant="callout">Callout - Secondary content and descriptions</Text>
        <Text variant="subhead">Subhead - Less prominent supporting text</Text>
        <Text variant="footnote">Footnote - Fine print and small details</Text>
      </View>
    );
  },
};

export const Body: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Text>Default body text without specifying variant.</Text>
        <Text variant="body">
          Body variant explicitly set. Perfect for paragraphs and main content.
        </Text>
        <Text variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
      </View>
    );
  },
};

export const Headline: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Text variant="headline">Important Message</Text>
        <Text variant="headline">Feature Announcement</Text>
        <Text variant="headline">Key Takeaway</Text>
      </View>
    );
  },
};

export const Callout: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Text variant="callout">This is a callout text. Slightly smaller than body text.</Text>
        <Text variant="callout">Perfect for descriptions, labels, and secondary information.</Text>
      </View>
    );
  },
};

export const Subhead: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Text variant="subhead">Supporting information</Text>
        <Text variant="subhead">Metadata and timestamps</Text>
        <Text variant="subhead">2 hours ago · 5 min read</Text>
      </View>
    );
  },
};

export const Footnote: Story = {
  render() {
    return (
      <View className="gap-4 p-4">
        <Text variant="footnote">* Terms and conditions apply</Text>
        <Text variant="footnote">© 2025 Aether Design System</Text>
        <Text variant="footnote">
          This is fine print text for legal disclaimers and small details.
        </Text>
      </View>
    );
  },
};

export const CustomWeight: Story = {
  render() {
    return (
      <View className="gap-6 p-4">
        <View className="gap-2">
          <Text variant="body" weight="regular">
            Body - Regular (default)
          </Text>
          <Text variant="body" weight="medium">
            Body - Medium
          </Text>
          <Text variant="body" weight="semibold">
            Body - SemiBold
          </Text>
          <Text variant="body" weight="bold">
            Body - Bold
          </Text>
        </View>
        <View className="gap-2">
          <Text variant="headline" weight="regular">
            Headline - Regular
          </Text>
          <Text variant="headline" weight="medium">
            Headline - Medium
          </Text>
          <Text variant="headline" weight="semibold">
            Headline - SemiBold (default)
          </Text>
          <Text variant="headline" weight="bold">
            Headline - Bold
          </Text>
        </View>
      </View>
    );
  },
};

export const Colors: Story = {
  render() {
    return (
      <View className="gap-2 p-4">
        <Text color="default">Default foreground</Text>
        <Text color="primary">Primary</Text>
        <Text color="secondary">Secondary</Text>
        <Text color="muted">Muted</Text>
        <Text color="success">Success</Text>
        <Text color="warning">Warning</Text>
        <Text color="danger">Danger</Text>
        <Text color="info">Info</Text>
      </View>
    );
  },
};

export const ForegroundColors: Story = {
  render() {
    return (
      <View className="gap-2 p-4">
        <View className="bg-primary rounded-lg p-3">
          <Text color="primary-foreground">Text on primary background</Text>
        </View>
        <View className="bg-success rounded-lg p-3">
          <Text color="success-foreground">Text on success background</Text>
        </View>
        <View className="bg-danger rounded-lg p-3">
          <Text color="danger-foreground">Text on danger background</Text>
        </View>
        <View className="bg-info rounded-lg p-3">
          <Text color="info-foreground">Text on info background</Text>
        </View>
      </View>
    );
  },
};
