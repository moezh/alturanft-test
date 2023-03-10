import { Text, View } from "react-native";

import useStyles from "../styles/styles";

export default function ViewWalletScreen() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Wallet</Text>
      <View style={styles.separator} />
    </View>
  );
}