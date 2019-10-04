import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  DatePickerIOS,
  TouchableOpacity
} from 'react-native';
import { inject, observer } from 'mobx-react';
import Modal from 'react-native-modal';
import Colors from '../../../../constants/Colors';

@inject('register')
@observer
export default class DatePicker extends Component {
  onClose = parent => {
    parent.setState({ modalVisible: false });
  };

  render() {
    const { visible, parent } = this.props;
    const { birth, onChange } = this.props.register;
    return (
      <Modal
        isVisible={visible}
        style={styles.modal}
        onBackdropPress={() => this.onClose(parent)}
      >
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.onClose(parent)}
            style={styles.button}
          >
            <Text style={{ fontSize: 18, color: 'white' }}>Done</Text>
          </TouchableOpacity>
          <DatePickerIOS
            date={birth}
            onDateChange={value => onChange('birth', value)}
            mode="date"
            locale="ko"
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: '100%',
    margin: 0,
    justifyContent: 'flex-end'
  },
  container: {
    width: '100%',
    backgroundColor: 'white'
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tint
  }
});
