import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import ModalHeader from '../../components/Header/ModalHeader';
import Scroll from '../../components/Layout/Scroll';
import Summary from '../../components/Fridge/Summary';
import List from '../../components/Fridge/List';

export default class Fridge extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Scroll header={<ModalHeader title="Fridge" navigation={navigation} />}>
        <StatusBar barStyle="light-content" />
        <Summary />
        <List />
      </Scroll>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20
  }
});
