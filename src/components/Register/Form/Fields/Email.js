import React, { Component } from "react"
import { Text, StyleSheet, View } from "react-native"
import { observable, action } from "mobx"
import { inject, observer } from "mobx-react"
import { Container, Label, Field, TextInput } from "./styles"
import Check from "./Check"

@inject("register")
@observer
export default class Email extends Component {
	@observable focus = false

	@action.bound
	setFocus(state) {
		this.focus = state
	}

	render() {
		const { email, onChange, onSubmit } = this.props.register
		const rules = value => value != ""
		return (
			<Container>
				<Label>Email</Label>
				<Field focused={this.focus}>
					<TextInput
						autoCapitalize="none"
						value={email}
						onChangeText={newValue => onChange("email", newValue, rules)}
						onFocus={() => this.setFocus(true)}
						onBlur={() => this.setFocus(false)}
						keyboardType="email-address"
						onSubmitEditing={onSubmit}
					/>
					<Check visible={rules(email)} />
				</Field>
			</Container>
		)
	}
}
