// src/components/Hello.tsx
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { noop } from '../utils/misc';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>Hello {name + getExclamationMarks(enthusiasmLevel)}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="-" onPress={onDecrement || noop} color="red" />
        </View>
        <View style={styles.button}>
          <Button title="+" onPress={onIncrement || noop} color="blue" />
        </View>
      </View>
    </View>
  );
}

export default Hello;

// styles
const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  buttons: {
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
    flexDirection: 'row',
    minHeight: 70,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
