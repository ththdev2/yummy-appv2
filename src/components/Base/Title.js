import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';

export default class Title extends Component {
  render() {
    const { children } = this.props;
    return <Text style={styles.title}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black'
  }
});
