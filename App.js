/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from "./Screens/HomeScreen"

const App =() => {
  return (
    <>
      <HomeScreen />
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
