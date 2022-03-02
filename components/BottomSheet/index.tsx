import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {HexKeyboard} from "../HexKeyboard/index"
import maskHex from '../../utils/mask';

interface BottomSheetComponentProps  {
isVisible: boolean,
text?: string,
onKeyPress?:(text: string) => void,
onShow?: void,
onClose?: void
};

const BottomSheetComponent: React.FunctionComponent<BottomSheetComponentProps> = (props) => {
  const {onShow, onClose, isVisible, text, onKeyPress, ...rest } = props
  
  const [hexText, setHexText] = useState("")

  function handleChange(text: string) {

      const value = maskHex(text);
      setHexText(value)
      
     
  }

  return (
    <SafeAreaProvider>
      <BottomSheet modalProps={{animationType: 'fade',
            hardwareAccelerated: true}}
            isVisible={isVisible} containerStyle={styles.keyboardStyle}>
      <HexKeyboard  insertText={(e: string) => handleChange(e)} style={styles.keyboardStyle}/>
      </BottomSheet>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  keyboardStyle: {
      
      

  }
});

export default BottomSheetComponent;