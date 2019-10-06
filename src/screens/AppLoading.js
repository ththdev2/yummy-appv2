import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Loading from "../components/Base/Loading";

export default class AppLoading extends Component {
  componentDidMount = () => {
    const { navigation } = this.props;
    navigation.navigate("Configure");
  };

  render() {
    return (
      <View>
        <Loading />
      </View>
    );
  }
}
