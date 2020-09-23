import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, ActivityIndicator } from 'react-native'
import { spacing } from '../config/spacing'
import Header from './Header'
import List from './List/List'


export default class Locations extends Component {
    constructor(props){
        super(props)

        this.state= {
            loaded:false,
            search:"",
            cities:Array(0)
        }

        this.handleCLose = this.handleCLose.bind(this)
        this.loadCities = this.loadCities.bind(this)
        this.setData = this.setData.bind(this)
    }

    componentDidMount(){
        this.loadCities()
    }
    
    setData = (idx,data)=>{
        let oldCities = this.state.cities
        oldCities[idx].name = data.name
        oldCities[idx].temperature = data.main.temp
        oldCities[idx].country = data.sys.country
        this.setState({cities:oldCities})
    }

    loadCities = async () =>{
        let cityIds = await Promise.all(require('./../models/cities.json').map(id=>{
            return {id:id};
        }))

        this.setState({cities:cityIds})
        this.setState({loaded:true})
    }

    handleCLose = ()=>{
        this.props.closeLocations()
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={()=>Keyboard.dismiss()}
            >
                <View style={[spacing.flex]}>
                    <Header onPress={this.handleCLose}></Header>

                    <View style={styles.locations}>
                        {
                            this.state.loaded?
                                <View style={spacing.flex}>
                                    <TextInput 
                                        style={[spacing.lightBG,styles.input]} 
                                        placeholder="Search for location..."
                                        onChangeText={(value)=>this.setState({search:value})}
                                        ></TextInput>
                                    <List setData={this.setData} cities={this.state.cities}></List>
                                </View>
                            :
                                <ActivityIndicator color="#2196f3" size={42}></ActivityIndicator>
                            
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    locations:{
        flex:1,
        padding:20,
        paddingBottom:0,
        justifyContent:"center"
    },
    input:{
        paddingHorizontal:10,
        borderRadius:5,
        elevation:5,
    }
})
