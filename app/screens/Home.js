import React from 'react';

import { View, Text, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';


export default function () {
  return (
    <Container>
      <StatusBar translucent={false} barStyle="default" />
      <Logo />
    </Container>
  );
}
