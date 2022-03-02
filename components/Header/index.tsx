import React, { useMemo, useState, useCallback, useLayoutEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import Text from '../Typography'
import Colors from '../../constants/Сolors'

interface InlineHeaderProps {
    dark?: boolean
    scene?: any
    title?: string | object
    transparent?: boolean
}

const Header: React.FunctionComponent<InlineHeaderProps> = (props) => {
    const { dark, scene, title, } = props

    const titleElement = useMemo(() => {
        const value = scene?.descriptor.options.title || title || ''

        return typeof value === 'string'
            ? (
                <TouchableOpacity
                    activeOpacity={1}
                >
                    <Text md light semiBold style={styles.title} numberOfLines={1}>
                        {value}
                    </Text>
                </TouchableOpacity>
            )
            : value
    }, [scene, title])

    return (
        <LinearGradient
            start={{ x: 0.2, y: 0.1 }}
            style={[styles.container]}
            colors={Colors.Gradient}
            locations={[0.08, 0.8]}
        >
            <View style={styles.inner}>
                <TouchableOpacity
                    style={styles.icon}
                >
                    <Feather
                        name='chevron-left'
                        size={28}
                        color={dark ? Colors.TextPrimary : '#fff'}
                    />
                </TouchableOpacity>
                {titleElement}
            </View>
        </LinearGradient>
    )
}

export default Header

const styles = StyleSheet.create({
    icon: {
        marginRight: 8
    },
    inner: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        maxWidth: Dimensions.get('screen').width - 70
    },
    container: {
        height: 100,
        padding: 16,
        justifyContent: 'flex-end'
    }
})
