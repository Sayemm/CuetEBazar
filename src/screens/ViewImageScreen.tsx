import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Colors from '../config/Colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets//chair.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    position: 'absolute',
    top: 10,
    left: 30,
  },
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.secondary,
    position: 'absolute',
    top: 10,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
