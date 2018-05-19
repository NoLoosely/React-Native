import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    ScrollView,
  
  } from 'react-native';

import {Actions} from "react-native-router-flux";

export default class Upisi extends Component {
  render() {
    return (

      <View style={{flex: 1}} >

        <View style={{flex: 0.1, borderBottomWidth: 1, borderBottomColor: "white", }} >
          <View  style={{width:"100%", height:"100%", alignItems:"center", justifyContent:"flex-end"}}>
            <Text style={styles.headerText}>UPISI</Text>
          </View>
        </View>


        <View style={{flex: 1,alignItems: "center", justifyContent:"center"}}>
          <View style={{flex: 0.1, width:"90%", height:"100%", justifyContent:"center", /*paddingBottom:"1%", borderBottomColor:"#A3A3A3", borderBottomWidth:1 */}}>
            <Text style={{color:"white", fontSize: 18, fontWeight:"bold"}}>POVIJEST UPISANIH GODINA</Text>
          </View>
        <ScrollView style={{flex: 0.9, width:"90%"}}>
          <View style={{flex: 0.9, width:"100%"}}>

        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,  borderTopColor:"#A3A3A3", borderTopWidth:1}}>
          <TouchableOpacity style={{flex: 1}} onPress={() => Actions.racuni()} >
            <View style={{borderLeftWidth:4, borderLeftColor:"#87DC8F"}}>
                <Text style={styles.listText}>Ak. godina: <Text style={{fontWeight:"bold"}}>2018.</Text></Text>
                <Text style={styles.listText}>Visoko učilište: <Text style={{fontWeight:"bold"}}>Filozofksi fakultet, Zagreb</Text></Text>
                <Text style={styles.listText}>Studij: <Text style={{fontWeight:"bold"}}>Pedagogija</Text></Text>
                <Text style={styles.listText}>Vrsta studija: <Text style={{fontWeight:"bold"}}>Sveučilišni studij</Text></Text>
                <Text style={styles.listText}>Razina studija: <Text style={{fontWeight:"bold"}}>diplomski</Text></Text>
                <Text style={styles.listText}>Godina upisa: <Text style={{fontWeight:"bold"}}>5.</Text></Text>
            </View>
          </TouchableOpacity>
        </View>

          <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1}}>
            <View style={{borderLeftWidth:4, borderLeftColor:"#C3C3C3"}}>
              <Text style={styles.listText}>Ak. godina: <Text style={{fontWeight:"bold"}}>2017.</Text></Text>
              <Text style={styles.listText}>Visoko učilište: <Text style={{fontWeight:"bold"}}>Filozofksi fakultet, Zagreb</Text></Text>
              <Text style={styles.listText}>Studij: <Text style={{fontWeight:"bold"}}>Pedagogija</Text></Text>
              <Text style={styles.listText}>Vrsta studija: <Text style={{fontWeight:"bold"}}>Sveučilišni studij</Text></Text>
              <Text style={styles.listText}>Razina studija: <Text style={{fontWeight:"bold"}}>diplomski</Text></Text>
              <Text style={styles.listText}>Godina upisa: <Text style={{fontWeight:"bold"}}>4.</Text></Text>
            </View>
          </View>


          <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1}}>
            <View style={{borderLeftWidth:4, borderLeftColor:"#C3C3C3"}}>
              <Text style={styles.listText}>Ak. godina: <Text style={{fontWeight:"bold"}}>2016.</Text></Text>
              <Text style={styles.listText}>Visoko učilište: <Text style={{fontWeight:"bold"}}>Filozofksi fakultet, Zagreb</Text></Text>
              <Text style={styles.listText}>Studij: <Text style={{fontWeight:"bold"}}>Pedagogija</Text></Text>
              <Text style={styles.listText}>Vrsta studija: <Text style={{fontWeight:"bold"}}>Sveučilišni studij</Text></Text>
              <Text style={styles.listText}>Razina studija: <Text style={{fontWeight:"bold"}}>preddiplomski</Text></Text>
              <Text style={styles.listText}>Godina upisa: <Text style={{fontWeight:"bold"}}>3.</Text></Text>
            </View>
          </View>

          <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1}}>
            <View style={{borderLeftWidth:4, borderLeftColor:"#C3C3C3"}}>
              <Text style={styles.listText}>Ak. godina: <Text style={{fontWeight:"bold"}}>2015.</Text></Text>
              <Text style={styles.listText}>Visoko učilište: <Text style={{fontWeight:"bold"}}>Filozofksi fakultet, Zagreb</Text></Text>
              <Text style={styles.listText}>Studij: <Text style={{fontWeight:"bold"}}>Pedagogija</Text></Text>
              <Text style={styles.listText}>Vrsta studija: <Text style={{fontWeight:"bold"}}>Sveučilišni studij</Text></Text>
              <Text style={styles.listText}>Razina studija: <Text style={{fontWeight:"bold"}}>preddiplomski</Text></Text>
              <Text style={styles.listText}>Godina upisa: <Text style={{fontWeight:"bold"}}>2.</Text></Text>
            </View>
          </View>

          <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1}}>
            <View style={{borderLeftWidth:4, borderLeftColor:"#C3C3C3"}}>
              <Text style={styles.listText}>Ak. godina: <Text style={{fontWeight:"bold"}}>2014.</Text></Text>
              <Text style={styles.listText}>Visoko učilište: <Text style={{fontWeight:"bold"}}>Filozofksi fakultet, Zagreb</Text></Text>
              <Text style={styles.listText}>Studij: <Text style={{fontWeight:"bold"}}>Pedagogija</Text></Text>
              <Text style={styles.listText}>Vrsta studija: <Text style={{fontWeight:"bold"}}>Sveučilišni studij</Text></Text>
              <Text style={styles.listText}>Razina studija: <Text style={{fontWeight:"bold"}}>preddiplomski</Text></Text>
              <Text style={styles.listText}>Godina upisa: <Text style={{fontWeight:"bold"}}>1.</Text></Text>
            </View>
          </View>


          </View>
          </ScrollView>
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
  },

  listText:{
    color:"white", 
    fontSize: 12, 
    //paddingBottom:"2%", 
    paddingLeft:"2%"
  }
    
});