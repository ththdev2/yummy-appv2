import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class CloseButton extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="ios-close" size={32} color="#828286" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    backgroundColor: "#f6f6f6",
    justifyContent: "center",
    alignItems: "center"
  }
});
