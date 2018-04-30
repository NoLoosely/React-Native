import React, { Component } from 'react';
import {  
    StyleSheet,
    View,
     Text, 
     TextInput,
     TouchableOpacity,
     Image,

    } from 'react-native';
 

export default class LoginForm extends Component {
  render() {
    return (
      
      <View style={styles.container}>

      <View style={styles.inputView}>
        <Image style={styles.icon} source={{uri: "https://cdn0.iconfinder.com/data/icons/mini-icon-2-2/16/login_in-512.png"}}/>
        <TextInput style={styles.input} underlineColorAndroid="black" placeholder="Enter your username" placeholderTextColor="white"  returnKeyType="next" onSubmitEditing={() => this.passwordInput.focus()}/>
       </View>
        
       <View style={styles.inputView}>
        <Image style={styles.icon} source={{uri: "https://images.vexels.com/media/users/3/136535/isolated/preview/393a7d8e436bccc3aedfd43865b48890-icono-de-un-candado-by-vexels.png"}}/>
        <TextInput style={styles.input} underlineColorAndroid="black" placeholder="Enter your password" placeholderTextColor="white" secureTextEntry returnKeyType="done" ref={(input)=> this.passwordInput = input}/>
        </View>
       {/*
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={()=> navigate("NextPage")}>Prijavi se</Text>
        </TouchableOpacity>
       */ }

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    input:{
        flex: 1,
        height: 40,
        color: "#fff",
        paddingHorizontal: 10,
        borderRadius: 10,

    },
    buttonContainer:{
        backgroundColor: "#2980b9",
        paddingVertical: 15,
        borderRadius: 10,
    },

    buttonText:{
        textAlign: "center",
        color: "#ffffff",
        fontWeight: '700',
    },

    icon:{
        width: 40,
        height: 40,
    },

    inputView:{
        flexDirection: "row", 
        backgroundColor: "rgba(255,255,255,0.2)", 
        height: 50, 
        borderRadius: 10, 
        marginBottom: 30,
        alignItems: 'center',
        
    },


});



