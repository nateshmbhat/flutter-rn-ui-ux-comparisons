/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {BorderTestScreen} from './app/BorderTestScreen';
import {HeroAnimTargetScreen} from './app/TestScreen3';
import {HeroAnimSourceScreen} from './app/TestScreen2';
import {HomeScreen} from './app/HomeScreen';
import {BlurTestScreen} from './app/BlurTestScreen';
const MainStack = createStackNavigator();

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="HomeScreen">
          <MainStack.Screen
            options={{headerShown: false}}
            name="BorderTestScreen"
            component={BorderTestScreen}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="HomeScreen"
            component={HomeScreen}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="BlurTestScreen"
            component={BlurTestScreen}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="HeroAnimSourceScreen"
            component={HeroAnimSourceScreen}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
              // animation: 'default',
              // animationDuration: 2000,
              transitionSpec: {
                open: {animation: 'timing', config: {duration: 1000}},
                close: {animation: 'timing', config: {duration: 1000}},
              },
            }}
            name="HeroAnimTargetScreen"
            component={HeroAnimTargetScreen}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
