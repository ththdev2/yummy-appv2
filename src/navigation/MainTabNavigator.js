import {
  createStackNavigator,
  TransitionPresets
} from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Platform } from "react-native";

import Today from "../containers/TodayContainer";
import Liked from "../containers/LikedContainer";
import Recipe from "../containers/RecipeContainer";
import Cart from "../containers/CartContainer";
import Profile from "../containers/ProfileContainer";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: { headerMode: "none" }
});

const TodayStack = createStackNavigator(
  {
    Today
  },
  config
);

const tabNavigator = createBottomTabNavigator({
  TodayStack,
  Liked,
  Recipe,
  Cart,
  Profile
});

export default tabNavigator;
