import React, { Component } from "react";
// import { Icon } from "react-native-elements";
import {Container,Header,Content,Card, CardItem,Thumbnail, Text, Button, Icon, Left,Body,Right, View, Footer} from "native-base";

import { Image, Dimensions, FlatList, StyleSheet } from "react-native";
import FieldLessons from "../components/FieldLessons";
import FooterLessons from "../components/FooterLessons";
const Window = {
  Width: Dimensions.get("window").width,
  Height: Dimensions.get("window").height
};
class Negation extends Component {
  static navigationOptions = {
    title: "Negation"
  };
  constructor(props) {
    super(props);
    this.state = {
      lessons: [
        { line: 1, header: "LEARNING TIPS" },
        { line: 2, header: "Lesson 1", lessonSen: "학생 선생님 의사 경찰 " },
        { line: 3, header: "Lesson 2", lessonSen: "...이/가...아닙니다" },
        { line: 4, header: "STORY" }
      ]
    };
  }
  extractKey = ({ line }) => line.toString();
  _renderItem = ({ item }) => {
    return <FieldLessons lessons={item} />;
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./../image/headerNegation.jpg")}
            style={{ width: Window.Width, height: Window.Height / 3.5 }}
          />
        </View>

        <View style={{ flex: 2 }}>
          <FlatList
            horizontal
            data={this.state.lessons}
            renderItem={this._renderItem}
            keyExtractor={this.extractKey}
          />
        </View>
        <FooterLessons name={"VOCABURARY"}/>
      </View>
    );
  }
}

export default Negation;
