import React from 'react';

import { View, Text, StatusBar } from 'react-native';

import { Container } from '../components/Container';


export default function () {
  return (
    <Container>
      <StatusBar translucent={false} barStyle="default"/>
      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia repudiandae ipsa accusantium reiciendis, placeat vitae, officia natus a, quod corrupti fugit, itaque iure ad? Cupiditate, dolore nihil deserunt. Impedit, tenetur.
        </Text>
      </View>
    </Container>
  );
}
