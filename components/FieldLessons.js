import React, { Component } from "react";
import { Image, Dimensions, FlatList, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  View
} from "native-base";

const resizeComponent = (value, percentage) => {
  return (value = value * (percentage / 100));
};

const Window = {
  Width: Dimensions.get("window").width,
  Height: Dimensions.get("window").height
};

const CardContainer = {
  Width: resizeComponent(Window.Width, 70),
  Height: resizeComponent(Window.Width, 80)
};

class FieldLessons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { line, header, lessonSen } = this.props.lessons;
    console.log(this.props.lessons);
    return (
      <Container>
        <Content style={{ paddingStart: 30, backgroundColor: "#F6F6F6" }}>
          <Card>
            <CardItem style={styles.cardItem}>
              <View>
                <Text style={styles.label}>{header}</Text>
              </View>
              {(() => {
                switch (this.props.lessons.header) {
                  case "LEARNING TIPS":
                    return null;
                  case "STORY":
                    return null;
                    default:
                    return (
                      <View style={{ flexDirection: "row" }}>
                        <Icon name="ios-star" style={{ color: "#FBB027" }} />
                        <Icon name="ios-star" style={{ color: "#FBB027" }} />
                        <Icon name="ios-star" style={{ color: "#FBB027" }} />
                        <Icon name="ios-star" style={{ color: "#FBB027" }} />
                        <Icon name="ios-star" style={{ color: "#FBB027" }} />
                      </View>
                    );
                }
              })()}

              <View>
                <Text note style={styles.label}>
                  {lessonSen}
                </Text>
              </View>
              {(() => {
                switch (this.props.lessons.header) {
                  case "LEARNING TIPS":
                    return (
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.centerCircle}>
                          <Icon
                            name="ios-color-wand"
                            style={{ color: "#FFF" }}
                          />
                        </View>
                        <Icon style={{ color: "#FBB027" }} />
                      </View>
                    );
                  case "STORY":
                    return (
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.centerCircle}>
                          <Icon name="ios-film" style={{ color: "#FFF" }} />
                        </View>
                      </View>
                    );
                    default:
                    return (
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.centerCircle}>
                          <Icon name="ios-refresh" style={{ color: "#FFF" }} />
                        </View>
                        <Icon
                          name="ios-stopwatch"
                          style={{ color: "#FBB027" }}
                        />
                      </View>
                    );
                }
              })()}
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default FieldLessons;
const styles = StyleSheet.create({
  centerCircle: {
    borderRadius: 80,
    height: CardContainer.Width / 3,
    width: CardContainer.Width / 3,
    backgroundColor: "#FBB027",
    alignItems: "center",
    justifyContent: "center"
  },
  cardItem: {
    height: CardContainer.Height,
    width: CardContainer.Width,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
    paddingBottom: 20
  },
  label: {
    fontSize: 20,
    paddingBottom: 20
  }
});
