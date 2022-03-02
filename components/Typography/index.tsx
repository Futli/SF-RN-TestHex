import React,{useEffect} from 'react'
import { Text as RNText, StyleSheet, TextProps } from 'react-native'
import * as font from "expo-font";
import Colors from '../../constants/Сolors'

interface TypographyProps extends TextProps {
    sm?: boolean
    nm?: boolean
    md?: boolean
    lg?: boolean
    ml?: boolean
    xl?: boolean

    center?: boolean

    dark?: boolean
    light?: boolean
    primary?: boolean
    success?: boolean
    inactive?: boolean
    secondary?: boolean

    bold?: boolean
    normal?: boolean
    semiBold?: boolean
}

export const Text: React.FunctionComponent<TypographyProps> = (props) => {
    const { sm, nm, md, lg, ml, xl, dark, light, center, success, primary, inactive, secondary, bold, normal, semiBold, children, style, ...rest } = props
    
    useEffect(() => {
        font.loadAsync({
          'OpenSans': require("../../assets/fonts/OpenSans.ttf"),
        });
      }, []);

    return (
        <RNText style={[
            styles.text,
            sm && styles.textSm,
            nm && styles.textNm,
            md && styles.textMd,
            lg && styles.textLg,
            ml && styles.textMl,
            xl && styles.textXl,
            dark && styles.textDark,
            light && styles.textLight,
            center && styles.textCenter,
            success && styles.textSuccess,
            primary && styles.textPrimary,
            inactive && styles.textInactive,
            secondary && styles.textSecondary,
            style
        ]} {...rest}>
            {children}
        </RNText>
    )
}

export default Text

const styles = StyleSheet.create({
    titleLight: {
        color: '#fff'
    },

    text: {
        color: Colors.TextPrimary,
        fontSize: 14,
        fontFamily: 'OpenSans'
    },

    textSm: {
        fontSize: 12
    },
    textNm: {
        fontSize: 14
    },
    textMd: {
        fontSize: 16
    },
    textLg: {
        fontSize: 18
    },
    textMl: {
        fontSize: 20
    },
    textXl: {
        fontSize: 24
    },

    textDark: {
        color: Colors.TextPrimary
    },
    textLight: {
        color: '#fff'
    },
    textPrimary: {
        color: Colors.Primary
    },
    textSuccess: {
        color: Colors.TextSuccess
    },
    textInactive: {
        color: Colors.TextInactive
    },
    textSecondary: {
        color: Colors.TextSecondary
    },

    textCenter: {
        textAlign: 'center'
    }
})
