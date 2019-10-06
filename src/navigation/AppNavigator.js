import { createAppContainer, createSwitchNavigator } from "react-navigation"
import MainTabNavigator from "../navigation/MainTabNavigator"
import { createStackNavigator, TransitionPresets } from "react-navigation-stack"

import AppLoading from "../screens/AppLoading"
import Start from "../screens/Login/Start"
import Login from "../screens/Login/Login"
import Register from "../screens/Register/Register"

const AuthStack = createStackNavigator(
	{
		Start: Start,
		Login: Login,
		Register: Register,
	},
	{
		headerMode: "none",
	},
)

export default createAppContainer(
	createSwitchNavigator({
		AppLoading,
		Auth: AuthStack,
		Main: MainTabNavigator,
	}),
)
