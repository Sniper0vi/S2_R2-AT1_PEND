import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, ScrollView, View, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Produtos() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1e1633" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar style="light" />

          {/* Primeiro produto */}
          <Image
            source={require("../../../assets/jogador.jpg")}
            style={styles.image}
          />
          <Text style={styles.titulo}>Top Jogador</Text>

          <Text style={styles.descricao}>3,00 R$</Text>
          <Text style={styles.pix}>1,50 R$ no Pix</Text>
          <TextInput 
            placeholder="Quantidade" 
            keyboardType="number-pad"
            style={styles.input}
          />
          <Button
            title="Adicionar ao carrinho"
            color="#ff2a6d"
            onPress={() => alert("Adicionado ao carrinho")}
          />

          <View style={styles.separador}> </View>

          {/* Segundo produto */}
          <Image
            source={require("../../../assets/barco.jpg")}
            style={styles.image}
          />
          <Text style={styles.titulo}> Titanick </Text>

          <Text style={styles.descricao}>3,00 R$</Text>
          <Text style={styles.pix}>1,50 R$ no Pix</Text>
          <TextInput 
            placeholder="Quantidade" 
            keyboardType="number-pad"
            style={styles.input}
          />
          <Button
            title="Adicionar ao carrinho"
            color="#ff2a6d"
            onPress={() => alert("Adicionado ao carrinho")}
          />

          <View style={styles.separador}> </View>

          {/* Terceiro produto */}
          <Image
            source={require("../../../assets/alien.jpg")}
            style={styles.image}
          />
          <Text style={styles.titulo}>Etziudos</Text>

          <Text style={styles.descricao}>3,00 R$</Text>
          <Text style={styles.pix}>1,50 R$ no Pix</Text>
          <TextInput 
            placeholder="Quantidade" 
            keyboardType="number-pad"
            style={styles.input}
          />
          <Button
            title="Adicionar ao carrinho"
            color="#ff2a6d"
            onPress={() => alert("Adicionado ao carrinho")}
          />

          <View style={styles.separador}> </View>

          {/* Quarto produto */}
          <Image
            source={require("../../../assets/noel.jpg")}
            style={styles.image}
          />
          <Text style={styles.titulo}>Noel Kit kat </Text>

          <Text style={styles.descricao}>3,00 R$</Text>
          <Text style={styles.pix}>1,50 R$ no Pix</Text>
          <TextInput 
            placeholder="Quantidade" 
            keyboardType="number-pad"
            style={styles.input}
          />
          <Button
            title="Adicionar ao carrinho"
            color="#ff2a6d"
            onPress={() => alert("Adicionado ao carrinho")}
          />

          <View style={styles.separador}> </View>

          {/* Quinto produto */}
          <Image
            source={require("../../../assets/enigma.png")}
            style={styles.image}
          />
          <Text style={styles.titulo}> Enigma ambulante </Text>

          <Text style={styles.descricao}>3,00 R$</Text>
          <Text style={styles.pix}>1,50 R$ no Pix</Text>
          <TextInput 
            placeholder="Quantidade" 
            keyboardType="number-pad"
            style={styles.input}
          />
          <Button
            title="Adicionar ao carrinho"
            color="#ff2a6d"
            onPress={() => alert("Adicionado ao carrinho")}
          />

          <View style={styles.separador}> </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 25,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: "#ff9a00",
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    marginVertical: 12,
    color: "#ffea80",           // Amarelo vibrante
    textShadowColor: "rgba(255, 42, 109, 0.6)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  descricao: {
    fontSize: 18,
    textAlign: "center",
    color: "#a3ffcc",           // Verde menta claro
    marginBottom: 8,
    fontWeight: "600",
  },
  pix: {
    fontWeight: "bold",
    color: "#00ff9d",           // Verde neon
    fontSize: 17,
    marginBottom: 18,
  },
  input: {
    backgroundColor: "#2a2255",
    color: "#fff",
    borderWidth: 2,
    borderColor: "#ff9a00",
    borderRadius: 12,
    padding: 12,
    width: "80%",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 15,
  },
  separador: {
    marginVertical: 25,
    height: 2,
    width: "85%",
    backgroundColor: "#ff9a00",
    opacity: 0.6,
  },
});