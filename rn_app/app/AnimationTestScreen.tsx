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

export const AnimationTestScreen = () => {
  const animVal = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animVal.value, {duration: 2000}),
      transform: [
        {rotate: `${animVal.value * 360}deg`},
        {
          scale: withSequence(
            withTiming(animVal.value * 2, {
              duration: 1000,
              easing: Easing.ease,
            }),
            withDelay(1000, withTiming(animVal.value * 0.7, {duration: 1000})),
          ),
        },
        {translateY: withTiming(animVal.value * -100, {duration: 1000})},
      ],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Animated.Text className="text-black" style={animatedStyle}>
          Lorem Ipsum text hello its me
        </Animated.Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={animVal.value}
        onValueChange={newVal => (animVal.value = newVal)}
      />
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
