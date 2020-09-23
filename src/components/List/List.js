import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Alert } from 'react-native'
import ListItem from './ListItem'
import { spacing } from '../../config/spacing'

export default class List extends Component {

    constructor(props){
        super(props)
        this.state = {
            visibleCities:[]
        }

		this.renderItem = this.renderItem.bind(this)
		this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this)
    }

	renderItem = ({item})=>{
		return <ListItem item={item}></ListItem>
    }

    viewabilityConfig = {
        minimumViewTime:100,
        itemVisiblePercentThreshold: 1
    }
      
    onViewableItemsChanged = async ({viewableItems, changed}) => {

        const res = await Promise.all(changed.map(item=>
            fetch("https://api.openweathermap.org/data/2.5/weather?id="+item.item.id+"&units=metric&&appid=9d111c41ac6495d15f4cdfd33711fcce")   
        ))
        
        const cities = await Promise.all(res.map(response => response.json()))

        changed.forEach((value,index)=>{
            this.props.setData(value.index,cities[index])
        });
    };
    
    render() {
        return (
            <View style={[spacing.flex]}>
                {
                    this.props.cities.length == 0 ?
                    <Text style={{alignSelf:"center",color:"#333",marginTop:10}}>No Cities</Text>
                    :
                    <FlatList 
                        style={[spacing.flex]}
                        data={this.props.cities}
                        keyExtractor={(item)=>item.id.toString()}
                        renderItem={this.renderItem}
                        viewabilityConfig={this.viewabilityConfig}
                        onViewableItemsChanged={this.onViewableItemsChanged}
                    ></FlatList>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({

});