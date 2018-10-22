/* author: makarov */
import React from 'react';

import {
  Animated,
  View,
  ImageBackground,
  Text,
  Keyboard,
  Platform,
} from 'react-native';

import styles from './styles';

const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

const ANIMATION_DURATION = 250;

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.containerImageWith = new Animated.Value(styles.$largeContainerSize);
    this.imageWith = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    const showEventName = (Platform.OS === 'android') ? 'keyboardDidShow' : 'keyboardWillShow';
    const hidEventName = (Platform.OS === 'android') ? 'keyboardDidHide' : 'keyboardWillHide';
    this.keyboardShowListener = Keyboard.addListener(showEventName, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hidEventName, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWith, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWith, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWith, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWith, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      {
        width: this.containerImageWith,
        height: this.containerImageWith,
      },
    ];

    const imageStyle = [
      styles.image,
      {
        width: this.imageWith,
        height: this.imageWith,
      },
    ];

    return (
      <View style={styles.container}>
        <AnimatedImage
          resizeMode="contain"
          source={require('./images/background.png')}
          style={containerImageStyle}
        >
          <AnimatedImage
            resizeMode="contain"
            source={require('./images/logo.png')}
            style={imageStyle}
          />
        </AnimatedImage>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}
