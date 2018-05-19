import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,

} from 'react-native';

import {Actions} from "react-native-router-flux";


export default class ProfilDetails extends Component {
 render() {
    return (

      <View style={{ flex: 1 }} >

      <View style={{flex: 0.1, borderBottomWidth: 1, borderBottomColor: "white", }} >
        <View  style={{width:"100%", height:"100%", alignItems:"center", justifyContent:"flex-end"}}>
          <Text style={styles.headerText}>IVANA HORVAT</Text>
        </View>
      </View>


        <View style={{ flex: 0.4, alignItems: "center", justifyContent: "center"/*, backgroundColor: "green"*/ }} >
          <TouchableOpacity style={{ width: "90%", height: "100%" }} onPress={() => Actions.upisi()} >
            <View style={{ flex: 0.2, width: "100%", height: "100%", borderBottomWidth: 1, borderBottomColor: "#A3A3A3", paddingBottom: "2%" }}>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Opće informacije</Text>
            </View>
            <View style={{ flex: 0.8, width: "90%", height: "100%", marginTop: "2%" }}>
              <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Datum rođenja: <Text style={{ fontWeight: "bold" }}>01.01.1993.</Text></Text>
              <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Prebivalište: <Text style={{ fontWeight: "bold" }}>Gornja Bučica, 17, 44400, Gornja Bučica</Text></Text>
              <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Boravište: <Text style={{ fontWeight: "bold" }}>ul. Luke Modrića, 13c, 10000 Zagreb</Text></Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.3, alignItems: "center", justifyContent: "center", /*backgroundColor: "white"*/ }} >
          <TouchableOpacity style={{ width: "90%", height: "100%" }} >
            <View style={{ flex: 0.2, width: "100%", height: "100%", borderBottomWidth: 1, borderBottomColor: "#A3A3A3", paddingBottom: "2%" }}>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Studentski dom Dr. Ante Starčević</Text>
            </View>
            <View style={{ flex: 0.8, width: "90%", height: "100%", marginTop: "2%" }}>
              <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Paviljon/soba: <Text style={{ fontWeight: "bold" }}>5/313</Text></Text>
              <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Adresa: <Text style={{ fontWeight: "bold" }}>Zagrebačka avenija 2, 10000 Zagreb</Text></Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.3, alignItems: "center", justifyContent: "center", /*backgroundColor: "red"*/ }} >
          <TouchableOpacity style={{ width: "90%", height: "100%" }} 
           onPress={() => Actions.stanarina()}>
            
            
            
         
            <View style={{ flex: 0.2, width: "100%", height: "100%", borderBottomWidth: 1, borderBottomColor: "#A3A3A3", paddingBottom: "2%" }}>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>ISSP (Studentska prava)</Text>
            </View>
            <View style={{ flex: 0.8, width: "90%", height: "100%", marginTop: "2%" }}>
              <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Visoko učilište: <Text style={{ fontWeight: "bold" }}>Filozofksi fakultet, Zagreb</Text></Text>
              <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Prava do: <Text style={{ fontWeight: "bold" }}>15.10.2018.</Text></Text>
            </View>
          </TouchableOpacity>
        </View>



      </View>

    );
  }
};



const styles = StyleSheet.create({

  navigationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "grey",
  },

  navigationImages: {
    width: "100%",
    height: "50%",
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: "center",

  },

 

});


//export default Profil;
