import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Welcome from './components/Welcome';
import Homescreen from './components/Homescreen';
import NumPad from './components/NumPad';
import Budget from './components/Budget';
import NavBar from './components/NavBar';
import Categories from './components/Categories';

const App = () => {
  return (
    <View style={styles.container}>
      <Homescreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'red',
  },
});

export default App;
