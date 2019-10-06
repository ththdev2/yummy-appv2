import React, { Component } from "react"
import { StyleSheet, DatePickerIOS } from "react-native"
import { inject, observer } from "mobx-react"
import Modal from "react-native-modal"
import Colors from "../../../../constants/Colors"
import styled from "styled-components/native"

const Container = styled.View`
	width: 100%;
	background-color: white;
`

const Button = styled.TouchableOpacity`
	height: 50;
	justify-content: center;
	align-items: center;
	background-color: ${Colors.tint};
`

const ButtonText = styled.Text`
	font-size: 18;
	color: white;
`

@inject("register")
@observer
export default class DatePicker extends Component {
	render() {
		const { visible, setVisible, rules } = this.props
		const { birth, onChange, onSubmit } = this.props.register
		return (
			<Modal
				isVisible={visible}
				style={styles.modal}
				onBackdropPress={() => setVisible(false)}
			>
				<Container style={styles.container}>
					<Button
						onPress={() => {
							onSubmit()
							setVisible(false)
						}}
					>
						<ButtonText>Done</ButtonText>
					</Button>
					<DatePickerIOS
						initialDate={new Date()}
						date={birth}
						onDateChange={value => onChange("birth", value, rules)}
						mode="date"
						locale="ko"
					/>
				</Container>
			</Modal>
		)
	}
}

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		width: "100%",
		margin: 0,
		justifyContent: "flex-end",
	},
})
