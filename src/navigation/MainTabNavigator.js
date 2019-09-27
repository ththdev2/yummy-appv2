import React from 'react';
import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import TabBarIcon from '../components/tabBarIcon';
import i18n from '../I18n/i18n';
import Colors from '../constants/Colors';

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
  tabBarLabel: i18n.t('Today'),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="clipboard" />
  ),
  tabBarVisible: navigation.state.index === 0
});

LikedStack.navigationOptions = {
  tabBarLabel: i18n.t('Liked'),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="heart" />
};

RecipeStack.navigationOptions = {
  tabBarLabel: i18n.t('Recipe'),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="book-open" />
};

CartStack.navigationOptions = {
  tabBarLabel: i18n.t('Bag'),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="shopping-bag" />
  )
};

ProfileStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: i18n.t('Profile'),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />,
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
    tabBarOptions: { activeTintColor: Colors.tint }
  }
);

export default tabNavigator;
