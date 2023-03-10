import { Text, View } from "react-native";

import useStyles from "../styles/styles";

export default function LockWalletScreen() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lock Wallet</Text>
      <View style={styles.separator} />
    </View>
  );
}
