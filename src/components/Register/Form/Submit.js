import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { inject, observer } from 'mobx-react';
import Colors from '../../../constants/Colors';

@inject('register')
@observer
export default class Submit extends Component {
  render() {
    const { onSubmit, canSubmit } = this.props.register;
    return (
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View style={[styles.container, { opacity: canSubmit ? 1 : 0.6 }]}>
          <Text style={styles.text}>Done</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tint
  },
  text: {
    fontSize: 18,
    color: 'white'
  }
});
