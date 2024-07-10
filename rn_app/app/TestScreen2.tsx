import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import {images} from './HomeScreen';

export const HeroAnimSourceScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-white text-3xl">
      <Text className="text-3xl mb-4 text-black">Screen 2</Text>
      <View className="items-center">
        <Animated.Image
          source={{uri: images[0]}}
          className="w-64 h-64"
          // sharedTransitionTag="my-image"
        />
        <Pressable
          onPress={() =>
            navigation.navigate('HeroAnimTargetScreen', {
              animationType: 'scale',
            })
          }
          className="mt-4 bg-blue-500 px-4 py-2 rounded">
          <Text className="text-white">Open Screen (Scale Animation)</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('HeroAnimTargetScreen', {
              animationType: 'fade',
            })
          }
          className="mt-4 bg-blue-500 px-4 py-2 rounded">
          <Text className="text-white">Open Screen (Fade Animation)</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('HeroAnimTargetScreen', {
              animationType: 'custom',
            })
          }
          className="mt-4 bg-blue-500 px-4 py-2 rounded">
          <Text className="text-white">Open Screen (Custom Animation)</Text>
        </Pressable>
      </View>
    </View>
  );
};
