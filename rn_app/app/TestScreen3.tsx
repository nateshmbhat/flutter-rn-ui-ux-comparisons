import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {images} from './HomeScreen';

export const HeroAnimTargetScreen = ({navigation}) => {
  const {width} = useWindowDimensions();

  return (
    <View className="flex-1 " style={{backgroundColor: 'rgb(176, 190, 197)'}}>
      <ScrollView>
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

        <Pressable
          onPress={() =>
            navigation.push('HeroAnimSourceScreen', {
              animationType: 'slide_from_right',
            })
          }
          className="mt-4 bg-blue-500 px-4 py-2 rounded mb-5">
          <Text className="text-white">
            Push Screen 2 (Ignores animation options)
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
