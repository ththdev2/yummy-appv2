import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default class CartContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
