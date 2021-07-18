import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import WeatherScreen from './screen/WeatherScreen';
import ZipCodeScreen from './screen/ZipCodeScreen';
import { StyleSheet,  View } from 'react-native';
import Constant from 'expo-constants';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Choose a zip code" component={ZipCodeScreen}/>
        <Stack.Screen name="Weather" component={WeatherScreen}/>
      </Stack.Navigator>
        <View style={styles.container}>
        <StatusBar style="auto" /> 
      </View>
    </NavigationContainer>
  );
}
/*เพิ่มสเตตัสบาร*/

const styles = StyleSheet.create({
  container: {
      paddingTop: Constant.statusBarHeight,
  }
});
