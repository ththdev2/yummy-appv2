import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { inject, observer } from "mobx-react";
import Colors from "../../../constants/Colors";

@inject("register")
@observer
export default class Submit extends Component {
  render() {
    const { onSubmit, canSubmit } = this.props.register;
    return (
      <TouchableOpacity onPress={onSubmit}>
        <View style={[styles.container, { opacity: canSubmit ? 1 : 0.6 }]}>
          <Text style={styles.text}>Done</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.tint,
    borderRadius: 5
  },
  text: {
    fontSize: 18,
    color: "white"
  }
});
