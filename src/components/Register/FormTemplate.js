import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { inject, observer } from 'mobx-react';
import textStyles from '../../constants/TextStyles';
import Form from './Form';

const messages = [
  "What's your name?",
  "What's date of birth",
  'Please enter your email',
  'Please enter password'
];

@inject('register')
@observer
export default class FormTemplate extends Component {
  render() {
    const { register } = this.props;
    const { step } = register;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.message}>
          <Text style={textStyles.compact}>{messages[step]}</Text>
        </View>
        <Form />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  message: {
    marginBottom: 30
  }
});
