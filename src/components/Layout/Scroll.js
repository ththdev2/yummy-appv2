import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';

export default class Scroll extends Component {
  render() {
    const { children, header } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {header}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInset={{ bottom: 100 }}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
