import React, { Component } from "react";
import { Card, CardItem } from "native-base";
import { View, Text, StyleSheet, TouchableHighlight,Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Review extends Component {
  static navigationOptions = {
    title: "Review"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionOne}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Enter")}
            underlayColor="rgb(250,250,210)"
          >
            <View style={styles.enterStyle}>
              <Text style={styles.labelEnter}>ENTER</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.sectionTwo}>
          <Card transparent style={styles.quizStyle}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("Quiz")}
              underlayColor="rgb(250,250,210)"
            >
              <CardItem>
                <View style={{alignItems: "center"}}>
                  <Image
                    source={require("./../image/quiz.jpg")}
                    style={styles.imageLearn}
                  />
                  <Text style={styles.label}>5-Min Quiz </Text>
                </View>

                
              </CardItem>
            </TouchableHighlight>
          </Card>

          <Card transparent style={styles.knowledgeStyle}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("Knowledge")}
              underlayColor="rgb(250,250,210)"
            >
              <CardItem>
                <View style={{alignItems: "center"}}>
                  <Image
                    source={require("./../image/know.jpg")}
                    style={styles.imageLearn}
                  />
                  <Text style={styles.label}>Knowledge Cards</Text>
                </View>
                
              </CardItem>
            </TouchableHighlight>
          </Card>
        </View>

        <View style={styles.sectionThree}>
          <Card transparent style={styles.cardlistStyle}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("Vocabulary")}
              underlayColor="rgb(250,250,210)"
            >
              <CardItem style={styles.itemCard}>
                <View style={styles.vocabStyle}>
                  <View style={styles.viewName}>
                    <Text style={styles.label}>Vocabulary</Text>
                  </View>
                  <View style={styles.ViewText}>
                    <Text style={styles.label2}>4</Text>
                  </View>
                </View>
              </CardItem>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("Grammar")}
              underlayColor="rgb(250,250,210)"
            >
              <CardItem style={styles.itemCard}>
                <View style={styles.grammarStyle}>
                  <View style={styles.viewName}>
                    <Text style={styles.label}>Grammar</Text>
                  </View>
                  <View style={styles.ViewText}>
                    <Text style={styles.label2}>2</Text>
                  </View>
                </View>
              </CardItem>
            </TouchableHighlight>
          </Card>
        </View>
      </View>
    );
  }
}

export default Review;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F7F7F7"
  },
  sectionOne: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  enterStyle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "#ffcc5c",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ffef96",
    shadowOpacity: 1.0,
    shadowRadius: 20
  },
  sectionTwo: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10
  },
  sectionThree: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10
  },
  quizStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  knowledgeStyle: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  cardlistStyle: {
    flex: 1,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  label: {
    fontSize: 18
  },
  labelEnter: {
    fontSize: 18,
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  label2: {
    fontSize: 18,
    color: "gray"
  },
  vocabStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10
  },
  grammarStyle: {
    flex: 1,
    flexDirection: "row",
    borderTopColor: "#f4f4f4",
    borderTopWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20
  },
  ViewText: {
    flex: 1,
    alignItems: "flex-end"
  },
  viewName: {
    flex: 1,
    alignItems: "flex-start"
  },
  itemCard: {
    alignItems: "center",
    justifyContent: "center"
  },
  imageLearn: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center"
  },
});
