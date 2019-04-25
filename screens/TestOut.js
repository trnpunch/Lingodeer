import React, { Component } from "react";
import { View,Dimensions, Text } from "react-native";

class TestOut extends Component {
  static navigationOptions = {
    title: "TestOut"
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { key, number } = this.props.navigation.state.params.type;
    return (
      <View style={{ justifyContent: "center", alignContent: "center",alignItems: "center", flex: 1 }}>
        <Text style={{ fontSize: 25 }}> {key} page is not finished. </Text>
        <Text style={{ fontSize: 25 }}> It’s a work in progress.</Text>
      </View>
    );
  }
}

export default TestOut;
