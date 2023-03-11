import React from "react";

type AppContext = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  wallet: { address: string; balance: string };
  setWallet: React.Dispatch<
    React.SetStateAction<{
      address: string;
      balance: string;
    }>
  >;
};

export default React.createContext({} as AppContext);
