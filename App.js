import React from 'react';
import { View, StyleSheet } from 'react-native';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <View style={styles.container}>
      <Signup />
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
