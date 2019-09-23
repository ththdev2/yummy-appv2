import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class FridgeBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Fridge</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  }
});
