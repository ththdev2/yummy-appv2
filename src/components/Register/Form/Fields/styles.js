import styled from "styled-components/native"
import Colors from "../../../../constants/Colors"

export const Container = styled.View`
	padding-left: 20;
	padding-right: 20;
	margin-bottom: 20;
`
export const Label = styled.Text`
	font-size: 14;
`

export const Field = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 2;
	border-bottom-color: ${props => (props.focused ? Colors.tint : Colors.gray0)};
`

export const TextInput = styled.TextInput`
	width: 80%;
	height: 50;
	justify-content: center;
	font-size: 18;
`

export const DateInput = styled.View`
	width: 80%;
	height: 50;
	justify-content: center;
	font-size: 18;
`

export const DateText = styled.Text`
	font-size: 18;
`
