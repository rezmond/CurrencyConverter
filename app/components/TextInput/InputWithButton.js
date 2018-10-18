/* author: makarov */

import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import color from 'color';

import styles from './styles';

export default function InputWithButton(props) {
  const {
    editable,
    buttonText,
    onPress,
  } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBack)
    .darken(styles.$buttonBackgroundColorModifier);

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        style={styles.buttonContainer}
        underlayColor={underlayColor}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
}

InputWithButton.propTypes = {
  editable: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

InputWithButton.defaultProps = {
  editable: true,
  onPress: () => console.log(""),
};
