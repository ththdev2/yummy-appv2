import React from "react"
import Icon from "react-native-vector-icons/Feather"
import Colors from "../../../../constants/Colors"

const Check = ({ visible }) => {
	return (
		<Icon
			name="check"
			size={24}
			color={Colors.tint}
			style={{ opacity: visible ? 1 : 0 }}
		/>
	)
}

export default Check
