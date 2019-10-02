import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const Input = ({ name, label, value, onChange }) => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoFocus={true}
        value={value}
        onChangeText={value => onChange(name, value)}
        style={focus ? styles.focusInput : styles.input}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={name === 'password'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  label: {
    fontSize: 14,
    color: '#a2a2a2'
  },
  input: {
    height: 50,
    justifyContent: 'center',
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray0
  },
  focusInput: {
    height: 50,
    justifyContent: 'center',
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: Colors.tint
  }
});

export default Input;
