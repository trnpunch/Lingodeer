import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight
} from "react-native";
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
class FieldLearn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _onPressItem = item => {
    this.props.navigation.navigate(item.key, { type: item });
  };

  render() {
    // const { key, number,line } = this.props.labelTest;

    const { line, key, number } = this.props.labelTest;
    // const styleCardContainerStart =
    //   key == "DayStreaks" ? styles.cardContainerStart : null;
    const styleCardContainerBorder =
      line % 2 == 0 ? styles.borderLeft : styles.borderRight;
    const styleHide =
      line >= 10 ? styles.borderHide : null;
    const testHide =
      line >= 10 ? styles.textStyleHide : null;
      
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flex: 1, flexWrap: "wrap" }}>
            <View
              style={[
                styles.cardContainer,
                
                //styleCardContainerStart,
                styleCardContainerBorder,
                styleHide,
              ]}
            >
              {(() => {
                switch (this.props.labelTest.key) {
                  case "Alphabet":
                    return <Image source={require("./../image/Alphabet.jpg")} style={styles.imageLearn}  />
                  case "Determiner":
                    return <Image source={require("./../image/Determiner.jpg")} style={styles.imageLearn} />
                  case "Nationally":
                    return <Image source={require("./../image/Nationally.jpg")} style={styles.imageLearn} /> 
                  case "Greetings":
                    return <Image source={require("./../image/Greetings.jpg")} style={styles.imageLearn}  />
                  case "Possessive":
                    return <Image  source={require("./../image/Possessive.jpg")} style={styles.imageLearn} /> 
                  case "Question":
                    return <Image source={require("./../image/Question.jpg")}  style={styles.imageLearn} /> 
                  case "Negation":
                    return <Image  source={require("./../image/Negation.jpg")}  style={styles.imageLearn} />     
                  case "TEST OUT":
                    return <Image  source={require("./../image/TestOut.jpg")}   style={styles.imageLearn}   /> 
                  case "Location":
                    return <Image source={require("./../image/Location.jpg")} style={styles.imageLearn} />
                  case "Color":
                    return <Image source={require("./../image/Color.jpg")} style={styles.imageLearn} /> 
                  case "Existence":
                    return <Image source={require("./../image/Existence.jpg")} style={styles.imageLearn} /> 
                  case "Spatial Relation":
                    return <Image source={require("./../image/SpatialRelation.jpg")}  style={styles.imageLearn} />     
                  case "TEST OUT2":
                    return <Image source={require("./../image/TESTOUT2.jpg")} style={styles.imageLearn}  /> 
                  case "Family":
                    return <Image source={require("./../image/Family.jpg")} style={styles.imageLearn}  /> 
                  case "DayStreaks":
                    return null;
                  case "LevelUp":
                    return null;
                  default:
                    return <Image  source={require("./../image/Negation.jpg")} style={styles.imageLearn}  />
                }
              })()}
         
              <Text style={[styles.textStyle,testHide]}> {key} </Text>
              <Text note> {number} </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default FieldLearn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  cardContainer: {
    height: CardContainer.Width,
    width: CardContainer.Width,
    backgroundColor: "rgb(246,246,246)",
    borderBottomColor: "rgb(253,192,56)",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2
  },
  cardContainerStart: {
    height: 80,
    width: CardContainer.Width,
    backgroundColor: "rgb(246,246,246)",
    borderBottomColor: "rgb(253,192,56)",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2
  },
  imageLearn: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center"
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: "rgb(253,192,56)"
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: "rgb(253,192,56)"
  },
  borderHide:{
    borderRightWidth: 1,
    borderRightColor: '#E1E7EE',
    borderBottomColor: '#E1E7EE',
    borderLeftColor: '#E1E7EE',
  },
  textStyleHide: {
    fontSize: 18,
    color: "#8E8E8E",
    fontWeight: "bold"
  },
  buttonText: {
    padding: 20,
    color: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 18,
    color: "#FBB027",
    fontWeight: "bold"
  }
});
// const { item } = this.props;
// const theItems = item.map(item => {
//   const styleCardContainerStart =
//     item.key == "DayStreaks" ? styles.cardContainerStart : null;
//   const styleCardContainerBorder =
//     item.line % 2 == 0 ? styles.borderLeft : styles.borderRight;
//   return (
//     <View key={item.line}>
//       <View style={{ flex: 1, flexWrap: "wrap" }}>
//         <View
//           style={[
//             styles.cardContainer,
//             styleCardContainerStart,
//             styleCardContainerBorder
//           ]}
//         >
//           <Image
//             source={require("./../image/brain.png")}
//             style={{
//               width: 50,
//               height: 50,
//               justifyContent: "center",
//               alignItems: "center"
//             }}
//           />
//           <Text>{item.key}</Text>
//           <Text>{item.number}</Text>
//         </View>
//       </View>
//     </View>
//   );
// });
// return <View style={styles.container}>{theItems}</View>;
