import React, { Component } from 'react';
import { 
  StyleSheet,
   View, 
   Text,
   Image,
   Button, 
   ImageBackground,

  } from 'react-native';

import LoginForm from "./LoginForm";

export default class LoginPage extends Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={{uri: "http://www.vactualpapers.com/web/images/April%2003%202016%20Mobile/Blurred%20Background%20HD%20Mobile%20Wallpaper15.png"}}>
        <View style={styles.logo}>
          <Image
          style={styles.image}
          source={{uri: "https://filestore.hasura.io/v1/file/7723c234-4263-4599-9568-9d6788138c5b"}}
          />

        </View>

        <View style={styles.form}>
          <LoginForm/>
        </View>
 
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
container:{
  flex: 1,
  //backgroundColor: "#3498db",
  width: "100%",
  height: "100%",
},

logo:{
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: "center",
},

image:{
  marginTop: "10%",
  width: 200,
  height: 200,
},
title:{
  color: "#fff",
  marginTop: 10,
  width: 160,
  textAlign: "center",
  opacity: 0.9,
},
form:{
  flex:4,
  },

});