import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './LockTextInputStyles';

export function LockTextInput() {
  return (
    <TextInput
      placeholder="Press"
      placeholderTextColor={'#C0C0C0'}
      style={styles.inputLockContainer}
    ></TextInput>
  );
}
