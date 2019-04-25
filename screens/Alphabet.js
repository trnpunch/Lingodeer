import React, { Component } from "react";
import { Image, Dimensions, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Container, Content, Card, CardItem, Text, View } from "native-base";
import FooterLessons from "../components/FooterLessons";
import { ScrollView } from "react-native-gesture-handler";

class Alphabet extends Component {
  static navigationOptions = {
    title: "Alphabet"
  };

  constructor(props) {
    super(props);
    this.state = {
      lessons: [
        { id: 1, name: "EXAM" },
        { id: 2, name: "INTRODUCTION" },
        {
          id: 3,
          name: "Lesson 1",
          titles: "Vowels",
          consonant: "ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ "
        },
        {
          id: 4,
          name: "Lesson 2",
          titles: "Consonants(ㅇ)",
          consonant: "아 야 어 여 오 요 우 유 으 이"
        },
        {
          id: 5,
          name: "Lesson 3",
          titles: "Consonants(ㄱ ㅋ ㄲ)",
          consonant: "ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ "
        },
        {
          id: 6,
          name: "Lesson 4",
          titles: "Consonants(ㄷ ㅌ ㄸ)",
          consonant: "ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ"
        },
        {
          id: 7,
          name: "Lesson 5",
          titles: "Consonants(ㅍ ㅂ ㅃ)",
          consonant: "ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ"
        }
      ]
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Card transparent style={styles.cardStyle}>
          <CardItem style={styles.cardItem}>
            <View>
              <Icon
                name="ios-keypad"
                style={{ color: "#FBB027", fontSize: 25 }}
              />
            </View>
            <View style={styles.nameStyle}>
              <Text style={styles.label}>{item.name}</Text>
              <Text style={styles.labelAmount}>{item.titles}</Text>
            </View>
            <View style={styles.nameStyle}>
              <Text note>{item.consonant}</Text>
            </View>
          </CardItem>
        </Card>
      </View>
    );
  };

  keyExtractor = ({ id }) => id.toString();

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require("./../image/header.jpg")}
            style={{
              width: 150,
              height: 150,
              alignItems: "center",
              justifyContent: "center"
            }}
          />

          <FlatList
            data={this.state.lessons}
            renderItem={this._renderItem}
            keyExtractor={this.keyExtractor}
          />
        </ScrollView>

        <FooterLessons name={"KOREAN ALPHABET CHARTS"} />
      </View>
    );
  }
}

export default Alphabet;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#F6F6F6"
  },
  label: {
    fontSize: 20,
    fontWeight: "bold"
  },
  labelAmount: {
    fontSize: 18
  },

  nameStyle: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center"
  },
  cardStyle: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    height: 150
  },
  cardItem: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  amountStyle: {
    flex: 0.2,
    alignItems: "flex-end",
    padding: 5
  }
});
