import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";

import useStyles from "../styles/styles";

export default function NotFoundScreen() {
  const styles = useStyles();

  return (
    <>
      <Stack.Screen options={{ title: "" }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>
        <Link href="/">
          <Text style={styles.linkText}>Go to dashoard!</Text>
        </Link>
      </View>
    </>
  );
}
