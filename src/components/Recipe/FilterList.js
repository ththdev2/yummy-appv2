import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Filter, Category } from './Filter';

export default class FilterList extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentInset={{ right: 20 }}
        style={{ paddingHorizontal: 20 }}
      >
        <View style={styles.container}>
          <Filter />
          <Category />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20
  }
});
