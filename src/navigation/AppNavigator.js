import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainTabNavigator from "../navigation/MainTabNavigator";
import {
  createStackNavigator,
  TransitionPresets
} from "react-navigation-stack";

import Fridge from "../screens/FridgeModal";

const App = createStackNavigator(
  {
    Main: MainTabNavigator,
    Fridge
  },
  {
    mode: "modal",
    headerMode: "none",
    defaultNavigationOptions: {
      ...TransitionPresets.ModalPresentationIOS,
      gestureEnabled: true,
      cardOverlayEnabled: true
    }
  }
);

export default createAppContainer(
  createSwitchNavigator({
    App
  })
);
