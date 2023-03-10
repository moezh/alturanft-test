import { Ionicons } from "@expo/vector-icons/";
import { Pressable } from "react-native";

import { useContext } from "react";
import appContext from "../services/appContext";
import useStyles from "../styles/styles";
import { Text, View } from "react-native";

export default function DarkMode({ showText = false }) {
  const context = useContext(appContext);
  const styles = useStyles();

  return (
    <Pressable
      onPress={() =>
        context?.theme?.setTheme(
          context?.theme?.theme === "light" ? "dark" : "light"
        )
      }
    >
      <View style={[styles.containerRow, { marginHorizontal: 16 }]}>
        <Ionicons
          size={26}
          name={
            context?.theme?.theme === "light"
              ? "ios-moon-outline"
              : "ios-sunny-outline"
          }
          color={styles.text.color}
        />
        {showText ? (
          <Text style={[styles.text, { marginLeft: 12 }]}>{`${
            context?.theme?.theme === "light" ? "Dark" : "Light"
          } Mode`}</Text>
        ) : null}
      </View>
    </Pressable>
  );
}
