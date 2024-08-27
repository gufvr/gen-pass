import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './LockTextInputStyles';

interface LockTextInputProps {
  password: string;
}

export function LockTextInput(props: LockTextInputProps) {
  return (
    <TextInput
      placeholder="P@$sWø4d"
      value={props.password}
      placeholderTextColor={'#C0C0C0'}
      style={styles.inputLockContainer}
    />
  );
}
