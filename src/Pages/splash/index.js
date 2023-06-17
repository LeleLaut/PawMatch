import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/image/pawmatch.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '40%',
    resizeMode: 'contain',
  },
});

export default Splash;