import React from 'react';
import {Text, View} from 'react-native';

export const BorderColorTestScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View
        style={{
          width: 200,
          height: 200,
          borderWidth: 10,
          borderColor: 'red',
          borderBottomColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>My Text</Text>
      </View>
    </View>
  );
};
