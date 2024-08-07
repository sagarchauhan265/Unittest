import {View, Text, Button, TextInput} from 'react-native';
import React from 'react';

export default function Example2() {


    
  return (
    <View testID="main">
      <Text>Example2</Text>
      <TextInput testID="firstInput" placeholder="sceond" />
      <Button
        title="touch"
        testID="buttonfirst"
        onPress={() => alert('great Gob')}
      />
    </View>
  );
}

export function Sum(a: number, b: number) {
  return a + b;
}
