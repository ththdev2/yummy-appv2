import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { observer, inject } from "mobx-react";
import { Name, Birth, Email, Password } from "./Fields";

@inject("register")
@observer
export default class FieldsController extends Component {
  render() {
    const { navigation } = this.props;
    const { step } = this.props.register;
    const fields = [
      <Name key="name" />,
      <Birth key="birth" navigation={navigation} />,
      <Email key="email" />,
      <Password key="password" />
    ];
    const activeFields = fields.map((field, index) => {
      return index <= step ? field : null;
    });
    return <View style={styles.container}>{activeFields}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column-reverse"
  }
});
