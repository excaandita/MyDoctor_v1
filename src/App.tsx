import React from 'react';
import {StyleSheet} from 'react-native';
import {GetStarted, Splash} from './pages';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <GetStarted />
    </NavigationContainer>
  )
};

export default App;

const styles = StyleSheet.create({});