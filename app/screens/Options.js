/* author: makarov */

import React from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import {
  ListItem,
  Separator,
} from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

export default class Options extends React.Component {
  handleThemesPress = () => {
    console.log("handleThemesPress:");
  };

  handleSitePress = () => {
    console.log("handleSitePress:");
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          customIcon={(
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          )}
          onPress={this.handleThemesPress}
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          customIcon={(
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          )}
          onPress={this.handleSitePress}
        />
        <Separator />
      </ScrollView>
    );
  }
}
