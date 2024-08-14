import React, {useRef} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

const ConfettiDemo = () => {
  const confettiRef = useRef(null);

  const triggerConfetti = () => {
    if (confettiRef.current) {
      confettiRef.current.start();
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Celebrate!" onPress={triggerConfetti} />
      <ConfettiCannon
        ref={confettiRef}
        count={800}
        origin={{x: -10, y: 0}}
        autoStart={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConfettiDemo;
