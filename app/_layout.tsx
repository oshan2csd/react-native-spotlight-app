import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
