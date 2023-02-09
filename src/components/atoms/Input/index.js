import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

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
        borderColor: '#E9E9E9',
        borderRadius: 10,
        padding: 12
    },
    label:{
        fontFamily: 'Nunito-Regular',
        fontSize: 16,
        marginBottom: 6,
        color: '#7D8797'
    }
})