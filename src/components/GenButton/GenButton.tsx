import React from 'react';
import { Button, View } from 'react-native';

import { styles } from './GenButtonStyles';

export function GenButton() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log('Hello');
        }}
        accessibilityLabel="click on me"
        title="CLICK HERE"
      />
    </View>
  );
}
