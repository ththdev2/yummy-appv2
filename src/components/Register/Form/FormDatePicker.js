import React, { Component } from 'react';
import { Text, StyleSheet, View, DatePickerIOS, Modal } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('register')
@observer
export default class FormDatePicker extends Component {
  render() {
    const { visible, register } = this.props;
    const { values, onChange } = register;
    return (
      <Modal visible={visible} transparent={true} animationType="slide">
        <View style={styles.overlay}>
          <DatePickerIOS
            date={register.values.birth}
            onDateChange={date => onChange('birth', date)}
            // mode={'date'}
            // locale={'ko'}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});
