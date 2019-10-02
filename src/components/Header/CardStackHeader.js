import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class CardStackHeader extends Component {
  render() {
    const { reverse, children, left, right, bottom } = this.props;
    return (
      <View style={styles.container}>
        <View style={reverse ? styles.reverse : styles.header}>
          <View>{left}</View>
          <View>{right}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 44
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  reverse: {
    height: 60,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  }
});
