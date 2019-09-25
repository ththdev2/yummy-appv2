import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import ModalHeader from '../../components/Header/ModalHeader';
import Title from '../../components/Base/Title';

export default class Fridge extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <ModalHeader navigation={navigation} />
        <View style={styles.container}>
          <Title>Fridge</Title>
        </View>
      </SafeAreaView>
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
