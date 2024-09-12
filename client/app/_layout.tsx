import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { config } from "@tamagui/config/v3";
import { TamaguiProvider, createTamagui } from "tamagui";

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  // or 'tamagui'
  interface TamaguiCustomConfig extends Conf {}
}

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#1E2023" },
        }}
      >
      </Stack>
    </TamaguiProvider>
  );
}
