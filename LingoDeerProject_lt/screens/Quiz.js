import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, CardItem, CheckBox, Icon, Picker, Form } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import DropdownMenu from "react-native-dropdown-menu";

class Quiz extends Component {
  static navigationOptions = {
    title: "Quiz"
  };
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    var data = [["C", "Java", "JavaScript", "PHP"]];
    return (
      <View style={styles.container}>
        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View>
              <DropdownMenu
                style={{ flex: 1 }}
                bgColor={"#ffffff"}
                tintColor={"#666666"}
                activityTintColor={"green"}
                data={data}
              />
            </View>
          </CardItem>
        </Card>

        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View>
              <DropdownMenu
                style={{ flex: 1 }}
                bgColor={"#ffffff"}
                tintColor={"#666666"}
                activityTintColor={"green"}
                data={data}
              />
            </View>
          </CardItem>
        </Card>

        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View>
              <DropdownMenu
                style={{ flex: 1 }}
                bgColor={"#ffffff"}
                tintColor={"#666666"}
                activityTintColor={"green"}
                data={data}
              />
            </View>
          </CardItem>
        </Card>
      </View>

      // <View style={{flex: 1}}>
      //   <View style={{height: 64}} />
      //   <DropdownMenu
      //     style={{flex: 1}}

      //     tintColor={'#666666'}
      //     activityTintColor={'green'}
      //     // arrowImg={}
      //     // checkImage={}
      //     // optionTextStyle={{color: '#333333'}}
      //     // titleStyle={{color: '#333333'}}
      //     // maxHeight={300}
      //     // handler={(selection) => this.setState({text: data[selection]})}
      //     data={data}
      //   >

      //   </DropdownMenu>
      // </View>
    );
  }
}
export default Quiz;

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
  checkboxStyle: {
    flex: 1,
    alignItems: "flex-end",
    padding: 5
  },
  nameStyle: {
    
    alignItems: "center",
    justifyContent: "center"
   
  },
  cardStyle: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    height: 60
  }
});
