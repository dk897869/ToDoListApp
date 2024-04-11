import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const GestureHandlerExample = () => {
  const handleGestureEvent = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      // Handle tap gesture
      console.log('Tap gesture detected!');
    }
  };

  return (
    <View style={styles.container}>
      <TapGestureHandler onHandlerStateChange={handleGestureEvent}>
        <View style={styles.box}>
          <Text style={styles.text}>Tap Me</Text>
        </View>
      </TapGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GestureHandlerExample;
