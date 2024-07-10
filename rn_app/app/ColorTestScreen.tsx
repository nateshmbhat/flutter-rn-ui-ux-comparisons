import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {images} from './HomeScreen';
import Animated from 'react-native-reanimated';

export const ColorTestScreen = () => {
  const route = useRoute();
  return (
    <SafeAreaView className=" flex-1">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: 'rgba(255, 245, 157, 1)',
        }}
        bounces={true}>
        <View className="flex-1 justify-center items-center">
          <View className="bg-black h-40 w-40" />
          <View className="bg-white h-40 w-40" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
