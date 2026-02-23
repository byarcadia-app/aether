import {
  List,
  ListItem,
  ListItemAccessory,
  ListItemChevron,
  ListItemCollapse,
  ListItemContent,
  ListSectionHeader,
  Text,
  VStack,
} from "@byarcadiaapp/aether";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Switch, View } from "react-native";

const meta = {
  title: "Data/List",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <View className="p-4">
      <List>
        <ListItem>
          <ListItemContent>Profile</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>Settings</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>Help</ListItemContent>
        </ListItem>
      </List>
    </View>
  ),
};

export const SurfaceVariant: Story = {
  render: () => (
    <View className="p-4">
      <VStack className="gap-2">
        <ListSectionHeader>Account</ListSectionHeader>
        <List variant="surface" surfaceLevel="secondary">
          <ListItem onPress={() => {}}>
            <ListItemContent>Profile</ListItemContent>
            <ListItemChevron />
          </ListItem>
          <ListItem onPress={() => {}}>
            <ListItemContent>Notifications</ListItemContent>
            <ListItemChevron />
          </ListItem>
          <ListItem onPress={() => {}}>
            <ListItemContent>Privacy</ListItemContent>
            <ListItemChevron />
          </ListItem>
        </List>
      </VStack>
    </View>
  ),
};

export const WithAccessory: Story = {
  render: () => (
    <View className="p-4">
      <List variant="surface">
        <ListItem interactive={false}>
          <ListItemContent>Dark Mode</ListItemContent>
          <ListItemAccessory>
            <Switch value={false} />
          </ListItemAccessory>
        </ListItem>
        <ListItem onPress={() => {}}>
          <ListItemContent>Language</ListItemContent>
          <ListItemAccessory>
            <Text color="muted">English</Text>
          </ListItemAccessory>
          <ListItemChevron />
        </ListItem>
      </List>
    </View>
  ),
};

export const Collapsible: Story = {
  render: () => (
    <View className="p-4">
      <List variant="surface">
        <ListItem isCollapsible defaultExpanded={false}>
          <ListItemContent>Notifications</ListItemContent>
          <ListItemChevron />
          <ListItemCollapse>
            <Text color="muted">Configure your notification preferences here.</Text>
          </ListItemCollapse>
        </ListItem>
        <ListItem isCollapsible defaultExpanded>
          <ListItemContent>Privacy</ListItemContent>
          <ListItemChevron />
          <ListItemCollapse>
            <Text color="muted">Manage your privacy and security settings.</Text>
          </ListItemCollapse>
        </ListItem>
      </List>
    </View>
  ),
};

export const SectionHeaders: Story = {
  render: () => (
    <View className="p-4">
      <VStack className="gap-6">
        <VStack className="gap-2">
          <ListSectionHeader>General</ListSectionHeader>
          <List variant="surface">
            <ListItem onPress={() => {}} haptics>
              <ListItemContent>About</ListItemContent>
              <ListItemChevron />
            </ListItem>
            <ListItem onPress={() => {}}>
              <ListItemContent>Software Update</ListItemContent>
              <ListItemChevron />
            </ListItem>
          </List>
        </VStack>
        <VStack className="gap-2">
          <ListSectionHeader>Privacy</ListSectionHeader>
          <List variant="surface">
            <ListItem onPress={() => {}}>
              <ListItemContent>Location Services</ListItemContent>
              <ListItemChevron />
            </ListItem>
            <ListItem onPress={() => {}}>
              <ListItemContent>Tracking</ListItemContent>
              <ListItemChevron />
            </ListItem>
          </List>
        </VStack>
      </VStack>
    </View>
  ),
};
