import React, { Component } from "react"
import { Text, StyleSheet, View } from "react-native"
import Loading from "../components/Base/Loading"

export default class AppLoading extends Component {
	componentDidMount = () => {
		const { navigation } = this.props
		navigation.navigate("Start")
	}

	render() {
		return (
			<View style={styles.container}>
				<Loading />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
})
