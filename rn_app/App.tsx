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
import {Animated, SafeAreaView} from 'react-native';
import {BorderTestScreen} from './app/BorderTestScreen';
import {HeroAnimTargetScreen} from './app/TestScreen3';
import {HeroAnimSourceScreen} from './app/TestScreen2';
import {HomeScreen} from './app/HomeScreen';
import {BlurTestScreen} from './app/BlurTestScreen';
import {GalleryViewSourceScreen} from './app/GalleryViewSourceScreen';
import {GalleryViewTargetScreen} from './app/GalleryViewTargetScreen';
import {ColorTestScreen} from './app/ColorTestScreen';
import {ImageTestScreen} from './app/ImageTestScreen';
import {BorderColorTestScreen} from './app/BorderColorTestScreen';
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
            name="ImageTestScreen"
            component={ImageTestScreen}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="HeroAnimSourceScreen"
            component={HeroAnimSourceScreen}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="GalleryViewSourceScreen"
            component={GalleryViewSourceScreen}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="GalleryViewTargetScreen"
            component={GalleryViewTargetScreen}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="ColorTestScreen"
            component={ColorTestScreen}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="BorderColorTestScreen"
            component={BorderColorTestScreen}
          />
          <MainStack.Screen
            options={({navigation, route}) => {
              const {animationType} = route.params ?? {
                animationType: 'default',
              };
              return {
                headerShown: false,
                // animation: 'default',
                // animationDuration: 3000,
                transitionSpec: {
                  open: {
                    animation: 'timing',
                    config: {
                      duration: 1500, // Duration for the open transition
                    },
                  },
                  close: {
                    animation: 'timing',
                    config: {
                      duration: 1500, // Duration for the close transition
                    },
                  },
                },
                cardStyleInterpolator: props =>
                  forCustomTransition({
                    animationType,
                    current: props.current,
                    layouts: props.layouts,
                    next: props.next,
                  }),
              };
            }}
            name="HeroAnimTargetScreen"
            component={HeroAnimTargetScreen}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const forCustomTransition = ({animationType, current, next, layouts}) => {
  const progress = Animated.add(current.progress, next ? next.progress : 0);
  const animationObject: any[] = [];
  if (animationType === 'scale') {
    animationObject.push({
      scale: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    });
  }
  if (animationType === 'custom') {
    animationObject.push({
      scale: progress.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0.6, 1],
        extrapolate: 'clamp',
      }),
    });
  }
  if (animationType === 'slide' || animationType === 'custom') {
    animationObject.push({
      translateX: progress.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [layouts.screen.width, 0, -layouts.screen.width],
      }),
    });
  }
  return {
    cardStyle: {
      transform: animationObject,
      opacity:
        animationType === 'fade'
          ? progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, 1, 0],
            })
          : 1,
    },
  };
};

export default App;
