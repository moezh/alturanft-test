import { Ionicons } from "@expo/vector-icons/";

import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";

import useStyles from "../../styles/styles";
import DarkMode from "../../components/darkMode";

export default function SettingsScreen() {
  const styles = useStyles();

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.separator} />
      <DarkMode showText={true} />
      <View style={styles.separator} />
      <Link href="/importWallet">
        <View style={styles.containerRow}>
          <Ionicons
            size={26}
            name={"ios-download-outline"}
            color={styles.text.color}
          />
          <Text style={[styles.text, { marginLeft: 12 }]}>Import Wallet</Text>
        </View>
      </Link>
      <View style={styles.separator} />
      <Link href="/unlockWallet">
        <View style={styles.containerRow}>
          <Ionicons
            size={26}
            name={"ios-lock-open-outline"}
            color={styles.text.color}
          />
          <Text style={[styles.text, { marginLeft: 12 }]}>Unlock Wallet</Text>
        </View>
      </Link>
      <View style={styles.separator} />
      <Link href="/lockWallet">
        <View style={styles.containerRow}>
          <Ionicons
            size={26}
            name={"ios-lock-closed-outline"}
            color={styles.text.color}
          />
          <Text style={[styles.text, { marginLeft: 12 }]}>Lock Wallet</Text>
        </View>
      </Link>
      <View style={styles.separator} />
      <Link href="/passwordWallet">
        <View style={styles.containerRow}>
          <Ionicons
            size={20}
            name={"ios-shield-checkmark-outline"}
            color={styles.text.color}
          />
          <Text style={[styles.text, { marginLeft: 12 }]}>Change Password</Text>
        </View>
      </Link>
      <View style={styles.separator} />
      <Link href="/deleteWallet">
        <View style={styles.containerRow}>
          <Ionicons
            size={26}
            name={"ios-trash-outline"}
            color={styles.text.color}
          />
          <Text style={[styles.text, { marginLeft: 12 }]}>Delete Wallet</Text>
        </View>
      </Link>
      <View style={styles.separator} />
    </ScrollView>
  );
}
