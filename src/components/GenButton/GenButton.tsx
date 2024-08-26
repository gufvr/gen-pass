import React, { useState } from 'react';
import { Button, Text, Pressable, View } from 'react-native';

import { styles } from './GenButtonStyles';
import { LockTextInput } from '../LockTextInput/LockTextInput';

export function GenButton() {
  const [password, setPassword] = useState('');

  function handleGenerateButton() {
    setPassword('PASSOU');
  }

  return (
    <>
      <LockTextInput password={password} />

      <Pressable style={styles.generateButton} onPress={handleGenerateButton}>
        <Text style={styles.text}>Generate</Text>
      </Pressable>

      <Pressable
        style={styles.copyButton}
        onPress={() => {
          console.log('Foi pressionado');
        }}
      >
        <Text style={styles.text}>📄 Copy</Text>
      </Pressable>
    </>
  );
}
