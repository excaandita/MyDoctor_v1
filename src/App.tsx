import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from './assets';

const App = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ILLogo />
      <Text style={{fontSize: 20, fontWeight: '600', color:'#112340', marginTop: 20}}>
        Dokter Ku
      </Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({});