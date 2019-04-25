import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";


class Quiz extends Component {
  static navigationOptions = {
    title: "Quiz"
  };
  constructor(props) {
    super(props);
    this.state = {
      status: true
    };
  }

  ShowHideTextComponentView = () => {
    if (this.state.status == true) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        {this.state.status ? null : (
          <Text style={{ fontSize: 25, color: "#000", textAlign: "center" }}>
            {" "}
            To be continuous{" "}
          </Text>
        )}

        <Button title="Click Me" onPress={this.ShowHideTextComponentView} />
      </View>
    );
  }
}
export default Quiz;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  }
});
