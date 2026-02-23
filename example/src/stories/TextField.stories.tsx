import React from "react";
import {
  TextField,
  TextFieldLabel,
  TextFieldInput,
  TextFieldInputStartContent,
  TextFieldDescription,
  TextFieldErrorMessage,
} from "@arcadia/aether";
import { IconSymbol } from "@arcadia/aether/icons";
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

const meta = {
  title: "Forms/TextField",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <View className="p-4">
      <TextField>
        <TextFieldLabel>Email</TextFieldLabel>
        <TextFieldInput placeholder="Enter your email" />
      </TextField>
    </View>
  ),
};

export const WithError: Story = {
  render: () => (
    <View className="p-4">
      <TextField isInvalid>
        <TextFieldLabel>Email</TextFieldLabel>
        <TextFieldInput placeholder="Enter your email" />
        <TextFieldErrorMessage>Invalid email address</TextFieldErrorMessage>
      </TextField>
    </View>
  ),
};

export const Required: Story = {
  render: () => (
    <View className="p-4">
      <TextField isRequired>
        <TextFieldLabel>Full Name</TextFieldLabel>
        <TextFieldInput placeholder="Enter your full name" />
      </TextField>
    </View>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <View className="p-4">
      <TextField>
        <TextFieldLabel>Password</TextFieldLabel>
        <TextFieldInput placeholder="Enter a strong password" />
        <TextFieldDescription>Must be at least 8 characters long</TextFieldDescription>
      </TextField>
    </View>
  ),
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = React.useState("Clear me");
    return (
      <View className="p-4">
        <TextField>
          <TextFieldLabel>Clearable Field</TextFieldLabel>
          <TextFieldInput
            value={value}
            onChangeText={setValue}
            isClearable
            placeholder="Type something"
          />
        </TextField>
      </View>
    );
  },
};

export const Multiline: Story = {
  render: () => (
    <View className="p-4">
      <TextField>
        <TextFieldLabel>Message</TextFieldLabel>
        <TextFieldInput placeholder="Enter your message" multiline numberOfLines={6} />
      </TextField>
    </View>
  ),
};

export const WithStartContent: Story = {
  render: () => (
    <View className="p-4">
      <TextField>
        <TextFieldLabel>Search</TextFieldLabel>
        <TextFieldInput placeholder="Search...">
          <TextFieldInputStartContent>
            <IconSymbol name="magnifyingglass" size={16} />
          </TextFieldInputStartContent>
        </TextFieldInput>
      </TextField>
    </View>
  ),
};

export const Disabled: Story = {
  render: () => (
    <View className="p-4">
      <TextField isDisabled>
        <TextFieldLabel>Disabled Field</TextFieldLabel>
        <TextFieldInput placeholder="Cannot edit this" />
      </TextField>
    </View>
  ),
};
