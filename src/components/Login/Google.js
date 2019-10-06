import React, { Component } from "react"
import styled from "styled-components"
import Icon from "react-native-vector-icons/Ionicons"
import * as GoogleSignIn from "expo-google-sign-in"

const Container = styled.TouchableOpacity`
	height: 48;
	width: 100%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-radius: 5;
	margin-bottom: 20;
`

const Text = styled.Text`
	font-size: 18;
	font-weight: bold;
	color: black;
	margin-left: 10;
`

export default class Google extends Component {
	render() {
		return (
			<Container onPress={() => alert("Google")}>
				<Icon name="logo-google" size={24} />
				<Text>Sign in with Google</Text>
			</Container>
		)
	}
}
