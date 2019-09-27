import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from '../navigation/MainTabNavigator';
import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';

import AppLoading from '../screens/AppLoading';
import Login from '../screens/Login/Login';

export default createAppContainer(
  createSwitchNavigator({
    AppLoading,
    Login,
    Main: MainTabNavigator
  })
);
