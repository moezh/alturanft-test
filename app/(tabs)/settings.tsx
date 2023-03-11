import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons/";

import appContext from "../../services/appContext";
import useStyles from "../../styles/styles";
import DarkMode from "../../components/darkMode";

import { deletePrivateKey } from "../../services/secureStorage";

export default function SettingsScreen() {
  const router = useRouter();
  const { wallet, setWallet } = useContext(appContext);
  const styles = useStyles();

  function deleteWallet() {
    deletePrivateKey().then(() => {
      setWallet({ address: "", balance: "" });
      router.push("/");
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.separator} />
      <DarkMode />
      <View style={styles.separator} />
      {wallet.address !== "" ? (
        <>
          <Pressable onPress={deleteWallet}>
            <View style={styles.containerRow}>
              <Ionicons
                size={26}
                name={"ios-trash-outline"}
                color={styles.text.color}
              />
              <Text style={[styles.text, { marginLeft: 12 }]}>
                Delete Wallet
              </Text>
            </View>
          </Pressable>
          <View style={styles.separator} />
        </>
      ) : null}
    </View>
  );
}
