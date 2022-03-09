import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface HexKeyboardProps {
  style?: StyleProp<ViewStyle>;
  inputText: (value: string) => void;
}

export const HexKeyboard: React.FunctionComponent<HexKeyboardProps> = ({
  style,
  inputText,
}) => {

  type Key = {
    title: string;
    value: string;
  };

  const keys: Key[] = [
    { title: "7", value: "7" },
    { title: "8", value: "8" },
    { title: "9", value: "9" },
    { title: "A", value: "A" },
    { title: "B", value: "B" },
    { title: "C", value: "C" },
    { title: "4", value: "4" },
    { title: "5", value: "5" },
    { title: "6", value: "6" },
    { title: "D", value: "D" },
    { title: "E", value: "E" },
    { title: "F", value: "F" },
    { title: "1", value: "1" },
    { title: "2", value: "2" },
    { title: "3", value: "3" },
    { title: "0", value: "0" },
    { title: `\u21B6`, value: "cancel" },
    { title: `\u21B5`, value: "enter" },
  ];

  return (
    <View style={style}>
      <View style={styles.container}>
        {keys.map((i) => (
          <View key={i.title} style={styles.button}>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => inputText(i.value)}>
              <Text style={styles.buttonLabel}> {i.title} </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 164,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: "15%",
    borderRadius: 10,
    borderColor: "#E0E0E4",
    borderWidth: 1,
    backgroundColor: "#ECEDEE",
    margin: "0.7%",
  },
  buttonLabel: {
    padding: 10,
    fontSize: 22,
    lineHeight: 24,
  },

});
