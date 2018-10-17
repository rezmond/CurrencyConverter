/* author: makarov */
import React from 'react';

import {
  View,
  ImageBackground,
  Text,
} from 'react-native';

import styles from './styles';

export default function Logo() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={require('./images/background.png')}
        style={styles.containerImage}
      >
        <ImageBackground
          resizeMode="contain"
          source={require('./images/logo.png')}
          style={styles.image}
        />
      </ImageBackground>
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
}
