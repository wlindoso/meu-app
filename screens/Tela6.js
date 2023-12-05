import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import imagem1 from "./assets/banana.png";
import imagem2 from "./assets/maca.png";
import imagem3 from "./assets/melancia.png";
import imagem4 from "./assets/uvas.png";
import Separador from "../components/Separador";
import ProductInfoModal from "../components/Modal";

export default function Tela6() {
  const [isModalVisible, setModalVisible] = useState(false);

  const product = {
    nome: `Bananas`,
    info: `\t Banana, pacoba ou pacova é uma pseudobaga da bananeira, uma planta herbácea vivaz acaule da família Musaceae (género Musa - além do género Ensete, que produz as chamadas "falsas bananas"). São cultivadas em 130 países. Originárias do sudeste da Ásia são atualmente cultivadas em praticamente todas as regiões tropicais do planeta.`,
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frutaria Digital</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.texto}>Banana</Text>
          <Text>100 Kcal</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity onPress={openModal}>
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
          <TouchableOpacity onPress={openModal}>
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
          <TouchableOpacity onPress={openModal}>
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
          <TouchableOpacity onPress={openModal}>
            <Image source={imagem4} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
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
      <ProductInfoModal
        isVisible={isModalVisible}
        onClose={closeModal}
        product={product}
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
    borderColor: "#ccc",
    padding: 10,
    margin: 5,
    backgroundColor: "#ddd",
  },
  image: {
    width: 100,
    height: 100,
  },
  texto: {
    fontSize: 25,
    fontWeight: "bold",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    margin: 20,
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
