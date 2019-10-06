import React, { Component } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import Logo from "../../../assets/logo.svg"
import styled from "styled-components/native"
import { LinearGradient } from "expo-linear-gradient"
import Google from "../../components/Login/Google"

const SafeAreaView = styled.SafeAreaView`
	flex: 1;
`
const Container = styled.View`
	flex: 1;
	padding-top: 60;
	padding-left: 20;
	padding-right: 20;
	justify-content: space-between;
	padding-bottom: 44;
`

const Title = styled.Text`
	margin-top: 30;
	font-size: 36;
	font-weight: bold;
	color: white;
`

const Header = styled.View`
	height: 44;
	width: 100%;
	align-items: flex-end;
	justify-content: center;
	padding-right: 20;
`

const Login = styled.Text`
	font-size: 18;
	color: white;
	font-weight: bold;
`

const Signup = styled.View`
	height: 48;
	width: 100%;
	justify-content: center;
	align-items: center;
`

const SignupText = styled.Text`
	font-size: 18;
	font-weight: bold;
	color: white;
`

export default class Start extends Component {
	render() {
		const { navigation } = this.props
		return (
			<LinearGradient colors={["#095050", "#417e81"]} style={{ flex: 1 }}>
				<SafeAreaView>
					<Header>
						<TouchableOpacity onPress={() => navigation.navigate("Login")}>
							<Login>Login</Login>
						</TouchableOpacity>
					</Header>
					<Container>
						<View>
							<Logo width={100} height={100} />
							<Title>Welcome to{"\n"}Yummy</Title>
						</View>
						<View>
							<Google />
							<TouchableOpacity onPress={() => alert("Sign Up")}>
								<Signup>
									<SignupText>Sign Up</SignupText>
								</Signup>
							</TouchableOpacity>
						</View>
					</Container>
				</SafeAreaView>
			</LinearGradient>
		)
	}
}
