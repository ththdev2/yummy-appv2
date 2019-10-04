import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { KeyboardAccessoryView } from "react-native-keyboard-accessory";
import { inject, observer } from "mobx-react";
import Colors from "../../../constants/Colors";

@inject("register")
@observer
export default class InputAccessory extends Component {
  render() {
    const { onSubmit } = this.props.register;
    return (
      <KeyboardAccessoryView
        hideBorder={true}
        bumperHeight={0}
        style={{ marginBottom: -10 }}
      >
        <TouchableOpacity onPress={onSubmit}>
          <View style={styles.container}>
            <Text style={styles.text}>Done</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAccessoryView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.tint
  },
  text: {
    fontSize: 18,
    color: "white"
  }
});
