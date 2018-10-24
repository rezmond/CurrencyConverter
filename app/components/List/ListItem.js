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
  customIcon,
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
        {customIcon}
      </View>
    </TouchableHighlight>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  onPress: PropTypes.func.isRequired,
};
