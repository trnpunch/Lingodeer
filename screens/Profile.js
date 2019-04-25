import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LineChart,} from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";

const resizeComponent = (value, percentage) => {
  return (value = value * (percentage / 100));
};
const Window = {
  Width: Dimensions.get("window").width,
  Height: Dimensions.get("window").height
};

const CardContainer = {
  Width: resizeComponent(Window.Width, 50),
  Height: resizeComponent(300, 5)
};

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  constructor(props) {
    super(props);
    this.state = {
      helping: [
        { id: 1, name: "Language Learning" },
        { id: 2, name: "FAQ & Help Center" },
        { id: 3, name: "Backup & Download" },
        { id: 4, name: "Setting" },
        { id: 5, name: "Contact Us" },
        { id: 6, name: "Like us on Facebook" },
        { id: 7, name: "Privacy Policy" }
      ]
    };
  }
  extractKey = ({ id }) => id.toString();
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          padding: 5,
          alignItems: "flex-start",
          flexDirection: "row"
        }}
      >
        <View
          style={{
            padding: 5,
            alignItems: "flex-start",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 19, color: "#000" }}>{item.name}</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 5,
            alignItems: "flex-end",
            justifyContent: "center"
          }}
        >
          {item.id == 1 ? (
            <Image
              source={require("./../image/korean.jpg")}
              style={{ width: 30, height: 30 }}
            />
          ) : (
            <Icon name="ios-arrow-forward" style={{color:'#ffcc5c',fontSize:12}}/>
          )}
        </View>
      </View>
    );
  };

  render() {
    console.log("Profile");
    return (
      <View style={styles.container}>
        <View style={styles.profileSpace}>
          <View style={styles.profile}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                
              }}
            >
              <Image
                source={require("./../image/profile.png")}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View style={{ flex: 3, flexDirection: "column" }}>
              <View
                style={{ flex: 1.5, flexDirection: "row", paddingBottom: 10 }}
              >
                <Text style={{ fontSize: 17, color: "#000" }}>Ntk Trn</Text>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 15, color: "#C3C183" }}>1907</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    width: Window.Width * 0.9,
                    height: 10,
                    backgroundColor: "#EAEBEF",
                    borderRadius: 10
                  }}
                >
                  <View
                    style={{
                      width: Window.Width * 0.5,
                      height: 10,
                      borderRadius: 10,
                      backgroundColor: "#FBB027"
                    }}
                  />
                </View>
              </View>
              <View style={{ flex: 1.5, flexDirection: "row" }}>
                <Text style={{ fontSize: 15, color: "#C3C183" }}>
                  Korean Progress
                </Text>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 15, color: "#757575" }}>24.8%</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.dayStreak}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: "#FBB027",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                20
              </Text>
              <Text
                note
                style={{
                  fontSize: 15,
                  color: "#8E8E8E",
                  justifyContent: "center",
                  alignContent: "center"
                }}
              >
                Day Streaks
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: 1,
                borderRightColor: "rgb(234,235,239)",
                borderLeftWidth: 1,
                borderLeftColor: "rgb(234,235,239)"
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: "#FBB027",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                No. 1
              </Text>
              <Text
                note
                style={{
                  fontSize: 15,
                  color: "#8E8E8E",
                  justifyContent: "center",
                  alignContent: "center"
                }}
              >
                Weekly Rank
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: "#FBB027",
                  justifyContent: "center",
                  alignContent: "center"
                }}
              >
                7/28
              </Text>
              <Text
                note
                style={{
                  fontSize: 15,
                  color: "#8E8E8E",
                  justifyContent: "center",
                  alignContent: "center"
                }}
              >
                Achievements
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.helpSpace}>
          <ScrollView>
            <View>
              <LineChart
                data={data}
                width={Window.Width}
                height={190}
                chartConfig={{
                  backgroundColor: "#f6f6f6",
                  backgroundGradientFrom: "#f6f6f6",
                  backgroundGradientTo: "#f6f6f6",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 100) => `rgba(0,0,0, ${opacity})`,
                  style: {
                    borderRadius: 16
                  }
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                padding: 5,
                backgroundColor: "#f6f6f6",
                borderTopWidth: 1,
                borderTopColor: "rgb(234,235,239)"
              }}
            >
              <FlatList
                data={this.state.helping}
                renderItem={this._renderItem}
                keyExtractor={this.extractKey}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const data = {
  labels: ["WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"],
  datasets: [
    {
      data: [0, 20, 23, 25, 60, 65, 55, 40, 20],
      color: (opacity = 1) => `rgba(251,176,39, ${opacity})` 
    }
  ]
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#F6F6F6"
  },
  profileSpace: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(234,235,239)"
  },
  helpSpace: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  dayStreak: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 10
  }
});
