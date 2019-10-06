import React, { Component } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Ionicons";
import { inject, observer } from "mobx-react";
import * as Google from "expo-google-app-auth";

const config = {
  iosClientId:
    "530137834987-dku5q16jfsm0068avinqvohfcloa0341.apps.googleusercontent.com",
  androidClientId:
    "530137834987-543ummg5bjcaja3i85l5r36vlc0ou47s.apps.googleusercontent.com",
  scopes: ["profile", "email"]
};

const Container = styled.TouchableOpacity`
  height: 48;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5;
  margin-bottom: 20;
`;

const Text = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: black;
  margin-left: 10;
`;

@inject("auth")
@observer
export default class GoogleSignIn extends Component {
  constructor(props) {
    super(props);

    this.googleLogin = this.googleLogin.bind(this);
  }
  async googleLogin() {
    const { navigation, auth } = this.props;
    const { googleSignIn } = auth;
    const { type, accessToken, user } = await Google.logInAsync(config);

    if (type == "success") {
      const result = await googleSignIn(user.email);
      result
        ? navigation.navigate("Main") // Please replace Main >> AppLoading!!
        : navigation.navigate("SignUp");
    }
  }

  render() {
    return (
      <Container onPress={this.googleLogin}>
        <Icon name="logo-google" size={24} />
        <Text>Sign in with Google</Text>
      </Container>
    );
  }
}
