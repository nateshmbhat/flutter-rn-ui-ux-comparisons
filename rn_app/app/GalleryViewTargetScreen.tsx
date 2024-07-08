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

export const GalleryViewTargetScreen = () => {
  const route = useRoute();
  const {clickedImage} = route.params;

  const renderGridItem = ({item}) => (
    <View className="flex-1">
      <Animated.Image
        sharedTransitionTag={item}
        source={{uri: item}}
        style={{width: '100%', height: 150}}
        // className="rounded-lg"
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        className="bg-white"
        bounces={true}>
        <View className="w-full h-96">
          <Animated.Image
            sharedTransitionTag={clickedImage}
            source={{uri: clickedImage}}
            style={{width: '100%', height: '100%'}}
            className="object-cover"
          />
        </View>
        <View className="flex-1">
          <FlatList
            data={images.filter(url => url !== clickedImage)}
            renderItem={renderGridItem}
            keyExtractor={item => item}
            numColumns={2}
            className="flex-1"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
