import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class Profile extends Component {
    static navigationOptions = {
        title: 'Profile'
      };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log("Profile")
    return (
        <View style={styles.container}>
        <Text> Profile </Text>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});