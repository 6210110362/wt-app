import { NavigationContainer, StackActions } from '@react-navigation/native';
//import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import WeatherScreen from './screen/WeatherScreen';
import ZipCodeScreen from './screen/ZipCodeScreen';



//import { StyleSheet,  View } from 'react-native';
//import Weather from './components/Weather';
//import Constant from 'expo-constants';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Choose a zip code" component={ZipCodeScreen}/>
        <Stack.Screen name="Weather" component={WeatherScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
     /*<View style={styles.container}>
      <Weather  zipCode="90110" />
      <StatusBar style="auto" />
     </View>*/
  );
}

/*const styles = StyleSheet.create({
  container: {
      paddingTop: Constant.statusBarHeight,
  }
});*/
