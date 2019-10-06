import React, { Component } from "react"
import { Text, StyleSheet, View } from "react-native"
import { observable, action } from "mobx"
import { inject, observer } from "mobx-react"
import { Container, Label, Field, TextInput } from "./styles"
import Check from "./Check"

@inject("register")
@observer
export default class Password extends Component {
	@observable focus = false

	@action.bound
	setFocus(state) {
		this.focus = state
	}

	render() {
		const { password, onChange, onSubmit } = this.props.register
		const rules = value => value != ""
		return (
			<Container>
				<Label>Password</Label>
				<Field focused={this.focus}>
					<TextInput
						value={password}
						onChangeText={newValue => onChange("password", newValue, rules)}
						onFocus={() => this.setFocus(true)}
						onBlur={() => this.setFocus(false)}
						secureTextEntry={true}
						onSubmitEditing={onSubmit}
					/>
					<Check visible={rules(password)} />
				</Field>
			</Container>
		)
	}
}
