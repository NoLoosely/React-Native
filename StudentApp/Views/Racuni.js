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


export default class Stanarina extends Component {
  render() {
    return (

      <View style={{flex: 1}} >

      <View style={{flex: 0.1, borderBottomWidth: 1, borderBottomColor: "white", }} >
        <View  style={{width:"100%", height:"100%", alignItems:"center", justifyContent:"flex-end"}}>
          <Text style={styles.headerText}>RAČUNI</Text>
        </View>
      </View>


      <View style={{flex: 1,alignItems: "center", justifyContent:"center"}}>
        <View style={{flex: 0.1, width:"90%", height:"100%", justifyContent:"center", borderBottomColor:"#A3A3A3", borderBottomWidth:1 }}>
          <Text style={{color:"white", fontSize: 18, fontWeight:"bold"}}>POVIJEST RAČUNA</Text>
        </View>

        <View style={{flex:0.06, flexDirection:"row", width:"90%", height:"100%", justifyContent:"center", alignItems:"center", borderBottomColor:"#A3A3A3", borderBottomWidth:1}}>
              <View style={styles.headerContainerBill}>
                <Text style={styles.listTextHeader}>Br. računa</Text>
              </View>  
              <View style={styles.headerContainerDate}>
                <Text style={styles.listTextHeader}>Datum</Text>
              </View>  
              <View style={styles.headerContainerCost}>
                <Text style={styles.listTextHeader}>Iznos</Text>
              </View>  
        </View>
        
      <ScrollView style={{flex: 0.8, width:"90%"}}>
        <View style={{flex: 0.8, width:"100%", /*backgroundColor:"blue"*/}}>

        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,/* borderTopColor:"#A3A3A3", borderTopWidth:1 */}}>
          <View style={{flexDirection:"row"}}>

            <View style={styles.headerContainerBill}>
              <Text style={styles.listText}>2145/56</Text>
            </View>
            <View style={styles.headerContainerDate}>
              <Text style={styles.listText}>22.08.2017.</Text>
            </View>
            <View style={styles.headerContainerCost}>
              <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>400,00 kn</Text></Text>
            </View>

          </View>
        </View>



        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,/* borderTopColor:"#A3A3A3", borderTopWidth:1 */}}>
          <View style={{flexDirection:"row"}}>

            <View style={styles.headerContainerBill}>
              <Text style={styles.listText}>2123/586</Text>
            </View>
            <View style={styles.headerContainerDate}>
              <Text style={styles.listText}>12.07.2017.</Text>
            </View>
            <View style={styles.headerContainerCost}>
              <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>500,00 kn</Text></Text>
            </View>

          </View>
        </View>

        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,/* borderTopColor:"#A3A3A3", borderTopWidth:1 */}}>
          <View style={{flexDirection:"row"}}>

            <View style={styles.headerContainerBill}>
              <Text style={styles.listText}>720/586/1</Text>
            </View>
            <View style={styles.headerContainerDate}>
              <Text style={styles.listText}>07.06.2017.</Text>
            </View>
            <View style={styles.headerContainerCost}>
              <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>50,00 kn</Text></Text>
            </View>

          </View>
        </View>


        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,/* borderTopColor:"#A3A3A3", borderTopWidth:1 */}}>
          <View style={{flexDirection:"row"}}>

            <View style={styles.headerContainerBill}>
              <Text style={styles.listText}>220/945/1</Text>
            </View>
            <View style={styles.headerContainerDate}>
              <Text style={styles.listText}>21.05.2017.</Text>
            </View>
            <View style={styles.headerContainerCost}>
              <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>250,00 kn</Text></Text>
            </View>

          </View>
        </View>


        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,/* borderTopColor:"#A3A3A3", borderTopWidth:1 */}}>
          <View style={{flexDirection:"row"}}>

            <View style={styles.headerContainerBill}>
              <Text style={styles.listText}>556/3658/1</Text>
            </View>
            <View style={styles.headerContainerDate}>
              <Text style={styles.listText}>01.04.2017.</Text>
            </View>
            <View style={styles.headerContainerCost}>
              <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>80,00 kn</Text></Text>
            </View>

          </View>
        </View>




        <View style={{paddingTop:"2%", paddingBottom:"2%", borderBottomColor:"#A3A3A3", borderBottomWidth:1,/* borderTopColor:"#A3A3A3", borderTopWidth:1 */}}>
          <View style={{flexDirection:"row"}}>

            <View style={styles.headerContainerBill}>
              <Text style={styles.listText}>468/1124/1</Text>
            </View>
            <View style={styles.headerContainerDate}>
              <Text style={styles.listText}>13.03.2017.</Text>
            </View>
            <View style={styles.headerContainerCost}>
              <Text style={styles.listText}><Text style={{fontWeight:"bold"}}>120,00 kn</Text></Text>
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

  listTextContainer:{
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    width: "33%",
  },

  headerContainerBill:{
    flex: 1, 
    alignItems: "flex-start", 
    //justifyContent: "center", 
    width: "33%",
    marginTop: "3%",
    marginBottom: "3%",
    paddingLeft: "5%",
    
  },

  headerContainerCost:{
    flex: 1, 
    alignItems: "flex-end", 
    //justifyContent: "center", 
    width: "33%",
    marginTop: "3%",
    marginBottom: "3%",
    paddingRight: "5%",
    
  },

  headerContainerDate:{
    flex: 1, 
    alignItems: "center", 
    //justifyContent: "center", 
    width: "33%",
    marginTop: "3%",
    marginBottom: "3%", 
  },
    
});