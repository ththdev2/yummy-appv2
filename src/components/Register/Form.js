import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import Input from './Input';
import DatePicker from './DatePicker';

const inputs = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'birth', label: 'Date of birth', type: 'date' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' }
];

@inject('register')
@observer
export default class Form extends Component {
  render() {
    const { register } = this.props;
    const { step, onChange } = register;

    const inputList = inputs.map((input, index) => {
      if (index <= step) {
        return (
          <Input
            key={input.name}
            name={input.name}
            value={register[input.name]}
            label={input.label}
            type={input.type}
            onChange={onChange}
          />
        );
      }
    });
    return <View style={styles.reverse}>{inputList}</View>;
  }
}

const styles = StyleSheet.create({
  reverse: {
    flexDirection: 'column-reverse'
  }
});
