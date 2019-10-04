import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Message from './Message';
import FieldsController from './FieldsController';
import Submit from './Submit';

export default class Form extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Message />
          <FieldsController navigation={navigation} />
          <Submit />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
