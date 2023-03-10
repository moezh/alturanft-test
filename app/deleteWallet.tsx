import { Text, View } from "react-native";

import useStyles from "../styles/styles";
import React from "react";

export default function DeleteWalletScreen() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Wallet</Text>
      <View style={styles.separator} />
    </View>
  );
}
