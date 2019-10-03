import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { inject, observer } from 'mobx-react';
import { FormMessage, FormTextInput, FormDateInput, FormSubmit } from './Form';

const forms = [
  <FormTextInput
    key="name"
    name="name"
    label="Name"
    type="default"
    rules={value => value == ''}
  />,
  <FormDateInput
    key="birth"
    name="date"
    label="Birth of Date"
    rules={value => value == ''}
  />,
  <FormTextInput
    key="email"
    name="email"
    label="Email"
    type="email-address"
    rules={value => value == ''}
  />,
  <FormTextInput
    key="password"
    name="password"
    label="Password"
    type="default"
    secure={true}
    rules={value => value == ''}
  />
];

@inject('register')
@observer
export default class FormTemplate extends Component {
  render() {
    const { step } = this.props.register;
    const activeForms = forms.map((form, index) => {
      return index <= step ? form : null;
    });
    return (
      <ScrollView>
        <View style={styles.container}>
          <FormMessage />
          <View style={styles.reverse}>{activeForms}</View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  reverse: {
    flexDirection: 'column-reverse'
  }
});
