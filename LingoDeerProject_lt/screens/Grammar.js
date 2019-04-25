import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Grammar extends Component {
  static navigationOptions = {
    title: "Grammar"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.one}>
          <Text> Enter </Text>
        </View>
        <View style={styles.two}>
          <View style={styles.five}>
            <Text>5-Min Quiz  </Text>
          </View>
          <View style={styles.six}>
            <Text> Knowledge Cards </Text>
          </View>
        </View>
        <View style={styles.three}>
          <View style={styles.seven}>
            <Text> Vocabulary </Text>
          </View>
          <View style={styles.eight}>
            <Text> Grammar </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Grammar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F7F7F7",
  },
  one: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  two: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
  },
  three: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
  },
  four: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  five: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  six: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  seven: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  eight: {
    flex: 1,
   
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  }
});
