import React from 'react';
import {ScrollView, Text, View} from 'react-native';

export const FedraFontTestScreen = () => {
  // https://jira.isha.in/browse/SGAPP-5182
  return (
    <ScrollView
      centerContent
      contentContainerStyle={{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 1,
            width: 300,
            height: 300,
          }}>
          <Text
            style={{
              fontFamily: 'FedraSerifAStdBook',
              fontSize: 20,
              lineHeight: 28,
              color: 'black',
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, totam libero. Architecto mollitia sint molestiae
            saepe, ut omnis corporis! Quisquam dolore unde incidunt aspernatur
            deleniti natus neque expedita eligendi a.
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: 300,
            height: 300,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontFamily: 'FedraSerifAStdMedium',
              fontSize: 20,
              lineHeight: 28,
              color: 'black',
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, totam libero. Architecto mollitia sint molestiae
            saepe, ut omnis corporis! Quisquam dolore unde incidunt aspernatur
            deleniti natus neque expedita eligendi a.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
