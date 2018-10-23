/* author: makarov */

import EStyleSheet from 'react-native-extended-stylesheet';

import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  header: {
    '@media ios': {
      paddingTop: 20,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
});
