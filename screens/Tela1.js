import React from "react";
import { View, Button, StyleSheet, Text, Alert } from "react-native";
import Separador from "./Separador";

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Esta é a Tela 1</Text>
      <Separador />
      <Button title="Ir para Tela 2" onPress={() => navigation.navigate("Tela2")} />
      <Separador />
      <Button title="Ir para Tela 3" onPress={() => navigation.navigate("Tela3")} />
      <Separador />
      <Button title="Ir para Tela 4" onPress={() => navigation.navigate("Tela4")} />
      <Separador />
      <Button title="Ir para Tela 5" onPress={() => navigation.navigate("Tela5")} />
      <Separador />
      <Button
        style={styles.botao}
        title="CONFIRMAR"
        color="#3b5"
        onPress={() => Alert.alert("Você pressionou o botão de Confirmar")}
      />
      <Separador />
      <Button
        style={styles.botao}
        title="CANCELAR"
        color="#b35"
        onPress={() => Alert.alert("Você pressionou o botão de Cancelar")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    flex: 1,
    width: 150,
  },
});
