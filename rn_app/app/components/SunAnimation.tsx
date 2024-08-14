import React from 'react';
import {useEffect, useState, useRef} from 'react';
import {Text, View, Animated, Easing, StyleProp, ViewStyle} from 'react-native';

const sunImage = require('./img_sun.png');

export const DayWithSadhguruCard = ({
  containerStyle,
}: {
  containerStyle?: StyleProp<ViewStyle>;
}) => {
  const fadeValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the fade-in and scale-down animation
    Animated.parallel([
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 0.64,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Once fade-in and scale-down are complete, start the rotation animation
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 30000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    });
  }, [fadeValue, scaleValue, spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={containerStyle}>
      {/* Animated sun image */}
      <Animated.Image
        resizeMethod="resize"
        source={sunImage}
        style={{
          width: 300,
          height: 300,
          alignSelf: 'center',
          opacity: fadeValue,
          transform: [{scale: scaleValue}, {rotate: spin}],
        }}
      />
    </View>
  );
};
