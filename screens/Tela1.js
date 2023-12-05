import React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Separador from "../components/Separador";

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Esta é a Tela 1</Text>
      <Separador />
      <Button
        title="Ir para Tela 2"
        onPress={() => navigation.navigate("Tela2")}
      />
      <Separador />
      <Button
        title="Ir para Tela 3"
        onPress={() => navigation.navigate("Tela3")}
      />
      <Separador />
      <Button
        title="Ir para Tela 4"
        onPress={() => navigation.navigate("Tela4")}
      />
      <Separador />
      <Button
        title="Ir para Tela 5"
        onPress={() => navigation.navigate("Tela5")}
      />
      <Separador />
      <Button
        title="Ir para Tela 6"
        onPress={() => navigation.navigate("Tela6")}
      />
      <Separador />
      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.confirmar}
          onPress={() => Alert.alert("Você pressionou o botão de Confirmar")}
        >
          <Text style={styles.textoBotoes}>CONFIRMAR</Text>
        </TouchableOpacity>
        <Separador />
        <TouchableOpacity
          style={styles.cancelar}
          onPress={() => Alert.alert("Você pressionou o botão de Cancelar")}
        >
          <Text style={styles.textoBotoes}>CANCELAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  confirmar: {
    width: 150,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  cancelar: {
    width: 150,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  textoBotoes: {
    color: "white",
    textAlign: "center",
  },
});
