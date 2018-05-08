import React from 'react';
import { StyleSheet, 
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Image,


} from 'react-native';

import Expo from "expo";
import {StackNavigator} from "react-navigation";

import NextPage from "./Views/SecondPage";
import ThirdPage from "./Views/ThirdPage";
import FourthPage from "./Views/ListPage";
import LoginPage from "./Views/LoginPage";

import { BackHandler } from 'react-native';//back button
import Test from "./Views/test";

//header buttons
//import HeaderButtons from 'react-navigation-header-buttons';
//import {Icon} from "react-native-elements";
import {FontAwesome} from "react-native-vector-icons";

class LoginScreen extends React.Component{
  static navigationOptions = {
    header:null
  };
  render(){
    const{navigate} = this.props.navigation;
    return (
      
      <ImageBackground style={styles.loginBackground} source={{uri: "http://www.vactualpapers.com/web/images/April%2003%202016%20Mobile/Blurred%20Background%20HD%20Mobile%20Wallpaper15.png"}}>
      <View style={styles.loginContainer}>
      <KeyboardAvoidingView  style={{flex: 1}} behavior="padding">
        <LoginPage/>
        </KeyboardAvoidingView>
         <View >
         
        <TouchableOpacity style={styles.buttonCon}>
            <Text style={styles.buttonText} onPress={()=> navigate("Home")}>Sign In</Text>
        </TouchableOpacity>

        </View>
      </View>

      </ImageBackground>

    );
  }
}



class HomeScreen extends React.Component{
  static navigationOptions = {

    title: "Home",
    headerLeft: null, /*ispod je kod za dodavanje ikone iz repozitorija fontAwesome-a mogu se koristiti i drugi, postavljen unutar elementa Text kako bi se mogao koristiti padding i sve što dopušta Text element*/ 
    headerRight: ( <Text style={{marginRight: 20}} onPress={ () => { return BackHandler.exitApp(); } } ><FontAwesome name={'power-off'} color="#808080" size={22}/> </Text>),
   /* headerRight:(
      <HeaderButtons >
        <HeaderButtons.Item title="Exit"
        buttonWrapperStyle={{marginTop: 10}}
        onPress= { () =>{return BackHandler.exitApp();} }

        />
                
      </HeaderButtons>
  
    ),
  */
  };

  render(){
    const{navigate} = this.props.navigation;
    return(
      <KeyboardAvoidingView  style={{flex: 1}} behavior="padding">

      <View style={styles.container}>
       <Text style={styles.title}>Welcome</Text>
       <Text style={styles.formTitle}>Form:</Text>

        <View style={styles.formBody}>
          <Text style={styles.formText}>Name:</Text>
          <TextInput selectionColor="black" style={styles.input} underlineColorAndroid="black" placeholder="type your name" placeholderTextColor="white" returnKeyType="next" onSubmitEditing={() => this.lastName.focus()}/>
          <Text style={styles.formText}>Last name:</Text>
          <TextInput selectionColor="black" style={styles.input} underlineColorAndroid="black" placeholder="type your last name" placeholderTextColor="white" returnKeyType="next"  ref={(input)=> this.lastName = input} onSubmitEditing={() => this.email.focus()}/>
          <Text style={styles.formText}>Email:</Text>
          <TextInput selectionColor="black" style={styles.input} underlineColorAndroid="black" placeholder="type your email" placeholderTextColor="white" returnKeyType="next"  ref={(input)=> this.email = input} onSubmitEditing={() => this.residence.focus()}/>
          <Text style={styles.formText}>Residence:</Text>
          <TextInput selectionColor="black" style={styles.input} underlineColorAndroid="black" placeholder="type your residence" placeholderTextColor="white" returnKeyType="done"  ref={(input)=> this.residence = input} />
        </View>
  
        <View style={styles.con} >
        <TouchableOpacity style={styles.buttonCon}>
            <Text style={styles.buttonText} onPress={()=> navigate("SecondPage")}>Second Page</Text>
        </TouchableOpacity>

        </View>
      
         
      </View>
      </KeyboardAvoidingView>
    );
  }
}





class NextScreen extends React.Component{
  static navigationOptions = {
    title: "Second Page",
  };
  render(){
    const{navigate} = this.props.navigation;
    return(
      <View style={styles.container} >
      <NextPage/>
      <Text/>
      <TouchableOpacity style={styles.buttonCon}>
          <Text style={styles.buttonText} onPress={()=> navigate("ThirdPage")}>Third Page</Text>
      </TouchableOpacity>

      </View>
    );
  }
}


class ThirdScreen extends React.Component{
  static navigationOptions = {
    title:"Third Page",
  };
  render(){
    const{navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ThirdPage/>
        <Text/>

      <View style={{ flex: 1}}>
      <TouchableOpacity style={styles.buttonCon2}>
          <Text style={styles.buttonText} onPress={()=> navigate("FourthPage")}>Fourth Page</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}


class FourthScreen extends React.Component{
  static navigationOptions = {
    title:"Test",
  };
  render(){
    const{navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <FourthPage/>
      </View>

    );
  }
}





const NavigationApp = StackNavigator(
  {
    Login: {screen: LoginScreen,},
    Home: {screen: HomeScreen},
    SecondPage: {screen: NextScreen},
    ThirdPage: {screen: ThirdScreen},
    FourthPage: {screen: FourthPage},
  },
  
  {
    navigationOptions:{
      headerTintColor: "grey",
      headearStyle: {
        marginTop: Expo.Constants.statusBarHeight,
       borderBottomColor: "red",
      }
    }
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
    //return <LoginPage/>;
     
    return <NavigationApp/>;
    //return<Test/>;
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#dfe6e9",
    padding: 10,
  },

  title:{
    flex: 0.7,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "#2980b9",
    marginTop: "10%",

  },
  text:{
    textAlign: "center",
  },

  buttonContainer: {
    backgroundColor: "#dfe6e9",
    paddingLeft: 30,
    paddingRight: 30,
    padding: 1,
  },

  buttons:{
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },


  formTitle:{
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 20,
  },

  formText:{
    paddingTop: 10,
    fontWeight: 'bold',
    paddingLeft: 1,
    fontSize: 14,
    color: "white",
  },

  formBody:{
    margin: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#0984e3",
    borderRadius: 10,

  },
  input:{
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    color: "white",
    paddingHorizontal: 10,
    fontSize: 12,

},




//gumb
con:{
  padding: 20,
},

buttonCon:{
  backgroundColor: "#2980b9",
  paddingVertical: 15,
  borderRadius: 10,
},

buttonCon2:{
  backgroundColor: "#2980b9",
  paddingVertical: 15,
  borderRadius: 10,
  position: "absolute",
  width: "100%",
  bottom: 0
},

buttonText:{
  textAlign: "center",
  color: "#ffffff",
  fontWeight: '700',
},
//



//login
loginBackground:{
  flex: 1,
  width: "100%",
  height: "100%",
},

loginContainer:{
  flex: 1,
  width: "100%",
  height: "100%",
},
buttonContainer:{
  backgroundColor: "#2980b9",
  paddingVertical: 15,
  borderRadius: 10,
},

buttonTextLogin:{
  textAlign: "center",
  color: "#ffffff",
  fontWeight: '700',
},
//


});


