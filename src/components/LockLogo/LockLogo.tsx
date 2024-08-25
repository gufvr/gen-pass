import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LockLogoStyles';
import lockLogo from '../../../assets/lock-logo.png';

export function LockLogo() {
  return (
    <View>
      <Text style={styles.title}>Generate Password</Text>
      <Image source={lockLogo} style={{ resizeMode: 'contain', height: 180 }} />
    </View>
  );
}
