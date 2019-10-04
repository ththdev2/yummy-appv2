import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  DatePickerIOS
} from 'react-native';
import { inject, observer } from 'mobx-react';
import Colors from '../../constants/Colors';

@inject('register')
@observer
export default class DatePicker extends Component {
  render() {
    const { navigation } = this.props;
    const { birth, onSubmit, onChange } = this.props.register;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.button} onPress={onSubmit}>
          <Text style={{ fontSize: 18, color: 'white' }}>Done</Text>
        </TouchableWithoutFeedback>
        <DatePickerIOS
          date={birth}
          onDateChange={value => onChange('birth', value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tint
  }
});
