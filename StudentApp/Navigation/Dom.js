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


export default class Dom extends Component {
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
          <Text style={styles.headerText}>Dr. Ante Starčević</Text>
        </View>
      </View>

      <ScrollView style={{flex: 0.9, width:"100%"}}>
        <View style={{ flex: 0.4, /*paddingBottom: "5%", paddingTop:"10%" ,*/ backgroundColor: "green", borderBottomWidth: 1, borderBottomColor: "white" }} >
          <Image style={{width:"100%", height:200, alignSelf:"center"}} source={require("../Images/ProfilPage/Dom/dom.png")}/>
        </View>

        {/*Kontakt*/}
        <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center", marginTop:"7%", paddingBottom: "5%"/*, backgroundColor: "green"*/ }} >
          <View style={{ flex: 0.2, justifyContent: "flex-end", width: "90%", height: "100%", borderBottomWidth: 1, borderBottomColor: "#A3A3A3", paddingBottom: "2%" }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Kontakt:</Text>
          </View>
          <View style={{ flex: 0.8, width: "90%", height: "100%", marginTop: "2%" }}>
           <View style={{flex:1, flexDirection:"row"}}>
                <View style={{flex:1, width:"70%",  alignItems: "flex-start", }}>
                    <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Tel. porte: <Text style={{ fontWeight: "bold" }}>01 4590 840</Text></Text>
                    <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Blagajna: <Text style={{ fontWeight: "bold" }}>01 4590 841</Text></Text>
                </View>
                <View style={{flex:0.5, width:"20%", height:"100%", alignItems: "flex-end"}}>
                    <View style={{height:"100%", width:"70%", alignSelf:"flex-end", justifyContent:"center"}}>
                        <Image style={{height:"80%", width:"80%", marginTop:"7%"}} source={require("../Images/ProfilPage/Dom/Telefon.png")}/>
                    </View>
                </View>
            </View>
            <View style={{flex:1,  flexDirection:"row"}}>
                <View style={{flex:1, width:"70%",  alignItems: "flex-start", }}>
                    <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Uprava: <Text style={{ fontWeight: "bold" }}>01 4590 842; 01 45890 843</Text></Text>
                    <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Mail: <Text style={{ fontWeight: "bold" }}>andreja.begic@sczg.hr</Text></Text>
                </View>
                <View style={{flex:0.5, width:"20%", height:"100%", alignItems: "flex-end"}}>
                    <View style={{height:"100%", width:"70%", alignSelf:"flex-end", justifyContent:"center"}}>
                        <Image style={{height:"80%", width:"80%", marginTop:"7%"}} source={require("../Images/ProfilPage/Dom/Mail.png")}/>
                    </View>
                </View>
            </View>
          </View>
        </View>




        <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center", paddingBottom: "5%"/*, backgroundColor: "green"*/ }} >
          <View style={{ width: "90%", height: "100%", marginTop: "2%",  borderBottomWidth: 1, borderBottomColor: "#A3A3A3" }}>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Upravitelj: <Text style={{ fontWeight: "bold" }}>Pejo Pavlović, tel. 01 4590 842</Text></Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>Adresa: <Text style={{ fontWeight: "bold" }}>Zagrebačka avenija 2, 10 000, Zagreb</Text></Text>
          </View>
        </View>


        <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center", /*backgroundColor: "red"*/ }} >
          <View style={{ width: "90%", height: "100%"}}>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>
              Studentsko naselje "Dr. Ante Starčević" čine 3 paviljona, sveukupno 1237 kreveta
              u dvokrevetnim i jednokrevetnim sobama s kupaonama.
            </Text>
            <Text style={{ color: "white", fontSize: 12, paddingBottom: "2%" }}>
              U svakoj sobi je dostupan pristup internetu i hladnjaku, na svakom katu je učionica,
              praonica rublja i čajna kuhinja.
            </Text>
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
