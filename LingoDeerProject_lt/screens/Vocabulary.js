import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList } from 'react-native';
import VocabItem from './../components/VocabItem';

class Vocabulary extends Component {
    static navigationOptions = {
        title: "Vocabulary"
      };
  constructor(props) {
    super(props);
    this.state = {
      // Vocabulary: [
      //   {id: "1", cat: "Nationality", Vocab: "aaa"},
      //   {id: "2", cat: "Nationality", Vocab: "bbb"},
      //   {id: "3", cat: "Nationality", Vocab: "ccc"},
      //   {id: "4", cat: "Nationality", Vocab: "ddd"},
      //   {id: "5", cat: "Nationality", Vocab: "eee"},
      // ]
    };
  }
  // _renderItem = ({ item }) => {
  //   return(
  //     <VocabItem  vocabTest={item} />
  //   ) 
  // };
  // keyExtractor = ({id}) => id;

  render() {
    return (
      <View style={styles.container}>
      <VocabItem />
      {/* <FlatList 
          data = {this.state.Vocabulary}
          renderItem = {this._renderItem}
          keyExtractor = {this.keyExtractor}
        /> */}
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
