import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import Colors from '../../../constants/Colors';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

@inject('register')
@observer
export default class FormTextInput extends Component {
  @observable focus = false;

  render() {
    const { register, name, label, type, secure } = this.props;
    const { values, onChange } = register;
    return (
      <View style={styles.container}>
        <Text>{label}</Text>
        <TextInput
          value={values[name]}
          onChangeText={value => onChange(name, value)}
          keyboardType={type}
          secureTextEntry={secure ? true : false}
          onFocus={() => (this.focus = true)}
          onBlur={() => (this.focus = false)}
          style={this.focus ? styles.focus : styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  focus: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.tint,
    fontSize: 18
  },
  input: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray0,
    fontSize: 18
  }
});
