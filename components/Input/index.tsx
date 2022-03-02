import React, { useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardType,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../../constants/Сolors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HexKeyboard } from "../HexKeyboard";
import { BottomSheet } from "react-native-elements";

interface TextInputProps {
  type?: "text" | "email" | "password" | "hex";
  value?: string;
  style?: object;
  prefix?: object;
  disabled?: boolean;
  inputRef?: React.RefObject<any>;
  onChange?: (value: string) => void;
  onChangeMask?: any;
  autoFocus?: boolean;
  multiline?: boolean;
  inputStyle?: object;
  placeholder?: string;
  maxLength?: number;
  keyboardType?: KeyboardType;
}

const CustomTextInput: React.FunctionComponent<TextInputProps> = (props) => {
  const {
    type = "text",
    style,
    prefix,
    maxLength,
    onChange,
    onChangeMask,
    disabled,
    inputRef = useRef(),
    multiline,
    inputStyle,
    placeholder,
    ...rest
  } = props;

  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hexShow, setHexShow] = useState(false);

  const onShow = () => {
    setHexShow(true);
    inputRef.current.blur();
  };

  const onHide = () => {
    setHexShow(false);
    setFocused(false);
  };

  const handleBlur = () => {
    type === "hex" ? (onShow(), setFocused(true)) : setFocused(false);
  };

  const handleFocus = () => {
    type === "hex" ? (onShow(), setFocused(true)) : setFocused(true);
  };

  const handleCancel = () => {
    setValue("");
    onChangeMask("");
  };

  const handleKey = (text: string) => {
    value.length < 8 &&
      (onChangeMask(value + text), setValue((value) => value + text));
  };

  const commonProps = {
    value,
    placeholder,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChangeText: type === "hex" ? onChangeMask : onChange,
    maxLength,
    editable: !disabled,
    style: [styles.input, inputStyle, prefix && styles.inputPrefix],
    selectionColor: Colors.Primary,
    placeholderTextColor: Colors.TextPlaceholder,
  };

  return (
    <LinearGradient
      start={{ x: 0.2, y: 0.1 }}
      style={[styles.container, style, multiline && styles.inputArea]}
      colors={
        focused
          ? ["rgb(242, 83, 56)", "rgb(250, 131, 15)"]
          : [Colors.Border, Colors.Border]
      }
      locations={focused ? [0.08, 0.8] : [1, 1]}
    >
      <SafeAreaProvider>
        <TextInput
          ref={inputRef}
          multiline={multiline}
          showSoftInputOnFocus={type === "hex" ? false : true}
          keyboardType={type === "email" ? "email-address" : "default"}
          secureTextEntry={type === "password" && !visible}
          contextMenuHidden={type === "password"}
          {...commonProps}
          {...rest}
        />
        {type == "hex" && (
          <TouchableWithoutFeedback onPress={onHide}>
            <BottomSheet
              modalProps={{
                animationType: "fade",
              }}
              isVisible={hexShow}
              containerStyle={styles.keyboardStyle}
            >
              <HexKeyboard
                hideKeyboard={onHide}
                cancel={handleCancel}
                insertText={(e: string) => handleKey(e)}
                style={styles.keyboardStyle}
              />
            </BottomSheet>
          </TouchableWithoutFeedback>
        )}
      </SafeAreaProvider>
      {type === "password" && (
        <TouchableOpacity
          style={styles.eye}
          onPress={() => setVisible(!visible)}
        >
          <Feather
            size={24}
            name={visible ? "eye" : "eye-off"}
            color={Colors.Primary}
          />
        </TouchableOpacity>
      )}
      {prefix && <View style={styles.prefix}>{prefix}</View>}
    </LinearGradient>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  eye: {
    top: 0,
    right: 0,
    padding: 8,
    position: "absolute",
  },
  icon: {
    top: 10,
    left: 10,
    zIndex: 1,
    position: "absolute",
  },
  input: {
    flex: 1,
    color: Colors.TextPrimary,
    padding: 10,
    fontSize: 14,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  prefix: {
    position: "absolute",
    paddingVertical: 6.5,
    paddingHorizontal: 10,
  },
  inputArea: {
    height: 150,
  },
  inputPrefix: {
    paddingLeft: 26,
  },
  container: {
    height: 43,
    padding: 2,
    borderRadius: 10,
  },
  transparent: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    paddingBottom: 2,
  },
  keyboardStyle: {
    flex: 2,
    bottom: 0,
    backgroundColor: "transparent",
  },
});
