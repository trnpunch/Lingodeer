import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ScrollView
} from "react-native";
import FieldDayStreaks from "../components/FieldDayStreaks";
import { LinearGradient } from "expo";
import Timeline from "react-native-timeline-listview";

class DayStreaks extends Component {
  static navigationOptions = {
    title: "DayStreaks"
  };
  constructor(props) {
    super(props);
    this.data = [
      
      { time: "03-29", title: "+ 1h 6m 45s", description: "+ 80" ,circleColor:"rgb(255,177,0)"},
      { time: "03-28", title: "+ 1h 50m 55s", description: "+ 120" },
      { time: "03-27", title: "+ 6m 55s", description: "+ 30" },
      { time: "03-26", title: "+ 2h 3m 21s", description: "+ 440" },
      { time: "03-25", title: "+ 55s", description: "+ 0" },
      { time: "03-24", title: "+ 10s", description: "+ 0" },
      { time: "03-23", title: "+ 3s", description: "+ 0" },
      { time: "03-22", title: "+ 6s", description: "+ 80" },
      { time: "03-21", title: "+ 6m 33s", description: "+ 20" },
      { time: "03-20", title: "+ 6s", description: "+ 0" },
      { time: "03-19", title: "+ 7s", description: "+ 0" },
      { time: "03-18", title: "+ 4h 32m 51s", description: "+ 580" },
      { time: "03-17", title: "+ 43m 37s", description: "+ 180" },
      { time: "03-16", title: "+ 55m 5s", description: " 80" },
      { time: "03-15", title: "+ 3s", description: "+ 0" },
      { time: "03-14", title: "+1h 59m 12s", description: "+ 210" },
      { time: "Before", title: "+ 0s", description: "+ 900" }
    ];
    this.state = {
    };
  }

  renderDetail(rowData) {
    let title = (
      <View style={styles.blockTime}>
        <Text style={styles.label}> {rowData.title} </Text>
      </View>
    );
    var desc = (
      <View style={styles.blockTime}>
        <Text> {rowData.description}</Text>
      </View>
    );

    return (
      <View style={styles.blockTimeList}>
        {title}
        {desc}
      </View>
    );
  }
  extractKey = ({ id }) => id;
  _renderItem = ({ item }) => {
    return <FieldDayStreaks dataDay={item} />;
  };
  render() {
    console.log(this.state.totalTimes);
    return (
      <View style={styles.container}>
        <View style={styles.totalDay}>
          <LinearGradient
            colors={["#5BBEFA", "#5F8BFB", "#6168F8"]}
            style={styles.LinearGradient}
          >
            <View style={styles.totalTime}>
              <Text style={styles.labelName}> TOTAL TIME </Text>
              <Text style={styles.labelNumber}> 140h 47m 41s </Text>
            </View>
            <View style={styles.DayStreaks}>
              <Text style={styles.labelName}> DAY STREAKS </Text>
              <Text style={styles.labelNumber}> 20 </Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.dayList}>
          <Timeline
            data={this.data}
            innerCircle={"dot"}
            circleSize={10}
            
            circleColor="rgb(237,229,212)"
            lineColor="rgb(237,229,212)"
            renderDetail={this.renderDetail}
            lineWidth={2}
            dashLine={true}
            marginTopCircle={20}
          />
        </View>
      </View>
    );
  }
}

export default DayStreaks;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F8F8F8"
  },
  LinearGradient: { flex: 2, flexDirection: "row", borderRadius: 10 },
  totalDay: {
    flex: 2,
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 13,
    marginRight: 10,
    borderRadius: 10
  },
  totalTime: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "white",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around"
  },
  DayStreaks: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around"
  },
  labelName: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold"
  },
  labelNumber: {
    fontSize: 20,
    color: "rgb(255,177,0)",
    fontWeight: "bold"
  },
  dayList: {
    flex: 6,
    flexDirection: "row",
    backgroundColor: "blue",
    padding: 10,
    paddingTop: 30,
    paddingLeft: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 60
  },
  blockTimeList: {
    flex: 6,
    flexDirection: "row",
    backgroundColor: "blue",
    backgroundColor: "#fff",
    height:40,
  },
  blockTime: {
    flex: 3,
   
  },
  label:{
    fontSize:13
  },
  lineTime: {
    flex: 0.1,
    backgroundColor: "#EDE5D4"
  },
  donut: {
    flex: 1,
    borderColor: "#FFB100",
    borderRadius: 10
  }
});




      // <View style={styles.container}>
      //   <View style={styles.totalDay}>
      //     <LinearGradient
      //       colors={["#5BBEFA", "#5F8BFB", "#6168F8"]}
      //       style={styles.LinearGradient}
      //     >
      //       <View style={styles.totalTime}>
      //         <Text style={styles.labelName}> TOTAL TIME </Text>
      //         <Text style={styles.labelNumber}> 140h 47m 41s </Text>
      //       </View>
      //       <View style={styles.DayStreaks}>
      //         <Text style={styles.labelName}> DAY STREAKS </Text>
      //         <Text style={styles.labelNumber}> 20 </Text>
      //       </View>
      //     </LinearGradient>
      //   </View>
      //   <View style={styles.dayList}>
      //     <ScrollView>
      //       <FlatList
      //         data={this.state.totalTimes}
      //         renderItem={this._renderItem}
      //         keyExtractor={this.extractKey}
      //       />
      //     </ScrollView>
      //   </View>
      // </View>
