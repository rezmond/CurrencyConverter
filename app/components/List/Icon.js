/* author: makarov */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
} from 'react-native';

import styles from './styles';

export default function Icon({
  checkmark,
  visible,
}) {
  const iconStyles = [styles.icon];

  if (visible) {
    iconStyles.push(styles.iconVisible);
  }

  return (
    <View style={iconStyles}>
      {
        checkmark && (
          <Image
            style={styles.checkIcon}
            resizeMode="contain"
            source={require('./images/check.png')}
          />
        )
      }
    </View>
  );
}

Icon.propTypes = {
  checkmark: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
};
