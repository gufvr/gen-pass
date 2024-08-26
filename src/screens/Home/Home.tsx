import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './HomeStyles';

import { LockLogo } from '../../components/LockLogo/LockLogo';
import { LockTextInput } from '../../components/LockTextInput/LockTextInput';
import { GenButton } from '../../components/GenButton/GenButton';

export function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <LockLogo />
      </View>

      <View style={styles.inputContainer}>
        <LockTextInput />
        <GenButton />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
