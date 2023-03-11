import { useContext } from "react";

import ViewWalletScreen from "../viewWallet";
import ImportWalletScreen from "../importWallet";

import appContext from "../../services/appContext";

export default function HomeScreen() {
  const { wallet } = useContext(appContext);

  if (wallet.address === "") {
    return <ImportWalletScreen />;
  } else {
    return <ViewWalletScreen />;
  }
}
