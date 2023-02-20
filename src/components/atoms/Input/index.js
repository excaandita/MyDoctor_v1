import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const Input = ({label}) => {
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        padding: 12
    },
    label:{
        fontFamily: fonts.primary.normal,
        fontSize: 16,
        marginBottom: 6,
        color: colors.text.secondary
    }
})