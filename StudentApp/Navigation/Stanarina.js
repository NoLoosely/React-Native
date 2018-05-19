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

  import Hr from "react-native-hr-component"; //trenutno se ne koristi...

  import {Actions} from "react-native-router-flux";

export default class Stanarina extends Component {
  render() {
    return (

      <View style={{flex: 1}} >

      <View style={{flex: 0.1, borderBottomWidth: 1, borderBottomColor: "white", }} >
        <View  style={{width:"100%", height:"100%", alignItems:"center", justifyContent:"flex-end"}}>
          <Text style={styles.headerText}>STANARINA</Text>
        </View>
      </View>


      <View style={{flex: 1,alignItems: "center", justifyContent:"center"}}>
        <View style={{flex: 0.1, width:"90%", height:"100%", justifyContent:"center", borderBottomColor:"#A3A3A3", borderBottomWidth:1 }}>
          <Text style={{color:"white", fontSize: 18, fontWeight:"bold"}}>PLAĆANJA</Text>
        </View>

        <View style={{flex:0.06, flexDirection:"row", width:"90%", height:"100%", justifyContent:"center", alignItems:"center", borderBottomColor:"#A3A3A3", borderBottomWidth:1}}>
              <View style={{width:"50%"}}>
                <View style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"flex-start", paddingLeft:"5%"}}>
                  <Text style={styles.listTextHeader}>Opis</Text>
                </View>
              </View>  
              <View style={{width:"30%", paddingRight:"5%"}}>
                <View style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"flex-end"}}>
                  <Text style={styles.listTextHeader}>Iznos</Text>
                </View>  
              </View>  

               <View style={{width:"20%"}}>
                <View style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"flex-end", paddingRight:"5%"}}>
                  
                </View>  
              </View> 
        </View>
        
      <ScrollView style={{flex: 0.8, width:"90%"}}>
        <View style={{flex: 0.8, width:"100%", /*backgroundColor:"blue"*/}}>

        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,/* borderTopColor:"#A3A3A3", borderTopWidth:1 */}}>
          <View style={{flexDirection:"row"}}>

            <View style={{flexDirection:"row", width:"50%",justifyContent:"center", }}>
              <View style={{flex:0.2, alignItems:"flex-start", marginTop:"3%", marginBottom:"3%"}}>
                <Image style={{alignSelf:"center"}} source={require("../Images/Stanarina/notif.png")} />
              </View>
              <View style={{flex:0.8, justifyContent:"center"}}>
               <Text style={styles.listText}>Stanarina 3/2018</Text>
              </View>
            </View>

            <View style={{width:"30%", justifyContent:"center", alignItems:"flex-end",paddingRight:"5%"}}>
              <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>300,00 kn</Text></Text>
            </View>
            <View style={{width:"20%"}}>
              <TouchableOpacity style={{flex:1,width:"80%", height:"100%", justifyContent:"center", alignItems:"center", alignSelf:"center", backgroundColor:"#24BD3D", borderRadius:10}}>
                <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>PLATI</Text></Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>



        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,/* borderTopColor:"#A3A3A3", borderTopWidth:1 */}}>
          <View style={{flexDirection:"row"}}>

            <View style={{flexDirection:"row", width:"50%", justifyContent:"center", }}>
              <View style={{flex:0.2, alignItems:"flex-start", marginTop:"3%", marginBottom:"3%"}}>
                <Image style={{alignSelf:"center"}} source={require("../Images/Stanarina/notif.png")} />
              </View>
              <View style={{flex:0.8, justifyContent:"center"}}>
               <Text style={styles.listText}>Stanarina 4/2018</Text>
              </View>
            </View>

            <View style={{width:"30%", justifyContent:"center", alignItems:"flex-end",paddingRight:"5%"}}>
              <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>300,00 kn</Text></Text>
            </View>
            <View style={{width:"20%",}}>
              <TouchableOpacity style={{flex:1,width:"80%", height:"100%", justifyContent:"center", alignItems:"center", alignSelf:"center", backgroundColor:"#24BD3D", borderRadius:10}}>
                <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>PLATI</Text></Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>



        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,/* borderTopColor:"#A3A3A3", borderTopWidth:1 */}}>
          <View style={{flexDirection:"row"}}>

            <View style={{flexDirection:"row", width:"50%", justifyContent:"center",alignItems:"flex-start", marginTop:"3%", marginBottom:"3%"}}>
              <View style={{flex:1, alignItems:"flex-start"}}>
                <Text style={styles.listText}>Stanarina 5/2018</Text>
              </View>
            </View>

            <View style={{width:"30%", justifyContent:"center", alignItems:"flex-end", paddingRight:"5%"}}>
              <Text style={styles.listText}><Text style={{fontWeight:"bold", justifyContent:"center"}}>300,00 kn</Text></Text>
            </View>

            <View style={{width:"20%"}}>
              <TouchableOpacity style={{flex:1,width:"80%", height:"100%", justifyContent:"center", alignItems:"center", alignSelf:"center", backgroundColor:"#24BD3D", borderRadius:10,marginTop:"3%", marginBottom:"3%"}}>
                <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>PLATI</Text></Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>




        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,/* borderTopColor:"#A3A3A3", borderTopWidth:1 */}}>
          <View style={{flexDirection:"row"}}>

            <View style={{flexDirection:"row", width:"50%", justifyContent:"center",alignItems:"flex-start", marginTop:"3%", marginBottom:"3%"}}>
              <View style={{flex:1, alignItems:"flex-start"}}>
                <Text style={styles.listText}>Stanarina 6/2018</Text>
              </View>
            </View>

            <View style={{width:"30%", justifyContent:"center", alignItems:"flex-end", paddingRight:"5%"}}>
              <Text style={styles.listText}><Text style={{fontWeight:"bold", justifyContent:"center"}}>300,00 kn</Text></Text>
            </View>

            <View style={{width:"20%"}}>
              <TouchableOpacity style={{flex:1,width:"80%", height:"100%", justifyContent:"center", alignItems:"center", alignSelf:"center", backgroundColor:"#24BD3D", borderRadius:10,marginTop:"3%", marginBottom:"3%"}}>
                <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>PLATI</Text></Text>
              </TouchableOpacity>
            </View>

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

  listTextHeader:{
    color:"white", 
    fontSize: 14, 
    //paddingBottom:"2%", 
    paddingLeft:"2%",
    fontWeight: "bold", 
  },

  listText:{
    color:"white", 
    fontSize: 12, 
    //paddingBottom:"2%", 
    paddingLeft:"2%",
  },



    
});