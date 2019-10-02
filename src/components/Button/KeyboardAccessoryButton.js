import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { inject, observer } from 'mobx-react';

const KeyboardAccessoryButton = ({ step, increaseStep }) => {
  return (
    <KeyboardAccessoryView alwaysVisible={true}>
      <TouchableOpacity
        style={styles.container}
        onPress={increaseStep}
        disabled={false}
      >
        <Text style={{ fontSize: 18, color: 'white' }}>Step to {step + 1}</Text>
      </TouchableOpacity>
    </KeyboardAccessoryView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.tint,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.tint,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6
  }
});

export default inject(({ register }) => ({
  step: register.step,
  increaseStep: register.increaseStep
}))(observer(KeyboardAccessoryButton));
