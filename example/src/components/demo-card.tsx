import { Text, View } from "react-native";

interface DemoCardProps {
  title: string;
  description?: string;
}

export function DemoCard({ title, description }: DemoCardProps) {
  return (
    <View className="bg-surface rounded-xl p-4 border border-border">
      <Text className="text-lg font-interSemiBold text-surface-foreground">
        {title}
      </Text>
      {description ? (
        <Text className="text-sm font-inter text-muted-foreground mt-1">
          {description}
        </Text>
      ) : null}
    </View>
  );
}
