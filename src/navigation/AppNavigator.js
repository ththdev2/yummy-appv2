import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from '../navigation/MainTabNavigator';
import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';

import AppLoading from '../screens/AppLoading';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import DatePicker from '../screens/Register/DatePicker';

const LoginStack = createStackNavigator(
  {
    Login
  },
  { headerMode: 'none' }
);

const RegisterStack = createStackNavigator(
  {
    Register,
    DatePicker
  },
  {
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    cardOverlayEnabled: true
  }
);
const Auth = createStackNavigator(
  {
    Login: LoginStack,
    Register: RegisterStack
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(
  createSwitchNavigator({
    AppLoading,
    Auth,
    Main: MainTabNavigator
  })
);
