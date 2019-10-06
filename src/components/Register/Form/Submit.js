import React, { Component } from "react"
import { Text, StyleSheet, View, TouchableOpacity } from "react-native"
import { inject, observer } from "mobx-react"
import Colors from "../../../constants/Colors"
import styled from "styled-components/native"

const Container = styled.View`
	width: 100%;
	position: absolute;
	bottom: 60;
`

const Button = styled.View`
	height: 50;
	margin-right: 20;
	margin-left: 20;
	justify-content: center;
	align-items: center;
	background-color: ${Colors.tint};
	opacity: ${props => (props.disabled ? 0.6 : 1)};
	border-radius: 5;
`

const ButtonText = styled.Text`
	font-size: 18;
	color: white;
`

@inject("register")
@observer
export default class Submit extends Component {
	render() {
		const { onSubmit, canSubmit } = this.props.register
		return (
			<Container>
				<TouchableOpacity onPress={onSubmit} disabled={!canSubmit}>
					<Button disabled={!canSubmit}>
						<ButtonText>Done</ButtonText>
					</Button>
				</TouchableOpacity>
			</Container>
		)
	}
}
