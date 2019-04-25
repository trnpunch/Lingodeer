import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import { Card, CardItem, CheckBox } from "native-base";
import FooterLessons from "../components/FooterLessons";


class Grammar extends Component {
  static navigationOptions = {
    title: "Grammar"
  };
  constructor(props) {
    super(props);
    this.state = {
      VocabGrammar: [
        {
          title: "Nationality",
          amount: "4",
          id: "1"
        },
        {
          title: "Determiner",
          amount: "12",
          id: "2"
        },
        {
          title: "Possessive",
          amount: "8",
          id: "3"
        },
        {
          title: "Greeting",
          amount: "5",
          id: "4"
        },
        {
          title: "Negation",
          amount: "7",
          id: "5"
        },
        {
          title: "Location",
          amount: "10",
          id: "6"
        },
        {
          title: "Color",
          amount: "20",
          id: "7"
        },
        {
          title: "Existence",
          amount: "12",
          id: "8"
        }
      ]
    };
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={false} color="#ffcc5c" />
            </View>
            <View style={styles.nameStyle}>
              <Text style={styles.label}>{item.title}</Text>
            </View>
            <View style={styles.amountStyle}>
              <Text note style={styles.labelAmount}>{item.amount}</Text>
            </View>
          </CardItem>
        </Card>
      </View>
    );
  };

  keyExtractor = ({ id }) => id;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.VocabGrammar}
          renderItem={this._renderItem}
          keyExtractor={this.keyExtractor}
        />
        <FooterLessons name={"PRACTICE(77)"}/>
      </View>
    );
  }
}

export default Grammar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingLeft: 5,
    paddingRight: 5
  },
  label: {
    fontSize: 18,
    fontWeight: "bold"
  },
  labelAmount: {
    fontSize: 18,
    color: "gray"
  },
  checkboxStyle: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  nameStyle: {
    flex: 0.8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cardStyle: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    height: 60
  },
  amountStyle: {
    flex: 0.2,
    alignItems: "flex-end",
    padding: 5
  }
});
