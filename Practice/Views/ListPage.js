import React, { Component } from 'react';
import {  
    View, 
    Text, 
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    ToastAndroid

} from 'react-native';

import SVGImage from "react-native-svg-image";


export default class List extends Component {
    constructor(){
        super()
        this.state ={
            dataSource: [],
            isLoading: true
        }
    }

    renderItem = ({item}) => {
        return(
            <TouchableOpacity style={styles.mainView}
                onPress={() => ToastAndroid.show(item.name, ToastAndroid.SHORT)}
            >
                <SVGImage style={styles.image} source ={{uri: item.flag}} />
                <View style={styles.listView}>
                    <Text style={styles.countryTitle}>
                        {item.name}
                    </Text>
                    <Text style={styles.name}>
                        Region: {item.region}
                    </Text>
                    <Text style={styles.name}>
                        Population: {item.capital}
                    </Text>
                    <Text style={styles.name}>
                        Population: {item.population}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount(){
        const url = "https://restcountries.eu/rest/v2/all"

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: responseJson,
                isLoading: false
            })
        })
        .catch((error) => {
            console.log(error)

        })

    }

    Separator = () => {
        return(
            <View style={{height: 2, width: "100%", backgroundColor: "black"}}>

            </View>

        )
    }

  render() {
    return (
        this.state.isLoading ?
        <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
            <ActivityIndicator size="large" color="#2980b9" animating />
        </View>
        :
      <View style={styles.container}>
        <FlatList data = {this.state.dataSource}
                  renderItem = {this.renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent = {this.Separator}
                  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#2980b9",
    },
    image:{
        width: 120,
        height: 80,
        margin: 5,
        backgroundColor: "#74b9ff",
    },

    mainView:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor: "#74b9ff",
    },
    
    listView:{
        flex: 1.5,
        justifyContent: "center",
        marginLeft: 5,
    },

    countryTitle:{
        fontSize: 20,
        color: "black",
        fontWeight: 'bold',
        marginBottom: 0,
    },

    name:{
        fontSize: 14,
        color: "white",
    },
});
