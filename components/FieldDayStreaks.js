import React, { Component } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import { LinearGradient } from "expo";



class FieldDayStreaks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { day, time, xp } = this.props.dataDay;
    console.log("DayStreaks");
    return (
        <View style={styles.dayList}>
            <View style={styles.blockTime}>
              <Text> {day} </Text>
            </View>
            <View style={styles.lineTime}>
              <View style={styles.donut} />
            </View>
            <View style={styles.blockTime}>
              <Text> {time} </Text>
            </View>
            <View style={styles.blockTime}>
              <Text> {xp} </Text>
            </View>
            </View>
          
    );
  }
}

export default FieldDayStreaks;
const styles = StyleSheet.create({
  
  dayList: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    height:60

  },
  blockTime: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",

  },
  lineTime: {
    flex: 0.1,
    backgroundColor: "#EDE5D4",
  },
  donut: {
    flex: 1,
    borderColor: "#FFB100",
    borderRadius: 10
  }
});
