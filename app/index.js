import React from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';


EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkGray: '#343434',
});

export default () => <Options />;
