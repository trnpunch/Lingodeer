import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Card, CardItem, CheckBox} from "native-base";
import Accordion from "react-native-collapsible/Accordion";

const CONTENT = [
  {
    title: "Nationality",
    vocab1: "사람",
    meaning1: "people",
    vocab2: "한국",
    meaning2: "Korea",
    vocab3: "중국",
    meaning3: "China",
    vocab4: "미국",
    meaning4: "The United States"
  },
  {
    title: "Determiner",
    vocab1: "사람",
    meaning1: "people",
    vocab2: "한국",
    meaning2: "Korea",
    vocab3: "중국",
    meaning3: "China",
    vocab4: "미국",
    meaning4: "The United States"
  },
  {
    title: "Possessive",
    vocab1: "사람",
    meaning1: "people",
    vocab2: "한국",
    meaning2: "Korea",
    vocab3: "중국",
    meaning3: "China",
    vocab4: "미국",
    meaning4: "The United States"
  },
  {
    title: "Greeting",
    vocab1: "사람",
    meaning1: "people",
    vocab2: "한국",
    meaning2: "Korea",
    vocab3: "중국",
    meaning3: "China",
    vocab4: "미국",
    meaning4: "The United States"
  },
  {
    title: "Negation",
    vocab1: "사람",
    meaning1: "people",
    vocab2: "한국",
    meaning2: "Korea",
    vocab3: "중국",
    meaning3: "China",
    vocab4: "미국",
    meaning4: "The United States"
  },
  {
    title: "Location",
    vocab1: "사람",
    meaning1: "people",
    vocab2: "한국",
    meaning2: "Korea",
    vocab3: "중국",
    meaning3: "China",
    vocab4: "미국",
    meaning4: "The United States"
  },
  {
    title: "Color",
    vocab1: "사람",
    meaning1: "people",
    vocab2: "한국",
    meaning2: "Korea",
    vocab3: "중국",
    meaning3: "China",
    vocab4: "미국",
    meaning4: "The United States"
  },
  {
    title: "Existence",
    vocab1: "사람",
    meaning1: "people",
    vocab2: "한국",
    meaning2: "Korea",
    vocab3: "중국",
    meaning3: "China",
    vocab4: "미국",
    meaning4: "The United States"
  }
];

export default class VocabularyItem extends Component {


  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
    checked:false
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <View style={styles.container}>
        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View style={styles.nameStyle}>
              <Text style={styles.label}>{section.title}</Text>
            </View>

            <View style={styles.checkboxStyle}>
              <CheckBox checked={true} color="#fbb027" />
            </View>
          </CardItem>
        </Card>
      </View>
    );
  };

  

  renderContent(section, _, isActive) {
    return (
      <View style={styles.container}>
        <Card transparent style={styles.cardChildren}>
          <CardItem style={styles.cardChildrenItem}>
            <View style={styles.nameStyle}>
              <Text style={styles.labelVocab}>{section.vocab1}</Text>
            </View>
            <View style={styles.meanStyle}>
              <Text style={styles.labelMean}>{section.meaning1}</Text>
            </View>
            <View style={styles.checkboxStyle}>
            
              <CheckBox checked={true} color="#fbb027" />
            </View>
          </CardItem>
          <CardItem style={styles.cardChildrenItem}>
            <View style={styles.nameStyle}>
              <Text style={styles.labelVocab}>{section.vocab2}</Text>
            </View>
            <View style={styles.meanStyle}>
              <Text style={styles.labelMean}>{section.meaning2}</Text>
            </View>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={true} color="#fbb027" />
            </View>
          </CardItem>
          <CardItem style={styles.cardChildrenItem}>
            <View style={styles.nameStyle}>
              <Text style={styles.labelVocab}>{section.vocab3}</Text>
            </View>
            <View style={styles.meanStyle}>
              <Text style={styles.labelMean}>{section.meaning3}</Text>
            </View>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={true} color="#fbb027" />
            </View>
          </CardItem>
          <CardItem style={styles.cardChildrenItem}>
            <View style={styles.nameStyle}>
              <Text style={styles.labelVocab}>{section.vocab4}</Text>
            </View>
            <View style={styles.meanStyle}>
              <Text style={styles.labelMean}>{section.meaning4}</Text>
            </View>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={true} color="#fbb027" />
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingLeft: 5,
    paddingRight: 5
  },
  label: {
    fontSize: 18,
    fontWeight: "bold"
  },
  labelVocab: {
    fontSize: 18
  },
  labelMean: {
    fontSize: 18,
    color: "gray"
  },
  checkboxStyle: {
    flex: 1,
    alignItems: "flex-end",
    padding: 5
  },
  nameStyle: {
    flex: 2,
    alignItems: "flex-start",
    padding: 5,
    
  },
  meanStyle: {
    flex: 3,
    alignItems: "flex-end",
    padding: 5
  },
  cardStyle: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    height: 60
  },
  cardChildren: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5
  },
  cardChildrenItem: {
    backgroundColor: "#F6F6F6"
  }
});
