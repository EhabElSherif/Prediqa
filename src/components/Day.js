import React, { Component } from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';

export default class Day extends Component {
    constructor(props){
        super(props)

        this.renderIcon = this.renderIcon.bind(this)
    }

    renderIcon = (status)=>{
        if(status=="Clouds")        return 
        if(status=="Clear")         return 
        if(status=="Tornado")       return 
        if(status=="Squall")        return 
        if(status=="Ash")           return 
        if(status=="Dust")          return 
        if(status=="Sand")          return 
        if(status=="Fog")           return 
        if(status=="Dust")          return 
        if(status=="Haze")          return 
        if(status=="Smoke")         return 
        if(status=="Mist")          return 
        if(status=="Snow")          return 
        if(status=="Rain")          return 
        if(status=="Drizzle")       return 
        if(status=="Thunderstorm")  return 
    }

    render(){
        return (
            <TouchableOpacity style={styles.dayContainer}>
                <View style={styles.dayText}>
                    <Text style={styles.dayTitle}>{this.props.item.date.day + ', ' + this.props.item.date.number}</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.dayTemperature}>
                            {this.props.item.temperature.max}°{this.props.item.unit}
                        </Text>
                        <Text style={styles.dayTemperature}>
                            {this.props.item.temperature.min}°{this.props.item.unit}
                        </Text>
                    </View>
                </View>
                <Fontisto style={styles.dayIcon} name="day-sunny" size={28}></Fontisto>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    dayContainer:{
        flexDirection:"row",
        padding:10,
        marginVertical:10,
        alignItems:"center",
        marginHorizontal:6,
        elevation:15,
        backgroundColor:"white",
        borderRadius:20
    },
    dayText:{
        alignItems:"center",
        marginHorizontal:3
    },
    dayTitle:{
        fontSize:15
    },
    dayTemperature:{
        fontSize:15,
        color:"grey",
        marginHorizontal:1
    },
    dayIcon:{
        marginHorizontal:2
    }
})
