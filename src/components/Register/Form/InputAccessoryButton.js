import React, { Component } from "react"
import { TouchableOpacity } from "react-native"
import { inject, observer } from "mobx-react"
import Colors from "../../../constants/Colors"
import styled from "styled-components/native"

const Container = styled.View`
	height: 50;
	justify-content: center;
	align-items: center;
	background-color: ${Colors.tint};
`

const Text = styled.Text`
	font-size: 18;
	color: white;
`

@inject("register")
@observer
export default class InputAccessoryButton extends Component {
	render() {
		const { onSubmit } = this.props.register
		return (
			<TouchableOpacity onPress={onSubmit}>
				<Container>
					<Text>Done</Text>
				</Container>
			</TouchableOpacity>
		)
	}
}
