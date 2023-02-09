import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Header, Input } from '../../components'

const Register = () => {
  return (
    <View>
      <Header />
      <View style={styles.content}>
        <Input label="Nama Lengkap"/>
        <Input label="Pekerjaan"/>
        <Input label="Email"/>
        <Input label="Username"/>
        <Input label="Password"/>
        <Button title="Daftar" />
      </View>
      
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0
  }
})