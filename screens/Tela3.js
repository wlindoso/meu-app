import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Separador from "./Separador";

export default function Tela3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Esta é a Tela 3</Text>
      <Separador />
      <Button title="Ir para Tela 1" onPress={() => navigation.navigate("Tela1")} />
      <Separador />
      <Button title="Ir para Tela 2" onPress={() => navigation.navigate("Tela2")} />
      <Separador />
      <Button title="Ir para Tela 4" onPress={() => navigation.navigate("Tela4")} />
      <Separador />
      <Button title="Ir para Tela 5" onPress={() => navigation.navigate("Tela5")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
