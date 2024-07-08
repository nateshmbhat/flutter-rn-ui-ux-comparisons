import React from 'react';
import {View, Text, Image, ScrollView, useWindowDimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {images} from './HomeScreen';

export const HeroAnimTargetScreen = () => {
  const {width} = useWindowDimensions();

  return (
    <View className="flex-1">
      <View className="items-center">
        <Animated.Image
          sharedTransitionTag="my-image"
          source={{uri: images[0]}}
          style={{width, height: width}}
        />

        <Text className="text-2xl p-4 text-black">
          Screen 3 contents lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
};
