import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Message from "./Message";
import FieldsController from "./FieldsController";
import Submit from "./Submit";
import InputAccessory from "./InputAccessory";

export default class Form extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Message />
          <FieldsController navigation={navigation} />
        </View>
        <Submit />
        <InputAccessory />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 60
  }
});
