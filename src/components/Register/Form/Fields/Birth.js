import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { inject, observer } from "mobx-react"
import Colors from "../../../../constants/Colors"
import DatePicker from "../Picker/DatePicker"
import { observable, action } from "mobx"
import { Container, Label, Field, DateInput, DateText } from "./styles"
import Check from "./Check"

@inject("register")
@observer
export default class Birth extends Component {
	@observable focus = false
	@observable modalVisible = false

	@action.bound
	setFocus(state) {
		this.focus = state
	}

	@action.bound
	setVisible(state) {
		this.modalVisible = state
	}

	render() {
		const { birth } = this.props.register

		const date = birth
		const year = date ? date.getFullYear() : ""
		const month = date ? `${date.getMonth() + 1}`.padStart(2, "0") : ""
		const day = date ? `${date.getDate()}`.padStart(2, "0") : ""
		const dateStr = date ? `${year}.${month}.${day}` : ""
		const rules = value => value != null
		return (
			<Container>
				<Label>Date of birth</Label>
				<Field focused={this.focus}>
					<TouchableWithoutFeedback onPress={() => this.setVisible(true)}>
						<DateInput>
							<DateText>{dateStr}</DateText>
						</DateInput>
					</TouchableWithoutFeedback>
					<Check visible={rules(birth)} />
				</Field>
				<DatePicker
					visible={this.modalVisible}
					setVisible={this.setVisible}
					rules={rules}
				/>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		marginBottom: 20,
	},
	focus: {
		height: 50,
		justifyContent: "center",
		borderBottomColor: Colors.tint,
		borderBottomWidth: 2,
	},
	input: {
		height: 50,
		justifyContent: "center",
		borderBottomColor: Colors.gray0,
		borderBottomWidth: 2,
	},
	text: {
		fontSize: 18,
	},
})
