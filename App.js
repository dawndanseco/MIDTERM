import { useState, useEffect } from 'react';
import { View, Animated, Easing } from 'react-native';
import Welcome from './components/Welcome';
import Homescreen from './components/Homescreen';

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
      ) : (<Homescreen />)}
    </View>
  );
}

export default App;
