import { Ionicons } from "@expo/vector-icons/";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useState, useEffect } from "react";
import appContext from "../services/appContext";
import { useColorScheme } from "react-native";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...Ionicons.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const [theme, setTheme] = useState(
    useColorScheme() === "light" ? "light" : "dark"
  );

  return (
    <appContext.Provider value={{ theme: { theme, setTheme } }}>
      <ThemeProvider value={theme === "light" ? DefaultTheme : DarkTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="importWallet"
            options={{ presentation: "modal", title: "Import Wallet" }}
          />
          <Stack.Screen
            name="passwordWallet"
            options={{ presentation: "modal", title: "Change Password" }}
          />
          <Stack.Screen
            name="unlockWallet"
            options={{ presentation: "modal", title: "Unlock Wallet" }}
          />
          <Stack.Screen
            name="lockWallet"
            options={{ presentation: "modal", title: "Lock Wallet" }}
          />
          <Stack.Screen
            name="viewWallet"
            options={{ presentation: "modal", title: "View Wallet" }}
          />
          <Stack.Screen
            name="deleteWallet"
            options={{ presentation: "modal", title: "Delete Wallet" }}
          />
        </Stack>
      </ThemeProvider>
    </appContext.Provider>
  );
}
