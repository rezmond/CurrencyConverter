/* author: makarov */

import React from 'react';
import {
  FlatList,
  View,
  StatusBar,
} from 'react-native';

import styles from './styles';
import currencies from '../data/currencies';
import {
  ListItem,
  Separator,
} from '../components/List';

const TEMP_CURRENT_CURENCY = 'CAD';

export default class CurrencyList extends React.Component {
  handlePress = (...args) => {
    console.log("handlePress args:", args);
  };

  render() {
    return (
      <View style={[styles.header, { flex: 1 }]}>
        <StatusBar barStyle="default" translycent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}
