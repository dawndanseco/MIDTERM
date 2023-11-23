import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Circle, Path } from 'react-native-svg';
import { CircularButton, HomeButton, AccountButton } from './NavBar';

const Numpad = ({ onKeyPress, onEnterPress, onDeletePress }) => {
  const [enteredAmount, setEnteredAmount] = useState('');

  const handleKeyPress = (value) => {
    setEnteredAmount((prevAmount) => prevAmount + value);
  };

  const handleDeletePress = () => {
    setEnteredAmount((prevAmount) => prevAmount.slice(0, -1));
  };

  const handleEnterPress = () => {
    console.log('Entered Amount:', enteredAmount);
  };

  return (
    <ImageBackground
      source={require('.././assets/homescreenbg.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.enterAmountContainer}>
          <TextInput
            style={styles.enterAmountInput}
            placeholder="Enter Amount"
            value={enteredAmount}
            keyboardType="numeric"
            editable={false}
          />
        </View>
        <View style={styles.row}>
          <Key text="1" onPress={() => handleKeyPress("1")} />
          <Key text="2" onPress={() => handleKeyPress("2")} />
          <Key text="3" onPress={() => handleKeyPress("3")} />
        </View>
        <View style={styles.row}>
          <Key text="4" onPress={() => handleKeyPress("4")} />
          <Key text="5" onPress={() => handleKeyPress("5")} />
          <Key text="6" onPress={() => handleKeyPress("6")} />
        </View>
        <View style={styles.row}>
          <Key text="7" onPress={() => handleKeyPress("7")} />
          <Key text="8" onPress={() => handleKeyPress("8")} />
          <Key text="9" onPress={() => handleKeyPress("9")} />
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.key} onPress={handleDeletePress}>
            <Text style={styles.keyText}>Delete</Text>
          </TouchableOpacity>
          <Key text="0" onPress={() => handleKeyPress("0")} />
          <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('.')}>
            <Text style={styles.keyText}>.</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.enterContainer}>
        <TouchableOpacity style={styles.enterKey} onPress={handleEnterPress}>
          <Text style={styles.keyText}>Enter</Text>
        </TouchableOpacity>
      </View>

      <CircularButton onPress={() => console.log('Circular Button pressed')} />
      <HomeButton onPress={() => console.log('Home Button pressed')} />
      <AccountButton onPress={() => console.log('Account Button pressed')} />
    </ImageBackground>
  );
};

const Key = ({ text, onPress, style }) => (
  <TouchableOpacity style={[styles.key, style]} onPress={onPress}>
    <Text style={styles.keyText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  enterAmountContainer: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor:'white',
    borderColor: 'white',
    marginBottom: 20,
    marginTop: 40,
    elevation: 5,
  },
  enterAmountInput: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  key: {
    width: 70,
    height: 70,
    borderRadius: 30,
    backgroundColor: '#3B4B69',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    elevation: 5,
  },
  enterContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  enterKey: {
    height: 70,
    width: 140,
    borderRadius: 30,
    backgroundColor: '#B3D2DD',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    elevation: 5,
  },
  keyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Numpad;
