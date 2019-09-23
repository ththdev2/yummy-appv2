import React, { Component } from "react";
import * as Font from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      "SFProDisplay-Bold": require("./src/fonts/SF-Pro-Display-Bold.otf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <AppNavigator />
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
