import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Modal,
  DatePickerIOS
} from 'react-native';
import Colors from '../../../constants/Colors';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';
import FormDatePicker from './FormDatePicker';

@inject('register')
@observer
export default class FormDateInput extends Component {
  @observable focus = false;
  @observable modalVisible = false;

  @action.bound
  onFocus() {
    this.focus = true;
    this.modalVisible = true;
    console.log(this.modalVisible);
  }

  @action.bound
  onBlur() {
    this.focus = false;
    this.modalVisible = false;
  }

  render() {
    const { register, label, name } = this.props;
    const { values, onDateChange } = register;

    const date = values.birth;
    const year = date ? date.getFullYear() : '';
    const month = date ? `${date.getMonth() + 1}`.padStart(2, '0') : '';
    const day = date ? `${date.getDate()}`.padStart(2, '0') : '';

    return (
      <View style={styles.container}>
        <Text>{label}</Text>
        <TextInput
          value={date ? `${year}.${month}.${day}` : ''}
          style={styles.input}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <FormDatePicker visible={this.modalVisible} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  input: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray0,
    fontSize: 18
  }
});
