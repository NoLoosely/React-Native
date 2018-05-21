import React from "react";
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from "react-native";
import {Router, Scene} from "react-native-router-flux";

import Profil from "./Profil";
import Smjestaj from "./Smjestaj";
import Upisi from "./Upisi";
import Stanarina from "./Stanarina";
import Racuni from "./Racuni";
import ProfilDetalji from "./ProfilDetails";
import Dom from "./Dom";


import {Actions} from "react-native-router-flux";


    class ProfilScreen extends React.Component{
        static navigationOptions = {
        header: null
        };
    
        render(){
        const{navigate} = this.props.navigation;
        return (
            <ImageBackground source={require("../Images/background.png")} style={styles.containerBackground}>
            
            <Profil/>
    
            <View style={{flex: 0.1, flexDirection: "row"}} >
                <View style={styles.navigationContainer} >
                    <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.upisi()}>
                        <Image source={require("../Images/upisi.png")}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText} onPress={() => Actions.upisi()}>UPISI</Text>
                </View>
    
                <View style={styles.navigationContainer}>
                    <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.smjestaj()}>
                        <Image source={require("../Images/useljenje.png")} />
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText}  onPress={() => Actions.smjestaj()}>SMJEŠTAJ</Text>
                </View>
    
    
                <View style={styles.currentNavigationContainer}>
                    <View style={styles.currentNavigationImages}>
                    <TouchableOpacity onPress={() => Actions.profil()}>
                        <Image source={require("../Images/profil.png")} />
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText} onPress={() => Actions.profil()}>PROFIL</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                    <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.racuni()}>
                        <Image source={require("../Images/racuni.png")}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText}  onPress={() => Actions.racuni()}>RAČUNI</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                    <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.stanarina()}>
                        <Image source={require("../Images/stanarina.png")}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText} onPress={() => Actions.stanarina()} >STANARINA</Text>
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
            <ImageBackground source={require("../Images/background.png")} style={styles.containerBackground}>
    
            <Smjestaj/>
            
            
            <View style={{flex: 0.1, flexDirection: "row"}} >
                <View style={styles.navigationContainer} >
                    <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.upisi()}>
                        <Image source={require("../Images/upisi.png")}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText} onPress={() => Actions.upisi()}>UPISI</Text>
                </View>
    
                <View style={styles.currentNavigationContainer}>
                    <View  style={styles.currentNavigationImages}>
                    <TouchableOpacity onPress={() => Actions.smjestaj()}>
                        <Image source={require("../Images/useljenje.png")} />
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText}  onPress={() => Actions.smjestaj()}>SMJEŠTAJ</Text>
                </View>
    
                <View style={styles.navigationContainer}>
                    <View style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.profil()}>
                        <Image source={require("../Images/profil.png")} />
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText} onPress={() => Actions.profil()}>PROFIL</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                    <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.racuni()}>
                        <Image source={require("../Images/racuni.png")}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText} onPress={() => Actions.racuni()}>RAČUNI</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                    <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.stanarina()}>
                        <Image source={require("../Images/stanarina.png")}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText} onPress={() => Actions.stanarina()}>STANARINA</Text>
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
            <ImageBackground source={require("../Images/background.png")} style={styles.containerBackground}>
    
            <Upisi/>
    
            
            <View style={{flex: 0.1, flexDirection: "row"}} >
                <View style={styles.currentNavigationContainer} >
                    <View  style={styles.currentNavigationImages}>
                    <TouchableOpacity onPress={() => Actions.upisi()}>
                        <Image source={require("../Images/upisi.png")}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText} onPress={() => Actions.upisi()}>UPISI</Text>
                </View>
    
                <View style={styles.navigationContainer}>
                    <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.smjestaj()}>
                        <Image source={require("../Images/useljenje.png")} />
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText}  onPress={() => Actions.smjestaj()}>SMJEŠTAJ</Text>
                </View>
    
                <View style={styles.navigationContainer}>
                    <View style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.profil()}>
                        <Image source={require("../Images/profil.png")} />
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText} onPress={() => Actions.profil()}>PROFIL</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                    <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() =>  Actions.racuni()}>
                        <Image source={require("../Images/racuni.png")}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText} onPress={() =>  Actions.racuni()}>RAČUNI</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                    <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.stanarina()}>
                        <Image source={require("../Images/stanarina.png")}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.navigationText} onPress={() => Actions.stanarina()}>STANARINA</Text>
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
            <ImageBackground source={require("../Images/background.png")} style={styles.containerBackground}>
    
            <Racuni/>
    
            
            <View style={{flex: 0.1, flexDirection: "row"}} >
                <View style={styles.navigationContainer} >
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.upisi()}>
                    <Image source={require("../Images/upisi.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.upisi()}>UPISI</Text>
                </View>
    
                <View style={styles.navigationContainer}>
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.smjestaj()}>
                    <Image source={require("../Images/useljenje.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText}  onPress={() => Actions.smjestaj()}>SMJEŠTAJ</Text>
                </View>
    
                <View style={styles.navigationContainer}>
                <View style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.profil()}>
                    <Image source={require("../Images/profil.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.profil()}>PROFIL</Text>
                </View>
    
                <View style={styles.currentNavigationContainer} >
                <View  style={styles.currentNavigationImages}>
                    <TouchableOpacity onPress={() => Actions.racuni()}>
                    <Image source={require("../Images/racuni.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.racuni()}>RAČUNI</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.stanarina()}>
                    <Image source={require("../Images/stanarina.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.stanarina()}>STANARINA</Text>
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
            <ImageBackground source={require("../Images/background.png")} style={styles.containerBackground}>
    
            <Stanarina/>
    
            <View style={{flex: 0.1, flexDirection: "row"}} >
                <View style={styles.navigationContainer} >
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.upisi()}>
                    <Image source={require("../Images/upisi.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.upisi()}>UPISI</Text>
                </View>
    
                <View style={styles.navigationContainer}>
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.smjestaj()}>
                    <Image source={require("../Images/useljenje.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText}  onPress={() => Actions.smjestaj()}>SMJEŠTAJ</Text>
                </View>
    
                <View style={styles.navigationContainer}>
                <View style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.profil()}>
                    <Image source={require("../Images/profil.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.profil()}>PROFIL</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.racuni()}>
                    <Image source={require("../Images/racuni.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.racuni()}>RAČUNI</Text>
                </View>
    
                <View style={styles.currentNavigationContainer} >
                <View  style={styles.currentNavigationImages}>
                    <TouchableOpacity onPress={() => Actions.stanarina()}>
                    <Image source={require("../Images/stanarina.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.stanarina()}>STANARINA</Text>
                </View>
    
            </View>
    
        </ImageBackground>
        );
        };
    }//kraj Stanarine



    class ProfilDetaljiScreen extends React.Component{
        static navigationOptions = { header: null}
        render(){
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground source={require("../Images/background.png")} style={styles.containerBackground}>
    
            <ProfilDetalji/>
    
            <View style={{flex: 0.1, flexDirection: "row"}} >
                <View style={styles.navigationContainer} >
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.upisi()}>
                    <Image source={require("../Images/upisi.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.upisi()}>UPISI</Text>
                </View>
    
                <View style={styles.navigationContainer}>
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.smjestaj()}>
                    <Image source={require("../Images/useljenje.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText}  onPress={() => Actions.smjestaj()}>SMJEŠTAJ</Text>
                </View>
    
                <View style={styles.currentNavigationContainer}>
                <View style={styles.currentNavigationImages}>
                    <TouchableOpacity onPress={() => Actions.profil()}>
                    <Image source={require("../Images/profil.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.profil()}>PROFIL</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.racuni()}>
                    <Image source={require("../Images/racuni.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.racuni()}>RAČUNI</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.stanarina()}>
                    <Image source={require("../Images/stanarina.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.stanarina()}>STANARINA</Text>
                </View>
    
            </View>
    
        </ImageBackground>
        );
        };
    }//kraj ProfilDetalji





    class DomScreen extends React.Component{
        static navigationOptions = { header: null}
        render(){
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground source={require("../Images/background.png")} style={styles.containerBackground}>
    
            <Dom/>
    
            <View style={{flex: 0.1, flexDirection: "row"}} >
                <View style={styles.navigationContainer} >
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.upisi()}>
                    <Image source={require("../Images/upisi.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.upisi()}>UPISI</Text>
                </View>
    
                <View style={styles.navigationContainer}>
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.smjestaj()}>
                    <Image source={require("../Images/useljenje.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText}  onPress={() => Actions.smjestaj()}>SMJEŠTAJ</Text>
                </View>
    
                <View style={styles.currentNavigationContainer}>
                <View style={styles.currentNavigationImages}>
                    <TouchableOpacity onPress={() => Actions.profil()}>
                    <Image source={require("../Images/profil.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.profil()}>PROFIL</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.racuni()}>
                    <Image source={require("../Images/racuni.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.racuni()}>RAČUNI</Text>
                </View>
    
                <View style={styles.navigationContainer} >
                <View  style={styles.navigationImages}>
                    <TouchableOpacity onPress={() => Actions.stanarina()}>
                    <Image source={require("../Images/stanarina.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.navigationText} onPress={() => Actions.stanarina()}>STANARINA</Text>
                </View>
    
            </View>
    
        </ImageBackground>
        );
        };
    }//kraj Dom








const Routes = () => {
    return (
        <Router>
            <Scene key="root">

                <Scene 
                    key="profil"
                    component={ProfilScreen}
                    initial
                />

                <Scene 
                    key="upisi"
                    component={UpisiScreen}
                />

                <Scene 
                    key="stanarina"
                    component={StanarinaScreen}
                />

                <Scene 
                    key="racuni"
                    component={RacuniScreen}
                />

                <Scene 
                    key="smjestaj"
                    component={SmjestajScreen}
                />

                <Scene 
                    key="profilDetalji"
                    component={ProfilDetaljiScreen}
                />

                <Scene 
                    key="dom"
                    component={DomScreen}
                />

            </Scene>
        </Router>
    );
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


export default Routes;