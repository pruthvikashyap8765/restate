import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import GlobalProvider from "@/lib/global-provider";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik_Bold" : require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik_ExtraBold" : require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik_Medium" : require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik_Regular" : require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik_SemiBold" : require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik_Light" : require("../assets/fonts/Rubik-Light.ttf"),
  });


  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen after the fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider> {/* Every single screen will have access to the data */}
      <Stack screenOptions={{headerShown: false}}/>
    </GlobalProvider>
  
  ) //shows whatever the page we should show, screenOptions={{headerShown: false}} hides the header
}
