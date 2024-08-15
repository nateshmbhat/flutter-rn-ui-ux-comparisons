import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Slider from '@react-native-community/slider';
import {images} from './HomeScreen';

export const ImageTestScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="items-center justify-center h-[500px] w-[300px] border-[10px]  bg-blue-700">
        <Image
          source={{uri: images[5]}} // Replace with your image URL
          style={{
            height: 300,
            width: 300,
            alignSelf: 'flex-start',
          }}
        />
      </View>
    </View>
  );
};
