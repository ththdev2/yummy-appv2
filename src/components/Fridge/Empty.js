import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import textStyles from '../../constants/TextStyles';

export default class Empty extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={textStyles.medium}>Nothing Here 🙈</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
