import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Slider from '@react-native-community/slider';
import {images} from './HomeScreen';

export const BlurTestScreen = () => {
  const [customBlurValue, setCustomBlurValue] = useState(0.0);

  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-1 justify-center items-center">
        <View className="relative">
          <View className="items-center">
            <Text className="text-2xl text-black mb-[30px]">Ratatoulie</Text>

            <View className="items-center justify-center">
              <Image
                source={{uri: images[2]}} // Replace with your image URL
                style={{height: 300, width: 300}}
                className="object-cover"
              />
              <View className="mx-5 my-5">
                <Text className="text-lg text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          blurType="light"
          blurAmount={0}
        />
      </View>

      <View className="my-5">
        <Text className="text-lg text-black">
          Current Blur Value: {customBlurValue.toFixed(2)}
        </Text>
      </View>
      <Slider
        value={customBlurValue}
        onValueChange={setCustomBlurValue}
        minimumValue={0}
        maximumValue={10}
        step={0.5}
        style={{width: 200}}
      />
      <View className="m-5" />
    </View>
  );
};
