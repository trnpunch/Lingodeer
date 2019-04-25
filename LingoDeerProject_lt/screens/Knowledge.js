import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
class Knowledge extends Component {
    static navigationOptions = {
        title: "Knowledge"
      };
      constructor(props) {
        super(props);
        this.state = {
          status:true
        };
      }
    
      ShowHideTextComponentView = () =>{
 
        if(this.state.status == true)
        {
          this.setState({status: false})
        }
        else
        {
          this.setState({status: true})
        }
      }

      render() {
        return (
          <View style={styles.MainContainer}>
 
      {
          // Pass any View or Component inside the curly bracket.
          // Here the ? Question Mark represent the ternary operator.
 
        this.state.status ? <Text style= {{ fontSize: 25, color: "#000", textAlign: 'center' }}> Hello Friends </Text> : null
      }
 
      <Button title="Hide Text Component" onPress={this.ShowHideTextComponentView} />
 
      </View>
        );
      }
}

export default Knowledge;


const styles = StyleSheet.create({
 
  MainContainer :{
   
  // Setting up View inside content in Vertically center.
  justifyContent: 'center',
  flex:1,
  margin: 10
   
  }
   
  });