import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
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
  text-align: center;
`;

export default class Configure extends Component {
  render() {
    return (
      <SafeAreaView>
        <Container>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Title>Configure</Title>
            <SubTitle>Please check the information is correct</SubTitle>
          </View>
        </Container>
      </SafeAreaView>
    );
  }
}
