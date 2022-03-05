import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface HexKeyboardProps {
  style: object;
  inputText:(value: string) => void;
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
            <TouchableOpacity onPress={() => inputText(i.value)}>
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
    flexDirection: "row",
    flexWrap: "wrap",    
    bottom: "-70%",
    fontFamily: 'OpenSans'
  },
  buttonLabel: {      
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",    
    fontSize: 25,  
    padding: 5,
  },
  button: {
    minWidth: "15%",
    flex: 1,
    margin: 3,
    paddingVertical: 7,
    borderWidth: 2,
    alignContent: "center",
    borderColor: "#d6d7da",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
});
