import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Circle, Path } from 'react-native-svg';

const Numpad = (props) => {
  const [enteredAmount, setEnteredAmount] = useState('');

  const handleKeyPress = (value) => {
    setEnteredAmount((prevAmount) => prevAmount + value);
  };

  const handleDeletePress = () => {
    setEnteredAmount((prevAmount) => prevAmount.slice(0, -1));
  };

  const handleEnterPress = () => {
    console.log('Entered Amount:', enteredAmount);
    props.enterClick();
    props.updateIncome(enteredAmount);
  };

  return (
    <View style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.enterAmountContainer}>
          <TextInput
            style={styles.enterAmountInput}
            placeholder="Enter Amount"
            value={enteredAmount}
            editable={true}
          />
        </View>
        <View style={styles.row}>
          <Key text="1" onPress={() => setEnteredAmount("1")} />
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
            <Text style={styles.keyText}>Del</Text>
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
    </View>
  );
};

const Key = ({ text, onPress, style }) => (
  <TouchableOpacity style={[styles.key, style]} onPress={onPress}>
    <Text style={styles.keyText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  enterAmountContainer: {
    padding: 10,
    borderWidth: 2,
    width: 300,
    borderRadius: 30,
    backgroundColor:'white',
    borderColor: 'white',
    marginBottom: 20,
    elevation: 5
  },
  enterAmountInput: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  key: {
    width:100,
    borderRadius: 30,
    backgroundColor: '#3B4B69',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 5,
  },
  enterContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  enterKey: {
    width: 150,
    borderRadius: 10,
    backgroundColor: '#B3D2DD',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  keyText: {
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  backgroundImage: {
    position:"absolute",
    padding:50,
    bottom:90,
    width:"100%",
    backgroundColor:"#F4F6F1",
    alignItems: 'center',
  },
});

export default Numpad;
