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

export default class Smjestaj extends Component {
  render() {
    return (

      <View style={{flex: 1}} >

      <View style={{flex: 0.1, borderBottomWidth: 1, borderBottomColor: "white", }} >
        <View  style={{width:"100%", height:"100%", alignItems:"center", justifyContent:"flex-end"}}>
          <Text style={styles.headerText}>SMJEŠTAJ</Text>
        </View>
      </View>


      <View style={{flex: 1,alignItems: "center", justifyContent:"center"}}>
        <View style={{flex: 0.1, width:"90%", height:"100%", justifyContent:"center", /*paddingBottom:"1%", borderBottomColor:"#A3A3A3", borderBottomWidth:1 */}}>
          <Text style={{color:"white", fontSize: 18, fontWeight:"bold"}}>POVIJEST SMJEŠTAJA</Text>
        </View>
      <ScrollView style={{flex: 0.9, width:"90%"}}>
        <View style={{flex: 0.9, width:"100%"}}>

      <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,  borderTopColor:"#A3A3A3", borderTopWidth:1}}>
        <TouchableOpacity onPress={() => Actions.stanarina()}>
            <View style={{borderLeftWidth:4, borderLeftColor:"#87DC8F"}}>
            <Text style={styles.listText}>Dom: <Text style={{fontWeight:"bold"}}>Dr. Ante Starčević</Text></Text>
            <Text style={styles.listText}>Od/Do: <Text style={{fontWeight:"bold"}}>22.09.2018. - 15.07.2019.</Text></Text>
            <Text style={styles.listText}>Paviljon/soba: <Text style={{fontWeight:"bold"}}>5 / 313</Text></Text>
            <Text style={styles.listText}>Kategorija sobe: <Text style={{fontWeight:"bold"}}>II kategorija (CN)</Text></Text>
            <Text style={styles.listText}>Vrsta dokumenta: <Text style={{fontWeight:"bold"}}>Useljenje</Text></Text>
            </View>
        </TouchableOpacity>
      </View>

        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1}}>
          <View style={{borderLeftWidth:4, borderLeftColor:"#C3C3C3"}}>
            <Text style={styles.listText}>Dom: <Text style={{fontWeight:"bold"}}>Dr. Ante Starčević</Text></Text>
            <Text style={styles.listText}>Od/Do: <Text style={{fontWeight:"bold"}}>22.09.2017. - 15.07.2018.</Text></Text>
            <Text style={styles.listText}>Paviljon/soba: <Text style={{fontWeight:"bold"}}>4 / 223</Text></Text>
            <Text style={styles.listText}>Kategorija sobe: <Text style={{fontWeight:"bold"}}>II kategorija (CN)</Text></Text>
            <Text style={styles.listText}>Vrsta dokumenta: <Text style={{fontWeight:"bold"}}>Useljenje</Text></Text>
          </View>
        </View>


        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1}}>
          <View style={{borderLeftWidth:4, borderLeftColor:"#C3C3C3"}}>
            <Text style={styles.listText}>Dom: <Text style={{fontWeight:"bold"}}>Dr. Ante Starčević</Text></Text>
            <Text style={styles.listText}>Od/Do: <Text style={{fontWeight:"bold"}}>22.09.2016. - 15.07.2017.</Text></Text>
            <Text style={styles.listText}>Paviljon/soba: <Text style={{fontWeight:"bold"}}>6 / 423</Text></Text>
            <Text style={styles.listText}>Kategorija sobe: <Text style={{fontWeight:"bold"}}>II kategorija (CN)</Text></Text>
            <Text style={styles.listText}>Vrsta dokumenta: <Text style={{fontWeight:"bold"}}>Useljenje</Text></Text>
          </View>
        </View>

        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1}}>
          <View style={{borderLeftWidth:4, borderLeftColor:"#C3C3C3"}}>
            <Text style={styles.listText}>Dom: <Text style={{fontWeight:"bold"}}>Dr. Ante Starčević</Text></Text>
            <Text style={styles.listText}>Od/Do: <Text style={{fontWeight:"bold"}}>22.09.2015. - 15.07.2016.</Text></Text>
            <Text style={styles.listText}>Paviljon/soba: <Text style={{fontWeight:"bold"}}>1 / 10</Text></Text>
            <Text style={styles.listText}>Kategorija sobe: <Text style={{fontWeight:"bold"}}>II kategorija (CN)</Text></Text>
            <Text style={styles.listText}>Vrsta dokumenta: <Text style={{fontWeight:"bold"}}>Useljenje</Text></Text>
          </View>
        </View>

        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1}}>
          <View style={{borderLeftWidth:4, borderLeftColor:"#C3C3C3"}}>
            <Text style={styles.listText}>Dom: <Text style={{fontWeight:"bold"}}>Dr. Ante Starčević</Text></Text>
            <Text style={styles.listText}>Od/Do: <Text style={{fontWeight:"bold"}}>22.09.2014. - 15.07.2015.</Text></Text>
            <Text style={styles.listText}>Paviljon/soba: <Text style={{fontWeight:"bold"}}>2 / 502</Text></Text>
            <Text style={styles.listText}>Kategorija sobe: <Text style={{fontWeight:"bold"}}>II kategorija (CN)</Text></Text>
            <Text style={styles.listText}>Vrsta dokumenta: <Text style={{fontWeight:"bold"}}>Useljenje</Text></Text>
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
