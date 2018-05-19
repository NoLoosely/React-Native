import React, { Component }  from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Image,
  TouchableOpacity,

} from 'react-native';

import { BackHandler } from 'react-native';
//import AppNavigation from "./NavigationScript";

import Routes from "./Navigation/router";


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
    return ( <Routes/>);
    //return <AppNavigation/>;
  }
}