import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { inject, observer } from 'mobx-react';
import Colors from '../../../../constants/Colors';

@inject('register')
@observer
export default class Email extends Component {
  constructor() {
    super();
    this.state = { focus: false };
  }
  render() {
    const { email, onChange } = this.props.register;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChange={newValue => onChange('email', newValue)}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
          style={this.state.focus ? styles.focus : styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20
  },
  label: {
    fontSize: 14
  },
  focus: {
    height: 50,
    justifyContent: 'center',
    borderBottomColor: Colors.tint,
    borderBottomWidth: 2,
    fontSize: 18
  },
  input: {
    height: 50,
    justifyContent: 'center',
    borderBottomColor: Colors.gray0,
    borderBottomWidth: 2,
    fontSize: 18
  }
});
