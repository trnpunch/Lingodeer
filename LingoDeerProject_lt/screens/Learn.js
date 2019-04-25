import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';


class Learn extends Component {
    static navigationOptions = {
        title: 'Learn'
      };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      console.log("Learn")
    return (
        <View style={styles.container}>
        
        <Text> Learn </Text>
      </View>
    );
  }
}

export default Learn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});