import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { observer, inject } from 'mobx-react';
import Colors from '../../constants/Colors';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { TouchableOpacity } from 'react-native-gesture-handler';

@inject('register')
@observer
export default class SubmitButton extends Component {
  render() {
    const { register } = this.props;
    const { onSubmit } = register;
    return (
      <KeyboardAccessoryView>
        <TouchableOpacity
          style={styles.button}
          onPress={onSubmit}
          disabled={false}
        >
          <Text style={{ fontSize: 18, color: 'white' }}>Confirm</Text>
        </TouchableOpacity>
      </KeyboardAccessoryView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.tint,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
