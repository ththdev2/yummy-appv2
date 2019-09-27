import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Item from './Item';
import Empty from '../../components/Fridge/Empty';

export default class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Empty />
        {/* <Item name="Brocolli" category="Vegetables" date="Today" />
        <Item name="Onion" category="Vegetables" date="Yesterday" />
        <Item name="Chicken Brest" category="Meats" date="2 Days" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
