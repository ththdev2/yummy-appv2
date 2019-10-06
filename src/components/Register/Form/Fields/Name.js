import React, { Component } from "react"
import { Text, StyleSheet, View } from "react-native"
import { observable, action } from "mobx"
import { inject, observer } from "mobx-react"
import { Container, Label, Field, TextInput } from "./styles"
import Check from "./Check"

@inject("register")
@observer
export default class Name extends Component {
	@observable focus = false

	@action.bound
	setFocus(state) {
		this.focus = state
	}

	render() {
		const { name, onChange, onSubmit } = this.props.register
		const rules = value => value != ""
		return (
			<Container>
				<Label>Name</Label>
				<Field focused={this.focus}>
					<TextInput
						value={name}
						onChangeText={newValue => onChange("name", newValue, rules)}
						onFocus={() => this.setFocus(true)}
						onBlur={() => this.setFocus(false)}
						onSubmitEditing={onSubmit}
					/>
					<Check visible={rules(name)} />
				</Field>
			</Container>
		)
	}
}
