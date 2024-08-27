import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LockLogoStyles';
import lockLogo from '../../../assets/lock-logo.png';

export function LockLogo() {
  return (
    <>
      <Text style={styles.title}>Gen Pass</Text>
      <Image source={lockLogo} style={{ resizeMode: 'contain', height: 180 }} />
    </>
  );
}
