import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import styles from './styles';

export default function Container({ children }) {
  return (
    <View style={styles.container}>
      { children }
    </View>
  );
}

Container.propTypes = {
  children: PropTypes.any,
};
