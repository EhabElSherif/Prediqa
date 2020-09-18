import { StyleSheet } from 'react-native'

export const spacing = StyleSheet.create({
    container:{
        flex:1,
        padding:15
    },
    flex:{
        flex:1
    },
    row:{
        flexDirection:"row"
    },
    column:{
        flexDirection:"column"
    },
    justifyContentCenter:{
        justifyContent:"center"
    },
    alignItemsCenter:{
        alignItems:"center"
    },
    fullWidth:{
        width:"100%"
    },
    fullHeight:{
        height:"100%"
    },
    lightBG:{
        backgroundColor:"#EEE"
    },
    darkBG:{
        backgroundColor:"#333"
    }
})
