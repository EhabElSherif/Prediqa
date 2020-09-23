import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity,ActivityIndicator } from 'react-native'
import { spacing } from '../../config/spacing'

export default class ListItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            this.props.item.name ?
                <TouchableOpacity 
                    style={[spacing.flex,spacing.row,styles.item]}
                    activeOpacity={0.7}
                >
                    <Text style={styles.city}>{this.props.item.name+', '+this.props.item.country}</Text>
                    <Text style={styles.temperature}>{this.props.item.temperature}</Text>
                </TouchableOpacity>
            :
                <ActivityIndicator style={[spacing.flex,styles.item]} color="#2196f3" size={28}></ActivityIndicator>
        )
    }
}

const styles = StyleSheet.create({
    item:{
        paddingVertical:10,
        paddingHorizontal:15,
        marginTop:10,
        alignItems:"center"
    },
    city:{
        fontSize:20,
    },
    temperature:{
        position:"absolute",
        right:15,
        fontSize:18,
        color:"grey"
    }
})
