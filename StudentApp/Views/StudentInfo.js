import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
  
  } from 'react-native';

  import Hr from "react-native-hr-component";

export default class StudentInfo extends Component {
  render() {
    return (

        <View style={{flex: 1}} >

        <View style={{flex: 0.2, flexDirection:"row", alignItems: "center", justifyContent:"center"}} >
          <View style={styles.navigationContainer} >
            <View style={styles.navigationImages}>
                <Text style={styles.headerText}>STANARINA</Text>
                <View style = {{borderBottomWidth: StyleSheet.hairlineWidth, borderColor:'white'}} />
                <Text/><Text/>
                <Hr  lineColor="white" width={1}/>
            </View>
          </View>
        </View>


          <View style={{flex:1, alignItems: "center", justifyContent: "center"}} >
            <Text style={{color: "white"}} > Student info... </Text>
          </View>
         
        
        </View>

    );
  }
}

const styles = StyleSheet.create({

  navigationContainer:{
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    //backgroundColor: "grey",
  },

  navigationImages:{
    width: "100%",
    height: "50%",
   // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: "center",
   
  },

  headerText:{
    color: "white",
    fontSize: 30,
    fontWeight: 'bold',
  }
    
});