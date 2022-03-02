import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";
import maskHex from "./utils/mask";
import Button from "./components/Button";

export default function App() {
  const [nameIdentifier, setNameIdentifier] = useState("");
  const [numberIdentifier, setNumberIdentifier] = useState("");

  return (
    <View>
      <StatusBar style="inverted" />
      <Header title="Идентификатор" />
      <View style={styles.container}>
        <Input
          placeholder="Название"
          style={styles.input}
          value={nameIdentifier}
          onChange={(e: string) => setNameIdentifier(e)}
        />
        <Input
          placeholder="Номер"
          type="hex"
          style={styles.input}
          value={numberIdentifier}
          onChangeMask={(e: string) => setNumberIdentifier(maskHex(e))}
        />
        <Button style={styles.button}>Сохранить</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  maskInput: {
    padding: 10,
    fontSize: 14,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  input: {
    marginTop: 16,
  },
  button: {
    marginTop: 13,
  },
});
