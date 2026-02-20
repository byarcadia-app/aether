import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="storybook"
        options={{
          title: "Storybook",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
