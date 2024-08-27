import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './GenButtonStyles';
import { LockTextInput } from '../LockTextInput/LockTextInput';
import generatePassword from '../../services/passwordService';

export function GenButton() {
  const [password, setPassword] = useState('');

  function handleGenerateButton() {
    let generateToken = generatePassword();
    setPassword(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(password);
  }

  return (
    <>
      <LockTextInput password={password} />

      <Pressable style={styles.generateButton} onPress={handleGenerateButton}>
        <Text style={styles.text}>Generate</Text>
      </Pressable>

      <Pressable style={styles.copyButton}>
        <Text style={styles.text} onPress={handleCopyButton}>
          📄 Copy
        </Text>
      </Pressable>
    </>
  );
}
