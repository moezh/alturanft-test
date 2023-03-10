import { Ionicons } from "@expo/vector-icons/";
import { Tabs } from "expo-router";
import DarkMode from "../../components/darkMode";
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
          headerRight: () => <DarkMode />,
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
          headerRight: () => <DarkMode />,
        }}
      />
    </Tabs>
  );
}
