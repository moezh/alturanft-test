import { useContext } from "react";
import { Text, View } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons/";

import appContext from "../services/appContext";
import useStyles from "../styles/styles";

export default function DarkMode() {
  const { theme, setTheme } = useContext(appContext);
  const styles = useStyles();

  return (
    <Pressable onPress={() => setTheme(theme === "light" ? "dark" : "light")}>
      <View style={styles.containerRow}>
        <Ionicons
          size={26}
          name={theme === "light" ? "ios-moon-outline" : "ios-sunny-outline"}
          color={styles.text.color}
        />
        <Text style={[styles.text, { marginLeft: 12 }]}>
          {`${theme === "light" ? "Dark" : "Light"} Mode`}
        </Text>
      </View>
    </Pressable>
  );
}
