import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Enter extends Component {
  static navigationOptions = {
    title: "Enter"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}


