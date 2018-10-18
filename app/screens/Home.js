import React from 'react';

import { View, Text, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';

const TEMP_BASE_TEXT = 'USD';
const TEMP_QUOTE_TEXT = 'PND';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = '0.7974';
const TEMP_CONVERSION_DATE = new Date();

export default class Home extends React.Component {
  handleTextChange = (text) => {
    console.log("text:", text);
  };

  handleSwapCurrency = () => {
    console.log('Press swap currencies');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_TEXT}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_TEXT}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
        <LastConverted
          base={TEMP_BASE_TEXT}
          quote={TEMP_QUOTE_TEXT}
          rate={TEMP_CONVERSION_RATE}
          date={TEMP_CONVERSION_DATE}
        />
        <ClearButton onPress={this.handleSwapCurrency}>
          Reverse Currencies
        </ClearButton>
      </Container>
    );
  }
}
