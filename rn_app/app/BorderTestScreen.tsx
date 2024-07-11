/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useRef} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  useDerivedValue,
  runOnJS,
} from 'react-native-reanimated';
import Slider from '@react-native-community/slider';

export const BorderTestScreen = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [useCustomBorder, setUseCustomBorder] = useState(false);
  const [customBorderWidth, setCustomBorderWidth] = useState(1.0);
  const maxBorderWidth = 3;
  const borderWidth = useSharedValue(maxBorderWidth);
  const displayedBorderWidth = useSharedValue(maxBorderWidth);

  const startAnimation = useCallback(() => {
    borderWidth.value = withRepeat(
      withTiming(0.05, {duration: 2000, easing: Easing.inOut(Easing.ease)}),
      -1,
      true,
    );
  }, []);

  const stopAnimation = useCallback(() => {
    borderWidth.value = useCustomBorder ? customBorderWidth : maxBorderWidth;
  }, [useCustomBorder, customBorderWidth]);

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev);
    setUseCustomBorder(false);
    if (!isAnimating) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [isAnimating, startAnimation, stopAnimation]);

  const handleSliderChange = useCallback(value => {
    setCustomBorderWidth(value);
    setUseCustomBorder(true);
    setIsAnimating(false);
    borderWidth.value = value;
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderWidth: borderWidth.value,
    };
  });

  useDerivedValue(() => {
    displayedBorderWidth.value = borderWidth.value;
    runOnJS(setCustomBorderWidth)(borderWidth.value);
  });

  return (
    <View className="bg-white flex-1 justify-center items-center">
      <View className="flex-1 justify-center">
        <Animated.View
          className="h-[200px] w-[200px] p-5"
          style={[{borderColor: 'black'}, animatedStyle]}>
          <Animated.View
            className="h-[100px] w-[100px]"
            style={[{borderColor: 'black'}, animatedStyle]}>
            <Text className="text-black p-0">MY Text</Text>
          </Animated.View>
        </Animated.View>
      </View>

      <Text className="mt-5 text-lg text-black">
        Current Border Width: {customBorderWidth.toFixed(2)}
      </Text>

      <TouchableOpacity
        className="mt-5 bg-blue-500 px-4 py-2 rounded"
        onPress={toggleAnimation}>
        <Text className="text-white">
          {isAnimating ? 'Stop Animation' : 'Start Animation'}
        </Text>
      </TouchableOpacity>

      <View className="w-3/4 mt-5 mb-5">
        <Slider
          value={customBorderWidth}
          onValueChange={handleSliderChange}
          minimumValue={0.05}
          maximumValue={maxBorderWidth}
          step={0.05}
        />
      </View>
    </View>
  );
};
