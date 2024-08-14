import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DayWithSadhguruCard} from './components/SunAnimation';

export const AnimationTestScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <DayWithSadhguruCard />
      </View>
      {/* <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={animVal.value}
        onValueChange={newVal => (animVal.value = newVal)}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '80%',
  },
});
