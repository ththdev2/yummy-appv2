import React from 'react';
import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import TabBarIcon from '../components/tabBarIcon';

import Today from '../containers/TodayContainer';
import Liked from '../containers/LikedContainer';
import Recipe from '../containers/RecipeContainer';
import Cart from '../containers/CartContainer';
import Profile from '../containers/ProfileContainer';

import Fridge from '../screens/Fridge/Fridge';
import FridgeSearch from '../screens/Fridge/Search';
import NewRecipe from '../screens/NewRecipe/NewRecipe';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: { headerMode: 'none' }
});

const configModal = Platform.select({
  web: { headerMode: 'screen' },
  ios: {
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions: {
      ...TransitionPresets.ModalPresentationIOS,
      gestureEnabled: true,
      cardOverlayEnabled: true
    }
  },
  default: { headerMode: 'none' }
});

const TodayStack = createStackNavigator(
  { Today, Fridge, FridgeSearch },
  configModal
);
const LikedStack = createStackNavigator({ Liked }, config);
const RecipeStack = createStackNavigator({ Recipe }, config);
const CartStack = createStackNavigator({ Cart }, config);
const ProfileStack = createStackNavigator({ Profile, NewRecipe }, configModal);

TodayStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Today',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-today' : 'md-today'}
    />
  ),
  tabBarVisible: navigation.state.index === 0
});

LikedStack.navigationOptions = {
  tabBarLabel: 'Liked',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-heart-empty' : 'md-heart-empty'}
    />
  )
};

RecipeStack.navigationOptions = {
  tabBarLabel: 'Recipe',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
    />
  )
};

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'}
    />
  )
};

ProfileStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
  tabBarVisible: navigation.state.index === 0
});

const tabNavigator = createBottomTabNavigator(
  {
    TodayStack,
    LikedStack,
    RecipeStack,
    CartStack,
    ProfileStack
  },
  {
    tabBarOptions: { activeTintColor: '#037986' }
  }
);

export default tabNavigator;
