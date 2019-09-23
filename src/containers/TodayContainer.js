import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default class TodayContainer extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Today</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Fridge")}>
              <Ionicons name="ios-archive" size={32} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "SFProDisplay-Bold"
  }
});
