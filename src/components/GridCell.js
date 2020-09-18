import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { spacing } from '../config/spacing'

export default class GridCell extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <View style={styles.cell}>
                {this.props.icon}
                {
                    this.props.now ?
                        <View style={[spacing.row]}>
                            <Text style={{fontSize:48,}}>{this.props.title}</Text>
                            <Text style={{marginTop:20,fontSize:18,color:"grey"}}>{this.props.subtitle}</Text>
                        </View>
                    :
                        <Text style={[styles.cellTitle,this.props.header?{fontSize:18}:{}]}>{this.props.title}</Text>
                }
                {
                    this.props.tomorrow ?
                        <SafeAreaView>
                            <Text style={[styles.cellSubtitle,{fontSize:18}]}>{this.props.titles[0]}</Text>
                            <Text style={[styles.cellSubtitle,{fontSize:18}]}>{this.props.titles[1]}</Text>
                        </SafeAreaView>
                    :
                    !this.props.now ?
                        <Text style={styles.cellSubtitle}>{this.props.subtitle}</Text>
                    :
                    <View></View>
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cell:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        margin:7,
    },
    cellTitle:{
        fontSize:15
    },
    cellSubtitle:{
        fontSize:12,
        color:"grey"
    }
})
