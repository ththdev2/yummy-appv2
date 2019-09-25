import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CloseButton extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.goBack()}
      >
        <Icon name="ios-close" size={30} color="#828286" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#EBEDF0',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
