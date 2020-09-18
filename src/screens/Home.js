import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import images from './../config/images';
import { spacing } from '../config/spacing';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Day from '../components/Day';
import GridCell from '../components/GridCell';
import GridRow from '../components/GridRow';

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            today:{
                date:{day:"Sun",number:"20"},
                status:"sunny",
                temperature:{min:"25",max:"37",unit:"C"},
            },
            todayDetails:[
                {key:"1",title:"Sunny",header:true,icon:<Fontisto name="day-cloudy" size={33} color={"grey"}></Fontisto>},
                {key:"2",title:"33",subtitle:"°C",now:true},
                {key:"3",titles:["25°C","37°C"],tomorrow:true},
                {key:"4",title:"49%",subtitle:"Humidity",icon:<Ionicons name="water-outline" size={30} color="grey"></Ionicons>},
                {key:"5",title:"1,007mBar",subtitle:"Pressure",icon:<Ionicons name="speedometer-outline" size={30} color="grey"></Ionicons>},
                {key:"6",title:"23 km/h",subtitle:"Wind",icon:<Fontisto name="wind" size={30} color="grey"></Fontisto>},
                {key:"7",title:"6:03 AM",subtitle:"Sunrise",icon:<Feather name="sunrise" size={30} color="grey"></Feather>},
                {key:"8",title:"7:05 PM",subtitle:"Sunset",icon:<Feather name="sunset" size={30} color="grey"></Feather>},
                {key:"9",title:"13h 1m",subtitle:"Daytime",icon:<Fontisto name="hourglass" size={30} color="grey"></Fontisto>},
            ],
            week:[
                {
                    id:'0',
                    date:{day:"Mon",number:"21"},
                    status:"sunny",
                    temperature:{min:"25",max:"37",unit:"C"},
                },
                {
                    id:'2',
                    date:{day:"Tue",number:"22"},
                    status:"sunny",
                    temperature:{min:"25",max:"37",unit:"C"}
                },
                {
                    id:'3',
                    date:{day:"Wed",number:"23"},
                    status:"sunny",
                    temperature:{min:"25",max:"37",unit:"C"}
                },
                {
                    id:'4',
                    date:{day:"Thu",number:"24"},
                    status:"sunny",
                    temperature:{min:"25",max:"37",unit:"C"}
                },
                {
                    id:'5',
                    date:{day:"Fri",number:"25"},
                    status:"sunny",
                    temperature:{min:"25",max:"37",unit:"C"}
                },
                {
                    id:'6',
                    date:{day:"Sat",number:"26"},
                    status:"sunny",
                    temperature:{min:"25",max:"37",unit:"C"}
                },
            ],
        }

        this.renderDetails = this.renderDetails.bind(this)
        this.renderWeek = this.renderWeek.bind(this)
    }

    renderDetails = ()=>{
        let index;
        let row;
        let grid = []
        for (index = 0; index < this.state.todayDetails.length-3; index+=3) {
            row = [...this.state.todayDetails.slice(index,index+3)]
            grid.push(
                <GridRow key={index} cells={row}></GridRow>
            )
        }
        row = [...this.state.todayDetails.slice(index,this.state.todayDetails.length)]
        grid.push(
            <GridRow key={index+1} cells={row}></GridRow>
        )
        return grid;
    }

    renderWeek = ()=>{
        return (
            <FlatList
                data={this.state.week}
                horizontal
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><Day item={item}></Day>}
            ></FlatList>
        )
    }

    render(){
        return (
            <View style={spacing.flex}>
                <Image
                    source={images.night}
                    style={styles.image}
                    resizeMode="cover"
                ></Image>
                <View style={[spacing.lightBG,styles.data]}>
                    <View style={styles.header}>
                        <Text style={[styles.dataHeader,styles.date]}>Sunday, 19 May 2019 | 4:30PM</Text>
                        <View style={[styles.dataHeader,styles.location]}>
                            <Text style={styles.locationText}>Mumbai, India</Text>
                            <Ionicons name="location-sharp"  color={"#2196f3"} size={20}></Ionicons>
                        </View>
                    </View>
                    <View style={spacing.flex}>
                        {this.renderDetails()}
                        <View style={[spacing.flex,spacing.row,spacing.justifyContentCenter,spacing.alignItemsCenter]}>
                            {this.renderWeek()}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"50%"
    },
    data:{
        flex:1,
        marginTop:-100,
        elevation:10,
        overflow:"hidden",
        borderTopRightRadius:25,
        borderTopLeftRadius:25
    },
    header:{
        flexDirection:"row",
    },
    dataHeader:{
        paddingVertical:15,
        paddingHorizontal:15,
    },
    date:{
        fontSize:15,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        color:"grey",
    },
    location:{
        flex:1,
        flexDirection:"row",
        borderBottomLeftRadius:25,
        backgroundColor:"#bbdefb",
        alignItems:"center",
        justifyContent:"center"
    },
    locationText:{
        color:"#2196f3",
        marginRight:7,
        fontSize:15,
        textAlign:"center",
        fontWeight:"bold"
    },
})
