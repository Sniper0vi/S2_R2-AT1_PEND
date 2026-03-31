import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

export default function Contato() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <AntDesign name="phone" size={80} color="#ff9a00" style={{ marginBottom: 20 }} />

      <Text style={styles.titulo}>Nossos Contatos</Text>

      <View style={styles.card}>
        <Text style={styles.texto}>📞 Telefone: +55 (11) 1234-4567</Text>
        <Text style={styles.texto}>💬 WhatsApp: +55 (11) 9876-5432</Text>
        <Text style={styles.texto}>
          📍 Endereço: Casa do Metheus do Pagode, 108, Maria Antonia
        </Text>
        <Text style={styles.texto}>📋 CNPJ: 00.000.000/0001-00</Text>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Falar no WhatsApp</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1633",        // Roxo escuro
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#ffea80",                  // Amarelo vibrante
    textAlign: "center",
    marginBottom: 30,
    textShadowColor: "rgba(255, 42, 109, 0.6)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  card: {
    backgroundColor: "#2a2255",        // Roxo mais claro
    borderRadius: 20,
    padding: 25,
    width: "100%",
    borderWidth: 3,
    borderColor: "#ff9a00",            // Borda laranja
    marginBottom: 30,
  },
  texto: {
    fontSize: 17,
    color: "#a3ffcc",                  // Verde menta
    lineHeight: 26,
    marginBottom: 12,
  },
  botao: {
    backgroundColor: "#ff2a6d",        // Rosa neon
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ffea80",
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});