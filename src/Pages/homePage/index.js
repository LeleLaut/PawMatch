import * as React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

function AppTest() {
  <ScrollView>
      <Text> PawMatch </Text>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>Press me</Button>
  </ScrollView>
}

export default AppTest; 