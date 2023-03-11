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
      paddingHorizontal: 16,
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
      marginTop: 12,
      textTransform: "capitalize",
    },
    text: {
      fontSize: 17,
      color: theme.colors.text,
      marginTop: 12,
    },
    error: {
      fontSize: 14,
      color: "darkred",
      textTransform: "capitalize",
      marginTop: 12,
    },
    message: {
      fontSize: 14,
      color: "darkgreen",
      textTransform: "capitalize",
      marginTop: 12,
    },
    linkText: {
      fontSize: 14,
      color: theme.colors.primary,
      marginTop: 12,
    },
    separator: {
      marginVertical: 24,
      height: 1,
      width: "80%",
      backgroundColor: theme.colors.border,
    },
    space: {
      marginVertical: 24,
    },
    input: {
      width: "80%",
      marginVertical: 24,
      backgroundColor: theme.colors.border,
      color: theme.colors.text,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    button: {
      backgroundColor: theme.colors.text,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    buttonText: {
      fontSize: 17,
      color: theme.colors.background,
      alignSelf: "center",
      paddingHorizontal: 12,
    },
  });

export default function useStyles() {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  return styles;
}
