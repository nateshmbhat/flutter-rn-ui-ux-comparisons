/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeScreen} from './app/home/HomeScreen';
import {TestScreen2} from './app/home/Screen1';

const MainStack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="screen1">
          <MainStack.Screen
            options={{headerShown: false}}
            name="home"
            component={HomeScreen}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="screen1"
            component={TestScreen2}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
