/* author: makarov */

import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles';

export default function LastConverted({
  base,
  date,
  quote,
  rate,
}) {
  return (
    <Text style={styles.smallText}>
      1 {base} = {rate} {quote} as of {date.toLocaleDateString('ru-RU', {
        month: 'short',
        year: 'numeric',
        day: 'numeric',
      })}
    </Text>
  );
}

LastConverted.propTypes = {
  date: PropTypes.object.isRequired,
  rate: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
