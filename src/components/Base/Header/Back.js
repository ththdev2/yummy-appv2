import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import Icon from "react-native-vector-icons/Feather"

const Container = styled.View`
	height: 44;
	width: 100%;
	padding-left: 10;
`

const Back = ({ navigation }) => {
	return (
		<Container>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Icon name="chevron-left" size={32} />
			</TouchableOpacity>
		</Container>
	)
}

export default Back
