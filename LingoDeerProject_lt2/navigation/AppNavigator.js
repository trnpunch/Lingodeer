import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";
import Learn from "./../screens/Learn";
import Review from "./../screens/Review";
import Profile from "./../screens/Profile";
import Enter from "./../screens/Enter";
import Grammar from "../screens/Grammar";
import Vocabulary from "./../screens/Vocabulary";
import Knowledge from "../screens/Knowledge";
import Quiz from "../screens/Quiz";

const ReviewStack = createStackNavigator(
  {
    Enter: { screen: Enter },
    Grammar: { screen: Grammar },
    Quiz: { screen: Quiz },
    Vocabulary: { screen: Vocabulary },
    Knowledge: { screen: Knowledge },
    Review: { screen: Review },
    
  },
  {
    initialRouteName: "Review"
  }
);

const TabNavigator = createBottomTabNavigator({
  Learn: {
    screen: Learn,
    navigationOptions: {
      tabBarLabel: "LEARN",

      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-book" color={tintColor} size={24} />
      ),
      tabBarOptions: { activeTintColor: "gold" }
    }
  },
  Review: {
    screen: ReviewStack,
    navigationOptions: {
      tabBarLabel: "REVIEW",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-american-football" color={tintColor} size={24} />
      ),
      tabBarOptions: { activeTintColor: "gold" }
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "ME",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      ),
      tabBarOptions: { activeTintColor: "gold" }
    }
  }
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
