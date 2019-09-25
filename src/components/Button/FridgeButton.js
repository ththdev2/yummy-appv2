import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class FridgeButton extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Fridge')}
      >
        <Icon name="ios-cube" size={24} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: '#EBEDF0',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
