import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const AutoSizeTextScreen = () => {
  const [containerHeight, setContainerHeight] = useState(100);

  return (
    <View style={styles.container}>
      <View style={[styles.box, {height: containerHeight}]}>
        <Text
          numberOfLines={25}
          adjustsFontSizeToFit
          style={[
            styles.text,
            // below solution is not working
            //   {fontSize: RFValue(20, containerHeight) }
          ]}>
          This is an auto sizable text. Resize the container to see the effect.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nec ligula nec nunc lacinia ultrices. Donec et metus auctor, fermentum
          purus sit amet, lacinia felis. Donec ut semper purus. Nullam nec orci
          nec justo fermentum facilisis. Donec in libero nec libero ultricies
          fermentum. Nulla facilisi. Integer auctor, mi nec tincidunt auctor,
          eros purus ultricies nunc, at ultricies lacus nunc nec purus. Sed nec
          lacinia nunc. Nulla facilisi. Donec nec nunc nec nunc lacinia
          ultrices. Donec nec nunc nec nunc lacinia ultrices.
        </Text>
      </View>
      <Text style={styles.label}>Adjust Container Height:</Text>
      <Slider
        style={styles.slider}
        value={containerHeight}
        minimumValue={50}
        maximumValue={500}
        step={10}
        onValueChange={value => setContainerHeight(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  box: {
    width: '100%',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
