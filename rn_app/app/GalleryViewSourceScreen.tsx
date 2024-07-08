import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {images} from './HomeScreen';
import Animated from 'react-native-reanimated';

export const GalleryViewSourceScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('GalleryViewTargetScreen', {clickedImage: item})
      }
      className="flex-1">
      <Animated.Image
        sharedTransitionTag={item}
        source={{uri: item}}
        style={{width: '100%', aspectRatio: 1}}
        // PlaceholderContent={<ActivityIndicator />}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1">
      <View className="bg-white shadow-md p-4">
        <Text className="text-xl font-bold">Gallery Listing Screen</Text>
      </View>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item}
        numColumns={3}
        className="flex-1"
      />
    </SafeAreaView>
  );
};
