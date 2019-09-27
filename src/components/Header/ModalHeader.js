import React, { Component } from 'react';
import { Text, StyleSheet, View, Platform } from 'react-native';
import CloseButton from '../Button/CloseButton';

export default class ModalHeader extends Component {
  render() {
    const { navigation, title } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <CloseButton navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 72,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
