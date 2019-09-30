import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Colors from "../../constants/Colors";

export default class TextInputField extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      focus: false
    };
  }
  render() {
    const { value, focus } = this.state;
    const { label } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          autoFocus={true}
          returnKeyType="next"
          onFocus={() => this.setState({ focus: true })}
          value={value}
          style={focus ? styles.focusedTextInput : styles.textInput}
          onChangeText={text => this.setState({ value: text })}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  label: {
    fontSize: 14
  },
  textInput: {
    height: 50,
    fontSize: 18,
    justifyContent: "center",
    borderBottomColor: Colors.gray1,
    borderBottomWidth: 2
  },
  focusedTextInput: {
    height: 50,
    fontSize: 18,
    justifyContent: "center",
    borderBottomColor: Colors.tint,
    borderBottomWidth: 2
  }
});
