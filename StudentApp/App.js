import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Image,
  TouchableOpacity,

} from 'react-native';

import { BackHandler } from 'react-native';

import {createStackNavigator} from "react-navigation";
import Profil from "./Views/Profil";
import Upisi from "./Views/Upisi";
import Smjestaj from "./Views/Smjestaj";
import Racuni from "./Views/Racuni";
import Stanarina from "./Views/Stanarina";


class ProfilScreen extends React.Component{
  static navigationOptions = {
    header: null
  };

  render(){
    const{navigate} = this.props.navigation;
    return (
      <ImageBackground source={require("./Images/background.png")} style={styles.containerBackground}>
        
        <Profil/>

        <View style={{flex: 0.1, flexDirection: "row"}} >
            <View style={styles.navigationContainer} >
              <View  style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Upisi")}>
                  <Image source={require("./Images/upisi.png")}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} onPress={() => navigate("Upisi")}>UPISI</Text>
            </View>

            <View style={styles.navigationContainer}>
              <View  style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Smjestaj")}>
                  <Image source={require("./Images/useljenje.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText}  onPress={() => navigate("Smjestaj")}>SMJEŠTAJ</Text>
            </View>
{/*
            <View style={styles.navigationContainer}>
              <View style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Profil")}>
                  <Image source={require("./Images/profil.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} onPress={() => navigate("Profil")}>PROFIL</Text>
            </View>
*/}


            <View style={styles.currentNavigationContainer}>
              <View style={styles.currentNavigationImages}>
                <TouchableOpacity onPress={() => navigate("Profil")}>
                  <Image source={require("./Images/profil.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} onPress={() => navigate("Profil")}>PROFIL</Text>
            </View>

            <View style={styles.navigationContainer} >
              <View  style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Racuni")}>
                  <Image source={require("./Images/racuni.png")}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} >RAČUNI</Text>
            </View>

            <View style={styles.navigationContainer} >
              <View  style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Stanarina")}>
                  <Image source={require("./Images/stanarina.png")}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} >STANARINA</Text>
            </View>

        </View>

      </ImageBackground>
    );
  };
}//kraj ProfilScreen


class SmjestajScreen extends React.Component{
  static navigationOptions = { header: null}
  render(){
    const {navigate} = this.props.navigation;
    return(
      <ImageBackground source={require("./Images/background.png")} style={styles.containerBackground}>

        <Smjestaj/>
       
        
        <View style={{flex: 0.1, flexDirection: "row"}} >
            <View style={styles.navigationContainer} >
              <View  style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Upisi")}>
                  <Image source={require("./Images/upisi.png")}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} onPress={() => navigate("Upisi")}>UPISI</Text>
            </View>

            <View style={styles.currentNavigationContainer}>
              <View  style={styles.currentNavigationImages}>
                <TouchableOpacity onPress={() => navigate("Smjestaj")}>
                  <Image source={require("./Images/useljenje.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText}  onPress={() => navigate("Smjestaj")}>SMJEŠTAJ</Text>
            </View>

            <View style={styles.navigationContainer}>
              <View style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Profil")}>
                  <Image source={require("./Images/profil.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} onPress={() => navigate("Profil")}>PROFIL</Text>
            </View>

            <View style={styles.navigationContainer} >
              <View  style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Racuni")}>
                  <Image source={require("./Images/racuni.png")}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} >RAČUNI</Text>
            </View>

            <View style={styles.navigationContainer} >
              <View  style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Stanarina")}>
                  <Image source={require("./Images/stanarina.png")}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} >STANARINA</Text>
            </View>

        </View>

      </ImageBackground>
    );
  };
}//kraj SmjestajScreen


class UpisiScreen extends React.Component{
  static navigationOptions = { header: null}
  render(){
    const {navigate} = this.props.navigation;
    return(
      <ImageBackground source={require("./Images/background.png")} style={styles.containerBackground}>

        <Upisi/>

         
        <View style={{flex: 0.1, flexDirection: "row"}} >
            <View style={styles.currentNavigationContainer} >
              <View  style={styles.currentNavigationImages}>
                <TouchableOpacity onPress={() => navigate("Upisi")}>
                  <Image source={require("./Images/upisi.png")}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} onPress={() => navigate("Upisi")}>UPISI</Text>
            </View>

            <View style={styles.navigationContainer}>
              <View  style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Smjestaj")}>
                  <Image source={require("./Images/useljenje.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText}  onPress={() => navigate("Smjestaj")}>SMJEŠTAJ</Text>
            </View>

            <View style={styles.navigationContainer}>
              <View style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Profil")}>
                  <Image source={require("./Images/profil.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} onPress={() => navigate("Profil")}>PROFIL</Text>
            </View>

            <View style={styles.navigationContainer} >
              <View  style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Racuni")}>
                  <Image source={require("./Images/racuni.png")}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} >RAČUNI</Text>
            </View>

            <View style={styles.navigationContainer} >
              <View  style={styles.navigationImages}>
                <TouchableOpacity onPress={() => navigate("Stanarina")}>
                  <Image source={require("./Images/stanarina.png")}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.navigationText} >STANARINA</Text>
            </View>

        </View>

      </ImageBackground>
    );
  };
}//kraj UpisiScreen



class RacuniScreen extends React.Component{
  static navigationOptions = { header: null}
  render(){
    const {navigate} = this.props.navigation;
    return(
      <ImageBackground source={require("./Images/background.png")} style={styles.containerBackground}>

      <Racuni/>

       
      <View style={{flex: 0.1, flexDirection: "row"}} >
          <View style={styles.navigationContainer} >
            <View  style={styles.navigationImages}>
              <TouchableOpacity onPress={() => navigate("Upisi")}>
                <Image source={require("./Images/upisi.png")}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.navigationText} onPress={() => navigate("Upisi")}>UPISI</Text>
          </View>

          <View style={styles.navigationContainer}>
            <View  style={styles.navigationImages}>
              <TouchableOpacity onPress={() => navigate("Smjestaj")}>
                <Image source={require("./Images/useljenje.png")} />
              </TouchableOpacity>
            </View>
            <Text style={styles.navigationText}  onPress={() => navigate("Smjestaj")}>SMJEŠTAJ</Text>
          </View>

          <View style={styles.navigationContainer}>
            <View style={styles.navigationImages}>
              <TouchableOpacity onPress={() => navigate("Profil")}>
                <Image source={require("./Images/profil.png")} />
              </TouchableOpacity>
            </View>
            <Text style={styles.navigationText} onPress={() => navigate("Profil")}>PROFIL</Text>
          </View>

          <View style={styles.currentNavigationContainer} >
            <View  style={styles.currentNavigationImages}>
              <TouchableOpacity onPress={() => navigate("Racuni")}>
                <Image source={require("./Images/racuni.png")}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.navigationText} >RAČUNI</Text>
          </View>

