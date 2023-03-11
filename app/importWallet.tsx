import { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import appContext from "../services/appContext";
import useStyles from "../styles/styles";
import { getWalletMnemonic, getWalletPrivatekey } from "../services/ethNetwork";
import { savePrivateKey, getPrivateKey } from "../services/secureStorage";

export default function ImportWalletScreen() {
  const { wallet, setWallet } = useContext(appContext);
  const styles = useStyles();
  const [seed, setSeed] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function save(seed: string) {
    if (seed === "") {
      setMessage("");
      setError("Please enter a twelve-word recovery seed.");
    } else {
      getWalletMnemonic(seed)
        .then((result) => {
          savePrivateKey(result.privateKey)
            .then(() => {
              setWallet({
                address: result.address,
                balance: result.balance,
              });
            })
            .catch(() => {
              setMessage("");
              setError(`Failed to save the private key in the secure storage.`);
            });
          setError("");
          setMessage("Wallet imported successfully.");
        })
        .catch((error: { message: string }) => {
          setMessage("");
          setError(`Error: ${error.message}`);
        });
    }
  }

  useEffect(() => {
    if (wallet.address === "") {
      setIsLoading(true);
      try {
        getPrivateKey().then((pkey) => {
          if (pkey === null) {
            setIsLoading(false);
          } else {
            getWalletPrivatekey(pkey).then((result) => {
              setWallet({
                address: result.address,
                balance: result.balance,
              });
              setIsLoading(false);
            });
          }
        });
      } catch {
        setIsLoading(false);
        setMessage("");
        setError(`Failed to retrieve wallet from secure storage`);
      }
    }
  }, []);

  if (isLoading)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please wait, loading wallet ...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Import Wallet</Text>
      <TextInput
        value={seed}
        onChangeText={(seed) => setSeed(seed)}
        placeholder={"please input here a twelve-word recovery seed..."}
        placeholderTextColor={styles.text.color}
        multiline={true}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => save(seed)} style={styles.button}>
        <Text style={styles.buttonText}>Import Wallet</Text>
      </TouchableOpacity>
      {error !== "" ? <Text style={styles.error}>{error}</Text> : null}
      {message !== "" ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}
