import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import styled from "styled-components/native"

const messages = [
	"What's your name?",
	"What is your date of birth?",
	"Please enter your email",
	"Please enter password",
	"Please register if the information is correct",
]

const Container = styled.View`
	padding-left: 20;
	padding-right: 20;
	margin-bottom: 30;
`

const MessageText = styled.Text`
	font-size: 24;
	font-weight: bold;
`

@inject("register")
@observer
export default class Message extends Component {
	render() {
		const { step } = this.props.register
		return (
			<Container>
				<MessageText>{messages[step]}</MessageText>
			</Container>
		)
	}
}
