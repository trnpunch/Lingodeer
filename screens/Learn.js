import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight,
  FlatList,
  ScrollView
} from "react-native";
import FieldLearn from "../components/FieldLearn";

class Learn extends Component {
  static navigationOptions = {
    title: "Learn"
  };

  constructor(props) {
    super(props);
    this.state = {
      lessons: [
        { line: 1, key: "Alphabet" },
        { line: 2, key: "DayStreaks" },
        { line: 3, key: "Determiner", number: "3/3", },
        { line: 4, key: "Nationally", number: "2/2" },
        { line: 5, key: "Greetings", number: "2/2" },
        { line: 6, key: "Possessive", number: "2/2" },
        { line: 7, key: "Question", number: "2/2" },
        { line: 8, key: "Negation", number: "2/2" },
        { line: 9, key: "TestOut" },
        { line: 10, key: "Location", },
        { line: 11, key: "Existence",},
        { line: 12, key: "Color",},
        { line: 13, key: "Possession",},
        { line: 14, key: "Spatial Relation",},
        { line: 15, key: "Family"},
        { line: 16, key: "LevelUp"}
      ]
    };
  }
  _onPressItem = item => {
    this.props.navigation.navigate(item.key, { type: item });
  };
  extractKey = ({ line }) => line;
  _renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        onPress={() => this._onPressItem(item)}
        underlayColor="rgb(250,250,210)"
      >
        <FieldLearn labelTest={item} />
      </TouchableHighlight>
    );
  };
  render() {
    return (
      <FlatList
        data={this.state.lessons}
        renderItem={this._renderItem}
        numColumns={2}
      />
    );
  }
}

export default Learn;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


  // <ScrollView>
      //   <FieldLearn item={this.state.lessons} />
      // </ScrollView>