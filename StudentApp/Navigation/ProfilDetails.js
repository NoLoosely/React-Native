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


export default class ProfilDetails extends Component {
 render() {
    return (

      <View style={{ flex: 1 }} >

       <View style={{flex: 0.1, flexDirection:"row", borderBottomWidth: 1, borderBottomColor: "white", }} >
        <TouchableOpacity style={{width:"10%", height:"100%"}} onPress={() => Actions.profil()}>
          <View  style={{width:"100%", height:"100%", alignItems:"center", justifyContent:"flex-end", paddingBottom:"20%"}}>
            <Image style={{width:"30%", height:"30%"}} source={require("../Images/ProfilPage/backBtn.png")}/>
          </View>
        </TouchableOpacity>
        <View  style={{width:"100%", height:"100%", alignItems:"center", justifyContent:"flex-end", marginLeft:"-10%"}}>
          <Text style={styles.headerText}>IVANA HORVAT</Text>
        </View>
      </View>

      <ScrollView style={{flex: 0.9, width:"100%"}}>
        <View style={{ flex: 0.4, alignItems: "center", justifyContent: "center", paddingBottom: "2%", paddingTop:"10%" /*, backgroundColor: "green"*/ }} >
          <View style={{ flex: 0.2, justifyContent:"flex-end", width: "90%", height: "100%", borderBottomWidth: 1, borderBottomColor: "#A3A3A3", paddingBottom: "2%" }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Opće informacije</Text>
          </View>
          <View style={{ flex: 0.8, width: "90%", height: "100%", marginTop: "2%" }}>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Vrsta studenta: <Text style={{ fontWeight: "bold" }}>Domaći student</Text></Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Mobitel: <Text style={{ fontWeight: "bold" }}>+385 99 2000 238</Text></Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Mail: <Text style={{ fontWeight: "bold" }}>ivana.horvat@gmail.com</Text></Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>OIB: <Text style={{ fontWeight: "bold" }}>85698844215</Text></Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>JMBAG: <Text style={{ fontWeight: "bold" }}>1234512498</Text></Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Mat. Br.: <Text style={{ fontWeight: "bold" }}>32014540</Text></Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Datum rođenja: <Text style={{ fontWeight: "bold" }}>01.01.1993</Text></Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Država/Mjesto rođenja: <Text style={{ fontWeight: "bold" }}>Hrvatska, -</Text></Text>
          </View>
        </View>

        <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center", paddingBottom: "3%"/*, backgroundColor: "green"*/ }} >
          <View style={{ flex: 0.2, justifyContent: "flex-end", width: "90%", height: "100%", borderBottomWidth: 1, borderBottomColor: "#A3A3A3", paddingBottom: "2%" }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Boravište</Text>
          </View>
          <View style={{ flex: 0.8, width: "90%", height: "100%", marginTop: "2%" }}>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Boravište: <Text style={{ fontWeight: "bold" }}>10 000, Zagreb</Text></Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Ulica, broj: <Text style={{ fontWeight: "bold" }}>ul. Luke Modrića, 13c</Text></Text>
          </View>
        </View>

        <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center", paddingBottom: "3%"/*, backgroundColor: "green"*/ }} >
          <View style={{ flex: 0.2, justifyContent: "flex-end", width: "90%", height: "100%", borderBottomWidth: 1, borderBottomColor: "#A3A3A3", paddingBottom: "2%" }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Prebivalište</Text>
          </View>
          <View style={{ flex: 0.8, width: "90%", height: "100%", marginTop: "2%" }}>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Naselje: <Text style={{ fontWeight: "bold" }}>44 400, Gornja Bučica</Text></Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Ulica, broj: <Text style={{ fontWeight: "bold" }}>Gornja Bučica, 17</Text></Text>
          </View>
        </View>


        <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center", /*backgroundColor: "red"*/ }} >
          <View style={{ flex: 0.2, width: "90%", height: "100%", borderBottomWidth: 1, borderBottomColor: "#A3A3A3", paddingBottom: "2%" }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>ISSP (Studentska prava)</Text>
          </View>
          <View style={{ flex: 0.8, width: "90%", height: "100%", marginTop: "2%" }}>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Visoko učilište: <Text style={{ fontWeight: "bold" }}>Filozofksi fakultet, Zagreb</Text></Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Prava do: <Text style={{ fontWeight: "bold" }}>15.10.2018.</Text></Text>
          </View>
        </View>

      </ScrollView>
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
  headerText:{
    color: "white",
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerTest:{
    color: "white",
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: "-5%",
  },

});


//export default Profil;
