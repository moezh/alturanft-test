import { Text, View } from "react-native";

import useStyles from "../styles/styles";

export default function PasswordWalletScreen() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>
      <View style={styles.separator} />
    </View>
  );
}
