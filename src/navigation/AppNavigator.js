import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from '../navigation/MainTabNavigator';
import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';

import AppLoading from '../screens/AppLoading';

export default createAppContainer(
  createSwitchNavigator({
    AppLoading,
    Main: MainTabNavigator
  })
);
