import { ScrollView, Text, View } from "react-native";

const COLOR_TOKENS = [
  { label: "primary", className: "bg-primary" },
  { label: "secondary", className: "bg-secondary" },
  { label: "success", className: "bg-success" },
  { label: "warning", className: "bg-warning" },
  { label: "danger", className: "bg-danger" },
  { label: "info", className: "bg-info" },
  { label: "muted", className: "bg-muted" },
  { label: "surface", className: "bg-surface" },
];

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-6">
        <Text className="text-3xl font-interBold text-foreground mb-2">Aether UI</Text>
        <Text className="text-base font-inter text-muted-foreground mb-8">
          Example App — Library Configuration Showcase
        </Text>

        <Text className="text-lg font-interSemiBold text-foreground mb-4">Theme Color Tokens</Text>
        <Text className="text-sm font-inter text-muted-foreground mb-4">
          These swatches verify that the aether tailwind preset is active and NativeWind is
          processing classes correctly.
        </Text>

        <View className="gap-3">
          {COLOR_TOKENS.map(({ label, className }) => (
            <View key={label} className="flex-row items-center gap-3">
              <View className={`w-10 h-10 rounded-lg ${className}`} />
              <Text className="text-sm font-interMedium text-foreground">{label}</Text>
            </View>
          ))}
        </View>

        <View className="mt-8 p-4 bg-surface rounded-xl border border-border">
          <Text className="text-sm font-interSemiBold text-surface-foreground mb-1">
            @byarcadia-app/aether
          </Text>
          <Text className="text-xs font-inter text-muted-foreground">
            This app demonstrates @byarcadia-app/aether integration with Expo via pnpm workspace.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
