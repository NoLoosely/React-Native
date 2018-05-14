import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
  
  } from 'react-native';


export default class Profil extends Component {
  render() {
    return (

        <View style={{flex: 1}} >
       
          <View style={{flex: 0.2, flexDirection:"row", alignItems: "flex-end", justifyContent:"center"}} >
            <View style={styles.navigationContainer} >
              <View style={styles.navigationImages}>
                  <Image  source={require("../Images/ProfilPage/logo.png")} /> 
                  <View style={{width:"100%",  borderBottomWidth: 1, borderBottomColor: "white", paddingBottom: "2%"}} />
              </View>
            </View>
          </View>
        
       
        {/*Slika i osnovne informacije*/}
          <View style={{flex:0.4, flexDirection:"row", alignItems: "center", justifyContent:"center", }} >
            <View style={styles.imageContainer}>
              <View style={styles.profileImage}>
                  <Image source={require("../Images/ProfilPage/Avatar.png")} />
              </View>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>JMBAG: 02030035512</Text>
                <Text style={{color:"white", fontSize:25}}>IVANA<Text style={{fontWeight:"bold"}}>HORVAT</Text></Text>
                <View style={{flexDirection:"row"}}>
                  <View style={{justifyContent:"center", marginRight:"3%"}}>
                    <Image source={require("../Images/ProfilPage/envelope.png")} />
                  </View>
                  <Text style={styles.infoText}>ivana.horvat@gmail.com</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <View style={{justifyContent:"center", marginRight:"3%"}}>
                    <Image source={require("../Images/ProfilPage/telephone.png")} />
                  </View>
                  <Text style={styles.infoText}>+385 99 2000 238</Text>
                </View>
            </View>
          </View>

          <View style={{ flex:0.4,  alignItems: "center", justifyContent:"center", backgroundColor: "#933A3A", borderRadius: 15, margin:10}} >
            <View style={{flex:0.2,  width:"90%", height:"100%", borderBottomWidth: 1, borderBottomColor: "white", paddingBottom: "2%"}}>
              <Text style={{color:"white", fontSize: 18, fontWeight:"bold"}}>Obavijest</Text>
            </View>
            <View style={{flex:0.8, width:"90%", height:"100%", marginTop: "2%"}}>
              <Text style={{color:"white"}}>Imate neplaćenih računa u iznosu od <Text style={{fontWeight:"bold"}}>900,00 kn:</Text></Text>
              <Text style={{color:"white", fontSize: 12, marginLeft:"5%"}}>- stanarina za 3. mjesec u iznosu od <Text style={{fontWeight:"bold",fontSize: 12}}>300,00 kn</Text></Text>
              <Text style={{color:"white", fontSize: 12, marginLeft:"5%"}}>- stanarina za 4. mjesec u iznosu od <Text style={{fontWeight:"bold",fontSize: 12}}>300,00 kn</Text></Text>
              <Text style={{color:"white", fontSize: 12, marginLeft:"5%"}}>- stanarina za 5. mjesec u iznosu od <Text style={{fontWeight:"bold",fontSize: 12}}>300,00 kn</Text></Text>
            </View>
           </View>


           <View style={{ flex:0.4,  alignItems: "center", justifyContent:"center"/*, backgroundColor: "green"*/}} >
            <TouchableOpacity style={{ width:"90%", height:"100%"}} >
                <View style={{flex:0.2,  width:"100%", height:"100%", borderBottomWidth: 1, borderBottomColor: "#A3A3A3", paddingBottom: "2%"}}>
                  <Text style={{color:"white", fontSize: 18, fontWeight:"bold"}}>Opće informacije</Text>
                </View>
                <View style={{flex:0.8, width:"90%", height:"100%", marginTop: "2%"}}>
                  <Text style={{color:"white", fontSize: 12, paddingBottom:"2%"}}>Datum rođenja: <Text style={{fontWeight:"bold"}}>01.01.1993.</Text></Text>
                  <Text style={{color:"white", fontSize: 12, paddingBottom:"2%"}}>Prebivalište: <Text style={{fontWeight:"bold"}}>Gornja Bučica, 17, 44400, Gornja Bučica</Text></Text>
                  <Text style={{color:"white", fontSize: 12, paddingBottom:"2%"}}>Boravište: <Text style={{fontWeight:"bold"}}>ul. Luke Modrića, 13c, 10000 Zagreb</Text></Text>
                </View>
              </TouchableOpacity>
           </View>

           <View style={{flex:0.3, alignItems: "center", justifyContent:"center", /*backgroundColor: "white"*/}} >
            <TouchableOpacity style={{ width:"90%", height:"100%"}} >
                <View style={{flex:0.2,  width:"100%", height:"100%", borderBottomWidth: 1, borderBottomColor: "#A3A3A3", paddingBottom: "2%"}}>
                  <Text style={{color:"white", fontSize: 18, fontWeight:"bold"}}>Studentski dom Dr. Ante Starčević</Text>
                </View>
                <View style={{flex:0.8, width:"90%", height:"100%", marginTop: "2%"}}>
                  <Text style={{color:"white", fontSize: 12, paddingBottom:"2%"}}>Paviljon/soba: <Text style={{fontWeight:"bold"}}>5/313</Text></Text>
                  <Text style={{color:"white", fontSize: 12, paddingBottom:"2%"}}>Adresa: <Text style={{fontWeight:"bold"}}>Zagrebačka avenija 2, 10000 Zagreb</Text></Text>
                </View>
              </TouchableOpacity>
           </View>

          <View style={{flex:0.3, alignItems: "center", justifyContent:"center", /*backgroundColor: "red"*/}} >
            <TouchableOpacity style={{ width:"90%", height:"100%"}} >
              <View style={{flex:0.2,  width:"100%", height:"100%", borderBottomWidth: 1, borderBottomColor: "#A3A3A3", paddingBottom: "2%"}}>
                <Text style={{color:"white", fontSize: 18, fontWeight:"bold"}}>ISSP (Studentska prava)</Text>
              </View>
                <View style={{flex:0.8, width:"90%", height:"100%", marginTop: "2%"}}>
                <Text style={{color:"white", fontSize: 12, paddingBottom:"2%"}}>Visoko učilište: <Text style={{fontWeight:"bold"}}>Filozofksi fakultet, Zagreb</Text></Text>
                <Text style={{color:"white", fontSize: 12, paddingBottom:"2%"}}>Prava do: <Text style={{fontWeight:"bold"}}>15.10.2018.</Text></Text>
              </View>
            </TouchableOpacity>
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
      

      //Avatar - basic info
      profileImage:{
        width: "60%",
        height: "60%",
      },

      imageContainer:{
        flex:0.35, 
        alignItems: "center", 
        justifyContent:"center", 
        //backgroundColor: "red", 
        width: "100%", 
        height: "100%",
      },
      infoContainer:{
        flex:0.65, 
        alignItems: "flex-start", 
        justifyContent:"center",
        //backgroundColor: "green",
        width: "100%", 
        height: "60%",
      },
      infoText:{
        color:"white",
      },
      

      //kraj
  
});