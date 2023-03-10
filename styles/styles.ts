import { StyleSheet } from "react-native";
import { useMemo } from "react";
import { Theme, useTheme } from "@react-navigation/native";

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: theme.colors.background,
      paddingVertical: 50,
    },
    containerCol: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    containerRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.colors.text,
    },
    text: {
      fontSize: 17,
      lineHeight: 24,
      color: theme.colors.text,
    },
    link: {
      marginTop: 15,
      paddingVertical: 15,
    },
    linkText: {
      fontSize: 14,
      color: theme.colors.primary,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
      backgroundColor: theme.colors.border,
    },
    padding: {
      padding: 4,
    },
  });

export default function useStyles() {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  return styles;
}
