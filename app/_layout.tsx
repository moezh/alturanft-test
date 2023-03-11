import { useState, useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons/";

import appContext from "../services/appContext";

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
  const [theme, setTheme] = useState("light");
  const [wallet, setWallet] = useState({
    address: "",
    balance: "",
  });

  return (
    <appContext.Provider value={{ theme, setTheme, wallet, setWallet }}>
      <ThemeProvider value={theme === "light" ? DefaultTheme : DarkTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="importWallet"
            options={{ title: "Import Wallet" }}
          />
          <Stack.Screen name="viewWallet" options={{ title: "View Wallet" }} />
        </Stack>
      </ThemeProvider>
    </appContext.Provider>
  );
}
