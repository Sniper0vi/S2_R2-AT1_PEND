import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Image 
        source={require('../../../assets/image.png')}
        style={styles.image}
      />

      <Text style={styles.titulo}>Capelouco’s</Text>

      <Text style={styles.descricao}>
        Na Capelouco’s, a regra é não ter regras. Somos o refúgio de quem busca 
        fones de ouvido e chapéus que fogem do comum, unindo o design psicodélico 
        à cultura urbana.
      </Text>

      <Text style={styles.descricao}>
        Aqui, acessórios não são apenas utilitários, são extensões da sua 
        personalidade vibrante. Se é ousado, colorido e autêntico, você encontra 
        na Capelouco’s.
      </Text>

      <TouchableOpacity 
        style={styles.botao}
        onPress={() => navigation.navigate('Produtos')}
      >
        <Text style={styles.textoBotao}>IR PARA OS CHAPÉUS MALUCOS →</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1633",        // Roxo escuro (mesmo da tela de produtos)
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: "45%",
    height: "22%",
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#ff9a00",            // Borda laranja vibrante
    marginBottom: 30,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 42,
    color: "#ffea80",                  // Amarelo vibrante
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "rgba(255, 42, 109, 0.7)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 8,
  },
  descricao: {
    fontSize: 17,
    color: "#a3ffcc",                  // Verde menta claro
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: "#ff2a6d",        // Rosa neon
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 20,
    borderWidth: 3,
    borderColor: "#ffea80",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});