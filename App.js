import { useState, useEffect } from 'react';
import { Text, View, Animated, Easing, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation} from '@react-navigation/native';

import Welcome from './components/Welcome';
import Homescreen from './components/Homescreen';
import OptionList from './components/OptionList';
import Signup from './components/Signup';

const Tab = createBottomTabNavigator();

const CreateComponent = () => {
  const navigation = useNavigation();
  return (<OptionList cancel={()=>navigation.navigate("Home")}/>);
}

const NavigationComponent = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? 45 : 40;
            } else if (route.name === 'Create') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
              size = focused ? 60 : 50;
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
              size = focused ? 45 : 40;
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: '#3B4B69',
          tabBarInactiveTintColor: '#3B4B69',
          tabBarStyle: {
            justifyContent:'center',
            height: 60,
            paddingHorizontal: 5,
            backgroundColor: '#B3D2DD',
            position: 'absolute',
            borderTopWidth: 0,
          },
          tabBarLabel:() => {return null},
        })}
      >
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Create" component={CreateComponent} />
        <Tab.Screen name="Profile" component={Signup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  const [showComponent1, setShowComponent1] = useState(true);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        setShowComponent1(false);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }); 

  return (
    <View style={{flex:1}}>
      {showComponent1 ? (<Animated.View style={{flex:1, opacity: fadeAnim }}><Welcome /></Animated.View>
      ) : (<NavigationComponent />)}
    </View>
  );
}

export default App;
