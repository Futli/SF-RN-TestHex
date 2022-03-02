import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface HexKeyboardProps {
  style?: object;
  cancel?: any;
  insertText?: any;
  hideKeyboard?: any;
}

export const HexKeyboard: React.FunctionComponent<HexKeyboardProps> = (
  props
) => {
  const { style, cancel, hideKeyboard, insertText } = props;

  const onPress1 = () => {
    insertText("1");
  };

  const onPress2 = () => {
    insertText("2");
  };

  const onPress3 = () => {
    insertText("3");
  };

  const onPress4 = () => {
    insertText("4");
  };

  const onPress5 = () => {
    insertText("5");
  };

  const onPress6 = () => {
    insertText("6");
  };

  const onPress7 = () => {
    insertText("7");
  };

  const onPress8 = () => {
    insertText("8");
  };
  const onPressA = () => {
    insertText("A");
  };

  const onPressB = () => {
    insertText("B");
  };

  const onPressC = () => {
    insertText("C");
  };

  const onPressD = () => {
    insertText("D");
  };

  const onPressE = () => {
    insertText("E");
  };

  const onPressF = () => {
    insertText("F");
  };
  const onPress9 = () => {
    insertText("9");
  };

  const onPressCancel = () => {
    cancel();
  };

  const onPress0 = () => {
    insertText("0");
  };

  const onPressHideKeyboard = () => {
    hideKeyboard();
  };

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress7}>
            <Text style={styles.buttonLabel}>7</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress8}>
            <Text style={styles.buttonLabel}>8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress9}>
            <Text style={styles.buttonLabel}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPressA}>
            <Text style={styles.buttonLabel}>A</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPressB}>
            <Text style={styles.buttonLabel}>B</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPressC}>
            <Text style={styles.buttonLabel}>C</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress4}>
            <Text style={styles.buttonLabel}>4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress5}>
            <Text style={styles.buttonLabel}>5</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress6}>
            <Text style={styles.buttonLabel}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPressD}>
            <Text style={styles.buttonLabel}>D</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPressE}>
            <Text style={styles.buttonLabel}>E</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPressF}>
            <Text style={styles.buttonLabel}>F</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress1}>
            <Text style={styles.buttonLabel}>1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress2}>
            <Text style={styles.buttonLabel}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress3}>
            <Text style={styles.buttonLabel}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress0}>
            <Text style={styles.buttonLabel}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPressCancel}>
            <Text style={styles.buttonLabel}>&#8630;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPressHideKeyboard}>
            <Text style={styles.buttonLabel}>&#8629;</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLabel: {
    borderWidth: 2,
    borderColor: "#d6d7da",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    fontSize: 25,
    margin: 3,
  },
  button: {
    flex: 1,
  },
});
