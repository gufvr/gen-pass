import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './HomeStyles';
import { LockLogo } from '../../components/LockLogo/LockLogo';

export function Home() {
  return (
    <View style={styles.container}>
      <View>
        <LockLogo />
      </View>

      <Text>Hello World!</Text>
    </View>
  );
}
