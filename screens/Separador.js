import { View, StyleSheet } from "react-native";

export default function Separador() {
  return <View style={styles.separador} />;
}

const styles = StyleSheet.create({
  separador: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