          <View style={styles.navigationContainer} >
            <View  style={styles.navigationImages}>
              <TouchableOpacity onPress={() => navigate("Stanarina")}>
                <Image source={require("./Images/stanarina.png")}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.navigationText} >STANARINA</Text>
          </View>

      </View>

    </ImageBackground>
    );
  };
}//kraj RacuniScreen

class StanarinaScreen extends React.Component{
  static navigationOptions = { header: null}
  render(){
    const {navigate} = this.props.navigation;
    return(
      <ImageBackground source={require("./Images/background.png")} style={styles.containerBackground}>

      <Stanarina/>

      <View style={{flex: 0.1, flexDirection: "row"}} >
          <View style={styles.navigationContainer} >
            <View  style={styles.navigationImages}>
              <TouchableOpacity onPress={() => navigate("Upisi")}>
                <Image source={require("./Images/upisi.png")}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.navigationText} onPress={() => navigate("Upisi")}>UPISI</Text>
          </View>

          <View style={styles.navigationContainer}>
            <View  style={styles.navigationImages}>
              <TouchableOpacity onPress={() => navigate("Smjestaj")}>
                <Image source={require("./Images/useljenje.png")} />
              </TouchableOpacity>
            </View>
            <Text style={styles.navigationText}  onPress={() => navigate("Smjestaj")}>SMJEŠTAJ</Text>
          </View>

          <View style={styles.navigationContainer}>
            <View style={styles.navigationImages}>
              <TouchableOpacity onPress={() => navigate("Profil")}>
                <Image source={require("./Images/profil.png")} />
              </TouchableOpacity>
            </View>
            <Text style={styles.navigationText} onPress={() => navigate("Profil")}>PROFIL</Text>
          </View>

          <View style={styles.navigationContainer} >
            <View  style={styles.navigationImages}>
              <TouchableOpacity onPress={() => navigate("Racuni")}>
                <Image source={require("./Images/racuni.png")}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.navigationText} >RAČUNI</Text>
          </View>

          <View style={styles.currentNavigationContainer} >
            <View  style={styles.currentNavigationImages}>
              <TouchableOpacity onPress={() => navigate("Stanarina")}>
                <Image source={require("./Images/stanarina.png")}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.navigationText} >STANARINA</Text>
          </View>

      </View>

    </ImageBackground>
    );
  };
}



const NavigationApp = createStackNavigator(
  {
    Profil: {screen: ProfilScreen},
    Smjestaj: {screen: SmjestajScreen},
    Upisi: {screen: UpisiScreen},
    Racuni: {screen: RacuniScreen},
    Stanarina: {screen: StanarinaScreen},
  }
);



export default class App extends React.Component {

  //back button
  componentDidMount() {
  BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  }

  onBackButtonPressed() {
      return true;
  }
  //


  render() {
    return <NavigationApp/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerBackground:{
    flex: 1,
    width: "100%",
    height: "100%",
  },

  //navigacija footer
  navigationContainer:{
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    width: "20%",
    backgroundColor: "rgba(166,166,166,0.9)",
    opacity: 0.9,
    paddingBottom: "10%",
  },

  navigationImages:{
    width: "70%",
    height: "70%",
    //backgroundColor: "red",
    alignItems: 'center',
    justifyContent: "center",
    opacity: 0.5
  },
  navigationText:{
    color: "white",
    fontSize: 10,
    paddingTop: 5,
  },

  //kraj navigacije

  currentNavigationContainer:{
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    width: "20%",
    backgroundColor: "rgba(99,137,176,0.6)",
    opacity: 1,
    paddingBottom: "10%",
  },

  currentNavigationImages:{
    width: "70%",
    height: "70%",
    //backgroundColor: "red",
    alignItems: 'center',
    justifyContent: "center",
    opacity: 1
  },

});
