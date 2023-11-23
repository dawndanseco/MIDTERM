import React from 'react';
import { View, StyleSheet } from 'react-native';
import Welcome from './components/Welcome';
import Homescreen from './components/Homescreen';
import NumPad from './components/NumPad';
import Budget from './components/Budget';

const App = () => {
  return (
    <View style={styles.container}>
      <Homescreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F1',
  },
});

export default App;
