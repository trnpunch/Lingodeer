import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from "./navigation/AppNavigator"
export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <View style={styles.containerTitle}>
      //     <Text style={styles.title}> LINGODEER </Text>

      //   </View>
        
      // </View>
      <View style={styles.container}>
      <AppContainer/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
