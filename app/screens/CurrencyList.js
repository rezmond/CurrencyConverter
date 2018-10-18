/* author: makarov */

import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles';

export default function CurrencyList({ date, rate }) {
  return (
    <Text style={styles.currencylist}>
      {rate}
      {date.toLocaleDateString()}
    </Text>
  );
}

CurrencyList.propTypes = {
  date: PropTypes.object.isRequired,
  rate: PropTypes.string.isRequired,
};
