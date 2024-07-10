import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

export const images = [
  'https://fastly.picsum.photos/id/1042/800/800.jpg?hmac=RonOubFjN6PIXWTbZaI2G4wDE06wkr51z2wNMUgtQyE',
  'https://fastly.picsum.photos/id/432/800/800.jpg?hmac=eVq-wYBeDA9tYMPX1TDyXi9jufIUf7C47-ZnAmkM8XI',
  'https://fastly.picsum.photos/id/999/800/800.jpg?hmac=rZrOJFKcyKk9VlHsLhCrsSUV-YR5kjmjpbJBXazcrw8',
  'https://fastly.picsum.photos/id/91/800/800.jpg?hmac=QRUzJX9f5neDgqHRRp2WIB7jIRLVL9gFDzJ993hBwHk',
  'https://fastly.picsum.photos/id/621/800/800.jpg?hmac=cYspKpRSOTahmXiG34Q60EaB4JSSCM52WZPcANmPS6c',
  'https://fastly.picsum.photos/id/20/800/800.jpg?hmac=sH0rrI15LYL1gL5Kk-CtGwe5SrAPimAS-ZQyFajNzVk',
  'https://fastly.picsum.photos/id/488/800/800.jpg?hmac=A3gNpfDk2IGU_P7XidrlB5EMoLHEgu2Kph1mEIZBibs',
  'https://fastly.picsum.photos/id/958/800/800.jpg?hmac=RmOB-ZsSX_fSj6pysuN8heR66NRTM6rNFrUWimQ-WH4',
  'https://fastly.picsum.photos/id/837/800/800.jpg?hmac=LEHBTELQ0B0JqpRAhEBlnhEabKZ81BsKY5yU6NoTJ1c',
];

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-stretch">
      <TouchableOpacity
        onPress={() => navigation.navigate('BorderTestScreen')}
        className="bg-blue-500 p-4 rounded mb-2">
        <Text className="text-white text-center">Open Border Test Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ImageTestScreen')}
        className="bg-blue-500 p-4 rounded mb-2">
        <Text className="text-white text-center">Open Image Test Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('BlurTestScreen')}
        className="bg-blue-500 p-4 rounded mb-2">
        <Text className="text-white text-center">Open Blur Test Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('HeroAnimSourceScreen')}
        className="bg-blue-500 p-4 rounded mb-2">
        <Text className="text-white text-center">
          Navigation & Hero animations test Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('GalleryViewSourceScreen')}
        className="bg-blue-500 p-4 rounded mb-2">
        <Text className="text-white text-center">
          Gallery View and Blur test Screen
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('ColorTestScreen')}
        className="bg-blue-500 p-4 rounded mb-2">
        <Text className="text-white text-center">Color Test Screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};
