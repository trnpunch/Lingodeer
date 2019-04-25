import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LevelUp extends Component {
    static navigationOptions = {
        title:"LevelUp"
    }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> LevelUp </Text>
      </View>
    );
  }
}

export default LevelUp;
