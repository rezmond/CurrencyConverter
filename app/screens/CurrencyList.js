/* author: makarov */

import React from 'react';
import {
  Text,
  FlatList,
  View,
  StatusBar,
} from 'react-native';

import styles from './styles';
import currencies from '../data/currencies';

export default function CurrencyList() {
  return (
    <View style={[styles.header, { flex: 1 }]}>
      <StatusBar barStyle="default" translycent={false} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => <Text key={item}>{item}</Text>}
        keyExtractor={item => item}
      />
    </View>
  );
}