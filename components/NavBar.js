import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Circle, Path } from 'react-native-svg';

const CircularButton = ({ onPress, circularButtonData }) => {
  return (
    <View style={styles.circularButtonContainer}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'darkblue' : '#3B4B69',
          },
          styles.circularButton,
        ]}
        onPress={onPress}
      >
        <Svg width="90" height="90" viewBox="0 0 40 40">
          <Circle cx="20" cy="20" r="19" stroke="#3B4B69" strokeWidth="2" fill="#6B88A5" />
          <Path d="M20 12V28M12 20H28" stroke="white" strokeWidth="2" />
        </Svg>
      </Pressable>
    </View>
  );
};

const HomeButton = ({ onPress, homeData }) => {
  return (
    <View style={styles.homeButtonContainer}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'darkblue' : '#3B4B69',
          },
          styles.homeButton,
        ]}
        onPress={onPress}
      >
        <Icon name="home" size={30} color="white" />
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
    </View>
  );
};

const AccountButton = ({ onPress, personData }) => {
  return (
    <View style={styles.accountButtonContainer}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'darkblue' : '#3B4B69',
          },
          styles.accountButton,
        ]}
        onPress={onPress}
      >
        <Icon name="user" size={30} color="white" />
        <Text style={styles.buttonText}>Account</Text>
      </Pressable>
    </View>
  );
};

const styles = {
  circularButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: '62%',
    marginLeft: -40,
  },
  homeButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  accountButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  circularButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B3D2DD',
  },
  homeButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B3D2DD',
    left: '60%',
    top: '20%'
  },
  accountButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B3D2DD',
    right: '60%',
    top: '20%'
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3B4B69',
  },
};

export { CircularButton, HomeButton, AccountButton };
