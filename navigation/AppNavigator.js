import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import Learn from "./../screens/Learn";
import Review from "./../screens/Review";
import Profile from "./../screens/Profile";
import DayStreaks from "./../screens/DayStreaks";
import Alphabet from "./../screens/Alphabet";
import Nationally from "./../screens/Nationally";
import Determiner from "./../screens/Determiner";
import Possessive from "./../screens/Possessive";
import Greetings from "./../screens/Greetings";
import Negation from "./../screens/Negation";
import Question from "./../screens/Question";
import TestOut from "./../screens/TestOut";
import Enter from "./../screens/Enter";
import Grammar from "../screens/Grammar";
import Vocabulary from "./../screens/Vocabulary";
import Knowledge from "../screens/Knowledge";
import Quiz from "../screens/Quiz";

const TabNavigator = createBottomTabNavigator({
  Learn: {
    screen: Learn,
    navigationOptions: {
      tabBarLabel: "LEARN",

      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-book" color={tintColor} size={24} />
      ),
      tabBarOptions: { activeTintColor: "#FBB027" }
    }
  },
  Review: {
    screen: Review,
    navigationOptions: {
      tabBarLabel: "REVIEW",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-stopwatch" color={tintColor} size={24} />
      ),
      tabBarOptions: { activeTintColor: "#FBB027" }
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "ME",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      ),
      tabBarOptions: { activeTintColor: "#FBB027" }
    }
  }
});

const LearnStack = createStackNavigator({
  Learn: {
    screen: TabNavigator,
    navigationOptions: {
      title: "LINGODEER"
    }
  },
  DayStreaks: {
    screen: DayStreaks,
    navigationOptions: {
      title: "All Learning History"
    }
  },
  Alphabet: { screen: Alphabet },
  Nationally: { screen: Nationally },
  Determiner: { screen: Determiner },
  Possessive: { screen: Possessive },
  Greetings: { screen: Greetings },
  Negation: { screen: Negation },
  Question: { screen: Question },
  TestOut: { screen: TestOut },
  Enter: { screen: Enter },
  Grammar: { screen: Grammar },
  Quiz: { screen: Quiz },
  Vocabulary: { screen: Vocabulary },
  Knowledge: { screen: Knowledge },
  Review: { screen: Review }
});

const TotalNavigation = createSwitchNavigator(
  {
    LearnStack: {
      screen: LearnStack,
      navigationOptions: {
        title: "LINGODEER"
      }
    },
    TabNavigator: {
      screen: TabNavigator
    }
  },
  {
    initialRouteName: "LearnStack"
  }
);

const AppContainer = createAppContainer(TotalNavigation);

export default AppContainer;
