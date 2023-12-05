import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import imagem1 from "./assets/banana.png";
import imagem2 from "./assets/maca.png";
import imagem3 from "./assets/melancia.png";
import imagem4 from "./assets/uvas.png";

export default function Card({ navigation }) {
  function handleImagePress() {
    // Navegue para a próxima tela quando a imagem for pressionada
    navigation.navigate("TelaInicial");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frutaria Digital</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity onPress={handleImagePress}>
            <Text style={styles.texto}>Banana</Text>
          </TouchableOpacity>
          <Text>100 Kcal</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={imagem1} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.texto}>Maça</Text>
          <Text>100 Kcal</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={imagem2} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.texto}>Melancia</Text>
          <Text>100 Kcal</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={imagem3} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.texto}>Uvas</Text>
          <Text>100 Kcal</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={imagem4} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>

      <Button
        title="Ir para Tela 1"
        onPress={() => navigation.navigate("Tela1")}
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
  row: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "#d0d0d0",
  },
  image: {
    width: 100,
    height: 100,
  },
  texto: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#00f",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#00f",
  },
});
