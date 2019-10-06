import React, { Component } from "react"
import { Text, StyleSheet, View, ScrollView } from "react-native"
import { KeyboardAccessoryView } from "react-native-keyboard-accessory"
import Colors from "../../../constants/Colors"
import { inject, observer } from "mobx-react"

import Message from "./Message"
import FieldsController from "./FieldsController"
import Submit from "./Submit"
import InputAccessoryButton from "./InputAccessoryButton"

@inject("register")
@observer
export default class Form extends Component {
	render() {
		const { canSubmit } = this.props.register
		return (
			<View style={{ flex: 1 }}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					keyboardDismissMode="interactive"
				>
					<Message />
					<FieldsController />
				</ScrollView>
				<Submit />
				<KeyboardAccessoryView
					visibleOpacity={canSubmit ? 1 : 0}
					hideBorder={true}
				>
					<InputAccessoryButton />
				</KeyboardAccessoryView>
			</View>
		)
	}
}
