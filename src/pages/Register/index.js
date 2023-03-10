import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Button, Gap, Header, Input} from '../../components'
import { colors } from '../../utils'

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun"/>
      <View style={styles.content}>
        <Input label="Nama Lengkap"/>
        <Gap height={24} />
        <Input label="Pekerjaan"/>
        <Gap height={24} />
        <Input label="Email"/>
        <Gap height={24} />
        <Input label="Username"/>
        <Gap height={24} />
        <Input label="Password"/>
        <Gap height={40} />
        <Button title="Daftar" onPress={() => navigation.navigate('UploadPhoto')} />
      </View>
      
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  content: {
    padding: 40,
    paddingTop: 0
  }
})