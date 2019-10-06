import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainTabNavigator from "../navigation/MainTabNavigator";
import {
  createStackNavigator,
  TransitionPresets
} from "react-navigation-stack";

import AppLoading from "../screens/AppLoading";
import Start from "../screens/Auth/Start";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import Configure from "../screens/Auth/Configure";

const AuthStack = createStackNavigator(
  {
    Start,
    SignIn,
    SignUp,
    Configure
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(
  createSwitchNavigator({
    AppLoading,
    Auth: AuthStack,
    Main: MainTabNavigator
  })
);
