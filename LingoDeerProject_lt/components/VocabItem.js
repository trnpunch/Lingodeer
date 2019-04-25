import React, { Component } from "react";
import { Card, CardItem, CheckBox, Icon, Picker, Form } from "native-base";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import DropdownMenu from "react-native-dropdown-menu";

class VocabItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }

  ShowHideTextComponentView = () => {
    if (this.state.status == true) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };

  render() {
    // let { id, cat, Vocab } = this.props.vocabTest;
    var data = [["C", "Java", "JavaScript", "PHP"]];
    return (
      <View style={styles.container}>
        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View style={styles.nameStyle}>
              <Text
                style={styles.label}
                onPress={this.ShowHideTextComponentView}
              >
                Nationality
              </Text>
            </View>

            {this.state.status ? (
              <View>
                <CardItem>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.label}>Hello Friends</Text>
                    
                  </View>
                </CardItem>
              </View>
            ) : null}

            <View style={styles.checkboxStyle}>
              <CheckBox checked={true} color="#ffcc5c" />
            </View>
          </CardItem>
        </Card>

        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View style={styles.nameStyle}>
              <Text style={styles.label}>Nationality</Text>
            </View>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={false} color="#ffcc5c" />
            </View>
          </CardItem>
        </Card>
        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View style={styles.nameStyle}>
              <Text style={styles.label}>Nationality</Text>
            </View>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={false} color="#ffcc5c" />
            </View>
          </CardItem>
        </Card>
        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View style={styles.nameStyle}>
              <Text style={styles.label}>Nationality</Text>
            </View>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={false} color="#ffcc5c" />
            </View>
          </CardItem>
        </Card>
        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View style={styles.nameStyle}>
              <Text style={styles.label}>Nationality</Text>
            </View>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={false} color="#ffcc5c" />
            </View>
          </CardItem>
        </Card>
        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View style={styles.nameStyle}>
              <Text style={styles.label}>Nationality</Text>
            </View>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={false} color="#ffcc5c" />
            </View>
          </CardItem>
        </Card>
        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View style={styles.nameStyle}>
              <Text style={styles.label}>Nationality</Text>
            </View>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={false} color="#ffcc5c" />
            </View>
          </CardItem>
        </Card>
        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View style={styles.nameStyle}>
              <Text style={styles.label}>Nationality</Text>
            </View>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={false} color="#ffcc5c" />
            </View>
          </CardItem>
        </Card>
        <Card transparent style={styles.cardStyle}>
          <CardItem>
            <View style={styles.nameStyle}>
              <Text style={styles.label}>Nationality</Text>
            </View>
            <View style={styles.checkboxStyle}>
              <CheckBox checked={false} color="#ffcc5c" />
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default VocabItem;

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
    flex: 1,
    alignItems: "flex-start",
    padding: 5
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
