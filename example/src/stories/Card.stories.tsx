import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
  Text,
} from "@byarcadiaapp/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

const meta = {
  title: "Layout/Card",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <View className="p-4">
      <Card className="rounded-lg">
        <CardHeader className="p-4">
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a card description</CardDescription>
        </CardHeader>
        <CardBody className="p-4">
          <Text>Card body content goes here</Text>
        </CardBody>
        <CardFooter className="p-4">
          <Text variant="footnote" color="muted">
            Footer text
          </Text>
        </CardFooter>
      </Card>
    </View>
  ),
};

export const Pressable: Story = {
  render: () => (
    <View className="p-4">
      <Card
        onPress={() => {}}
        className="rounded-lg"
        animationConfig={{
          scale: { duration: 100, scaleValue: 0.98 },
        }}
      >
        <CardHeader className="p-4">
          <CardTitle>Pressable Card</CardTitle>
          <CardDescription>Tap to interact</CardDescription>
        </CardHeader>
        <CardBody className="p-4">
          <Text>This card responds to press gestures</Text>
        </CardBody>
      </Card>
    </View>
  ),
};

export const WithImage: Story = {
  render: () => (
    <View className="p-4">
      <Card className="rounded-lg overflow-hidden">
        <CardImage aspectRatio="video" position="top" className="bg-muted">
          <View className="flex-1 justify-center items-center">
            <Text color="muted">Image Placeholder</Text>
          </View>
        </CardImage>
        <CardBody className="p-4">
          <Text variant="headline">Card with Image</Text>
          <Text color="muted" className="mt-2">
            Image positioned at the top
          </Text>
        </CardBody>
      </Card>
    </View>
  ),
};

export const Elevated: Story = {
  render: () => (
    <View className="p-4">
      <Card isElevated isBordered className="rounded-lg">
        <CardHeader className="p-4">
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>With shadow and border</CardDescription>
        </CardHeader>
        <CardBody className="p-4">
          <Text>This card has elevation and border styling</Text>
        </CardBody>
      </Card>
    </View>
  ),
};

export const Glass: Story = {
  render: () => (
    <View className="p-4">
      <Card variant="glass" className="rounded-lg">
        <CardHeader className="p-4">
          <CardTitle>Glass Card</CardTitle>
          <CardDescription>iOS 26+ LiquidGlass or fallback</CardDescription>
        </CardHeader>
        <CardBody className="p-4">
          <Text>This card uses glass variant styling</Text>
        </CardBody>
      </Card>
    </View>
  ),
};
