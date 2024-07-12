/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback} from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
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
import {SafeAreaView} from 'react-native-safe-area-context';

export const SafeAreaTestScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="bg-blue-800 h-20 justify-center flex-row items-center">
        <Text> Header </Text>
      </View>
    </SafeAreaView>
  );
};
