import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Back from "../../components/Base/Header/Back";
import styled from "styled-components";

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

export default class SignUp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Back navigation={navigation} />
        <Container>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Title>Sign Up</Title>
            <SubTitle>Please enter your email</SubTitle>
          </View>
        </Container>
      </SafeAreaView>
    );
  }
}
