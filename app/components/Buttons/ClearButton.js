/* author: makarov */
import React from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

import styles from './styles';

export default function ClearButton({ onPress, children: text }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require('./images/icon.png')}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

ClearButton.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};
