import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ILLogo} from '../../assets'
import {Button, Gap, Input, Link} from '../../components'


const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Username / Email"/>
      <Gap height={24} />
      <Input label="Password"/>
      <Gap height={10} />
      <Link title="Lupa Password?" size={12}/>
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Daftar Akun Sekarang" size={16} align="center"/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  }
})