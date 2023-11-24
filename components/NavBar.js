import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Circle, Path } from 'react-native-svg';

const CircularButton = (props) => {
  return (
    <View>
      <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'darkblue' : '#3B4B69',
          },
          styles.circularButton,
        ]}
        onPress={props.onPress}
      >
        <Svg width="90" height="90" viewBox="0 0 40 40">
          <Circle cx="20" cy="20" r="19" stroke="#3B4B69" strokeWidth="2" fill="#6B88A5" />
          <Path d="M20 12V28M12 20H28" stroke="white" strokeWidth="2" />
        </Svg>
      </Pressable>
    </View>
  );
};

const HomeButton = (props) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'darkblue' : '#3B4B69',
          },
          styles.homeButton,
        ]}
        onPress={props.onPress}
      >
        <Icon name="home" size={30} color="white" />
      </Pressable>
    </View>
  );
};

const AccountButton = (props) => {
  return(
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'darkblue' : '#3B4B69',
          },
          styles.accountButton,
        ]}
        onPress={props.onPress}
      >
        <Icon name="user" size={30} color="white" />
      </Pressable>
    </View>
  );
};

const NavBar = (props) => {
  const [isHome, setIsHome] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  return(
    <View style={styles.navbarstyle}>
      <HomeButton 
        onPress={props.homeButton}
      />
      <CircularButton 
        onPress={props.centerButton}
      />
      <AccountButton 
        onPress={() => console.log('Account Button pressed')}
      />
    </View>
  );
}

const styles = {
  navbarstyle: {
    backgroundColor:'#B3D2DD',
    flexDirection: "row",
    height: 70,
    width: "100%",
    position:"absolute",
    bottom: 0,
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    alignItems: "center"
  },
  circularButton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B3D2DD',
  },
  homeButton: {
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B4B69',
  },
  accountButton: {
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B4B69'
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3B4B69',
  },
};

export default NavBar;
