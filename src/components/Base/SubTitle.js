import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class SubTitle extends Component {
  render() {
    const { children } = this.props;
    return <Text style={styles.subTitle}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
