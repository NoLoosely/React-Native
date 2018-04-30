import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Switch,
    TouchableOpacity,
    Image,

} from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

export default class ThirdPage extends React.Component{

    state = {
        switchValue: true,
        isDateTimePickerVisible: false,
        pickedDate: "",

    };

    handleToggleSwitch = () => this.setState(state =>({
        switchValue: !state.switchValue
    }));


    showDateTimePicker = (date) => this.setState({isDateTimePickerVisible: true, });
    hideDateTimePicker = (datetime) => this.setState({isDateTimePickerVisible: false});
    handleDatePicked = (date) => {
        this.hideDateTimePicker();
    };

    render(){
        return(
            this.state.switchValue ?
            <View>
                 <Switch
                    onValueChange = {this.handleToggleSwitch}
                    value = {this.state.switchValue}
                />
                <Text style={styles.title}>Welcome to third page!</Text>
                <Text/>

                <Text> {this.state.pickedDate}</Text>
                <View style={{flexDirection:"row", }}>
                    <Text style={{ fontSize:14, fontWeight: "bold", textAlignVertical: "center"}}>Click calendar to see date.</Text>
                    <TouchableOpacity style={styles.dateBox} onPress={this.showDateTimePicker}>
                        <Image style={styles.dateImage} source={{uri: "https://d30y9cdsu7xlg0.cloudfront.net/png/19514-200.png"}}/>
                    </TouchableOpacity>
                </View>

                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />

            </View>
            :
            <View>
                  <Switch
                    onValueChange = {this.handleToggleSwitch}
                    value = {this.state.switchValue}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    dateBox:{
        alignItems: 'flex-end',
        paddingLeft: "30%",
    },

    dateImage:{
        width: 50,
        height: 50,
    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 20,
        paddingLeft: 10,
        color: "#2980b9",
      },

});