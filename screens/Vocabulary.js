import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import VocabularyItem from "../components/VocabularyItem";
import FooterLessons from "../components/FooterLessons";


class Vocabulary extends Component {
  static navigationOptions = {
    title: "Vocabulary"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <VocabularyItem />
        <FooterLessons name={"PRACTICE(77)"}/>
      </View>
      
    );
  }
}

export default Vocabulary;
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
