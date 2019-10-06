import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";
import Colors from "../../constants/Colors";
import textStyles from "../../constants/TextStyles";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";
import Back from "../../components/Base/Header/Back";

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding-top: 60;
  align-items: center;
  justify-content: space-between;
  padding-left: 20;
  padding-right: 20;
`;

const Title = styled.Text`
  font-size: 36;
  font-weight: bold;
  margin-bottom: 10;
`;

const SubTitle = styled.Text`
  font-size: 18;
  margin-bottom: 30;
`;

const Form = styled.View`
  width: 100%;
`;

const Label = styled.Text`
  font-size: 14;
  color: #c4c4c4;
`;

const Email = styled.TextInput`
  height: 48;
  width: 100%;
  font-size: 18;
  justify-content: center;
  border-bottom-width: 1;
  border-bottom-color: #f2f2f2;
  margin-bottom: 20;
`;

const Password = styled.TextInput`
  height: 48;
  width: 100%;
  font-size: 18;
  justify-content: center;
  border-bottom-width: 1;
  border-bottom-color: #f2f2f2;
`;

const Continue = styled.TouchableOpacity`
  height: 48;
  width: 100%;
  background-color: #095050;
  border-radius: 5;
  justify-content: center;
  align-items: center;
  margin-bottom: 60;
`;

const ContinueText = styled.Text`
  font-size: 18;
  color: white;
`;

export default class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Back navigation={navigation} />
        <Container behavior="padding">
          <View style={{ width: "100%", alignItems: "center" }}>
            <Title>Welcome Back</Title>
            <SubTitle>Please enter your email</SubTitle>
            <Form>
              <Label>Email Address</Label>
              <Email />
              <Label>Password</Label>
              <Password />
            </Form>
          </View>
          <Continue onPress={() => alert("Continue")}>
            <ContinueText>Continue</ContinueText>
          </Continue>
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    justifyContent: "space-between"
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
