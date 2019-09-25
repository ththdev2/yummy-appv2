import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, View, StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'mobx-react';
import UserStore from './src/store/UserStore';
import Loading from './src/components/Base/Loading';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'SFProDisplay-Bold': require('./src/fonts/SF-Pro-Display-Bold.otf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Provider userStore={UserStore}>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          {this.state.fontLoaded ? <AppNavigator /> : <Loading />}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
