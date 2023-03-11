import { useState, useEffect, useContext } from "react";
import { Text, View } from "react-native";

import appContext from "../services/appContext";
import useStyles from "../styles/styles";

import { getPrivateKey } from "../services/secureStorage";

export default function ViewWalletScreen() {
  const styles = useStyles();
  const { wallet } = useContext(appContext);
  const [isPKeySecure, setIsPKeySecure] = useState(false);

  useEffect(() => {
    getPrivateKey().then((pkey) => {
      if (pkey !== null) {
        setIsPKeySecure(true);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{wallet.address}</Text>
      <Text style={styles.text}>{`Balance: ${wallet.balance} ETH`}</Text>
      <View style={styles.space}></View>
      <Text
        style={isPKeySecure ? styles.message : styles.error}
      >{`Private Key: ${
        isPKeySecure
          ? "Stored in the local secure store"
          : "Failed to retrieve from secure store"
      }`}</Text>
    </View>
  );
}
