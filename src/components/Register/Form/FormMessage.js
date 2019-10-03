import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { inject, observer } from 'mobx-react';

const messages = [
  "What's your name?",
  'What is your date of birth?',
  'Please enter your email',
  'please enter password',
  'Please register if the information is correct'
];

@inject('register')
@observer
export default class FormMessage extends Component {
  render() {
    const { step } = this.props.register;
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{messages[step]}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
