import React, { Component } from "react";
import { View, Text } from "react-native";
import { Footer } from "native-base";
class FooterLessons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
   console.log(this.props.name)
    return (
      <Footer
        style={{
          backgroundColor: "#FFFCF3"
        }}
      >
        <View style={{ justifyContent: "center", alignContent: "center" }}>
          <Text style={{ fontSize: 18, color: "#FBB027", fontWeight: "bold" }}>
            {this.props.name}
          </Text>
        </View>
      </Footer>
    );
  }
}

export default FooterLessons;
