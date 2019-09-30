import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";
import textStyles from "../../constants/TextStyles";
import Icon from "react-native-vector-icons/Feather";
import TextInputField from "../../components/Form/TextInputField";

export default class Register extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>
          <Icon
            name="chevron-left"
            size={36}
            onPress={() => navigation.goBack()}
            style={{ position: "absolute", left: 10 }}
          />
          <View style={styles.header}>
            <Text style={textStyles.compact}>What's your name?</Text>
          </View>
          <TextInputField label="Name" />
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
    position: "relative"
  },
  header: {
    marginBottom: 30
  }
});
