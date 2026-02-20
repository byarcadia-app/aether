import type { Meta, StoryObj } from "@storybook/react";
import { DemoCard } from "~/components/demo-card";

const meta = {
  title: "DemoCard",
  component: DemoCard,
} satisfies Meta<typeof DemoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Demo Card",
    description: "This is a demo card using aether theme tokens.",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Title Only Card",
  },
};
