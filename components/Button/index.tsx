import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View, Pressable, StyleSheet } from 'react-native'

import Colors from '../../constants/Сolors'

interface ButtonProps {
    icon?: object
    style?: object
    red?: boolean
    light?: boolean
    onPress?(): void
    outline?: boolean
    disabled?: boolean
    absolute?: boolean
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { icon, style, onPress, red, light, children, outline, disabled, absolute } =
        props

    return (
        <Pressable
            style={({ pressed }) => [
                style,
                styles.button,
                !disabled && styles.buttonShadow,
                pressed && styles.buttonActive,
                absolute && styles.buttonAbsolute
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <LinearGradient
                start={{ x: 0.2, y: 0.1 }}
                style={[
                    styles.buttonGradient,
                    disabled && { borderWidth: 2, borderColor: Colors.TextDisabled }
                ]}
                colors={
                    disabled
                        ? [Colors.BgDisabled, Colors.BgDisabled]
                        : red
                            ? ['#FF4828', '#FF4828']
                            : light
                                ? ['#fff', '#fff']
                                : Colors.Gradient
                }
                locations={light || disabled ? [1, 1] : [0.08, 0.8]}
            >
                {icon}
                {outline ? (
                    <View style={[styles.buttonOutline, disabled && styles.buttonDisabled]}>
                        <Text
                            style={[
                                styles.buttonText,
                                styles.buttonTextOutline,
                                disabled && styles.buttonTextDisabled
                            ]}
                        >
                            {children}
                        </Text>
                    </View>
                ) : (
                    <Text
                        style={[
                            styles.buttonText,
                            disabled && styles.buttonTextDisabled,
                            light && styles.buttonTextLight
                        ]}
                    >
                        {children}
                    </Text>
                )}
            </LinearGradient>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        minHeight: 43,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    buttonShadow: {
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: '#000',
        shadowRadius: 10,
        shadowOpacity: 0.12
    },
    buttonGradient: {
        flex: 1,
        padding: 2,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonActive: {
        elevation: 4,
        shadowRadius: 15,
        shadowOpacity: 0.2
    },
    buttonOutline: {
        flex: 1,
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    buttonDisabled: {
        backgroundColor: Colors.BgDisabled
    },
    buttonPlus: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    buttonAbsolute: {
        left: 24,
        right: 24,
        bottom: 24,
        position: 'absolute'
    },

    buttonText: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 19,
    },
    buttonTextPlus: {
        color: Colors.TextPrimary,
        fontSize: 14,
        lineHeight: 19,
        marginLeft: 8
    },
    buttonTextLight: {
        color: Colors.Primary
    },
    buttonTextOutline: {
        color: Colors.Primary
    },
    buttonTextDisabled: {
        color: Colors.TextDisabled
    }
})
