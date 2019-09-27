import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
import textStyles from '../../constants/TextStyles';

export default class Summary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={textStyles.summaryLabel}>In Fridge</Text>
          <Text style={textStyles.title}>24</Text>
        </View>
        <View style={styles.right}>
          <Text style={textStyles.summaryLabel}>Available Recipes</Text>
          <Text style={textStyles.title}>3122</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  left: {
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: Colors.lightBorder
  },
  right: {
    marginLeft: 20,
    width: '50%'
  }
});
