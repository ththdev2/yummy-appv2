import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'mobx-react';
import RootStore from './src/stores';

const root = new RootStore();

export default class App extends Component {
  render() {
    return (
      <Provider {...root}>
        <AppNavigator />
      </Provider>
    );
  }
}
