import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { inject, observer } from 'mobx-react';
import Colors from '../../../../constants/Colors';
import DatePicker from '../Picker/DatePicker';

@inject('register')
@observer
export default class Birth extends Component {
  constructor() {
    super();
    this.state = { focus: false, modalVisible: false };
  }
  render() {
    const { navigation } = this.props;
    const { birth } = this.props.register;

    const date = birth;
    const year = date ? date.getFullYear() : '';
    const month = date ? `${date.getMonth() + 1}`.padStart(2, '0') : '';
    const day = date ? `${date.getDate()}`.padStart(2, '0') : '';
    const dateStr = date ? `${year}.${month}.${day}` : '';

    onClose = () => {
      this.setState({ modalVisible: false });
    };

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Date of birth</Text>
        <TouchableWithoutFeedback
          style={this.state.focus ? styles.focus : styles.input}
          onPress={() => this.setState({ modalVisible: true })}
        >
          <Text style={styles.text}>{dateStr}</Text>
        </TouchableWithoutFeedback>
        <DatePicker visible={this.state.modalVisible} parent={this} />
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
    borderBottomWidth: 2
  },
  input: {
    height: 50,
    justifyContent: 'center',
    borderBottomColor: Colors.gray0,
    borderBottomWidth: 2
  },
  text: {
    fontSize: 18
  }
});
