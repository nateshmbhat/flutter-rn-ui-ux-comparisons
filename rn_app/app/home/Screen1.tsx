import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import {interpolateColor} from 'react-native-reanimated';

export const TestScreen2 = () => {
  const [customColorVal, setCustomColorVal] = useState(0.5);

  console.log('value', customColorVal);
  const setCustomGradientStopValue = value => {
    setCustomColorVal(Number(value.toFixed(2)));
  };

  const displayedColor = interpolateColor(
    customColorVal,
    [0, 1],
    ['rgb(255,0,0)', 'rgb(0,0,255)'],
    'RGB',
    {
      gamma: 1,
    },
  );
  return (
    <View className="p-5 flex-1 justify-center">
      <View className="self-center">
        <View
          className="h-[200px] w-[300px]"
          style={{
            backgroundColor: displayedColor,
          }}
        />
        <Text className="text-black mb-5 self-center">
          Color: {displayedColor}
        </Text>

        <Text className="text-black self-center">
          Slider : {customColorVal.toFixed(2)}
        </Text>
      </View>
      <Slider
        className="w-[200px] h-10"
        value={customColorVal}
        onValueChange={setCustomGradientStopValue}
        minimumValue={0}
        maximumValue={1}
        step={0.01}
      />
    </View>
  );
};
