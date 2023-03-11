import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons/";

import useStyles from "../../styles/styles";

export default function TabLayout() {
  const styles = useStyles();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: styles.text.color,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={28}
              style={{ marginBottom: -3 }}
              name="ios-home-outline"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={28}
              style={{ marginBottom: -3 }}
              name="ios-settings-outline"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
