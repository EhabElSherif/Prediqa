import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { spacing } from '../config/spacing';

export default class Header extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <View style={[spacing.row,styles.header]}>
                <TouchableOpacity style={styles.headerButton} onPress={this.props.onPress}>
                    <Ionicons name="close" size={28}></Ionicons>
                </TouchableOpacity>
                <View style={[spacing.flex,{}]}>
                    <Text style={styles.headerTitle}>Locations</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        height:50,
        alignItems:"center",
        paddingHorizontal:15,
        paddingVertical:30,
        backgroundColor:"white",
        elevation:2
    },
    headerButton:{
        position:"absolute",
        marginLeft:15,
        width:40,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        zIndex:10,
        backfaceVisibility:"visible"
    },
    headerTitle:{
        fontSize:18,
        fontWeight:"bold",
        color:"grey",
        textAlign:"center"
    }
})
