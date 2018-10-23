/* author: makarov */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './styles';

export default function ListItem({ text, selected, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.text}>
          {text}
        </Text>
        {
          selected && <Text>selected</Text>
        }
      </View>
    </TouchableHighlight>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};
