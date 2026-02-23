import "../src/globals.css";
import { AetherProvider } from "@byarcadia/aether";
import type { Preview } from "@storybook/react";
import { ScrollView, View } from "react-native";

const preview: Preview = {
  decorators: [
    (Story) => (
      <AetherProvider>
        <ScrollView>
          <View className="p-4">
            <Story />
          </View>
        </ScrollView>
      </AetherProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
