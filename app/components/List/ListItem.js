/* author: makarov */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './styles';
import Icon from './Icon';

export default function ListItem({
  text,
  selected,
  checkmark = true,
  visible = true,
  onPress,
}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={styles.$underlayColor}
    >
      <View style={styles.row}>
        <Text style={styles.text}>
          {text}
        </Text>
        {
          selected && (
            <Icon
              checkmark={checkmark}
              visible={visible}
            />
          )
        }
      </View>
    </TouchableHighlight>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  checkmark: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};
