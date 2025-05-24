import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>        
        <Stack screenOptions={{ headerShown: false }}>/* All screens will be wrapped in SafeAreaView by using 'screenOptions' */
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
