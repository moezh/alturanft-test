import React from "react";

type AppContext = {
  theme?: {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  };
};

export default React.createContext({} as AppContext);
