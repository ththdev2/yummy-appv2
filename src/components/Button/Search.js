import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/Feather';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="search" size={18} color="black" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray0
  }
});
