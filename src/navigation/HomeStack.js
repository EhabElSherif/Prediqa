import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';

const Stack = createStackNavigator();

export const HomeStack = ()=>{
    return (
        <Stack.Navigator
            headerMode="screen"
            mode="card"
            screenOptions={{

            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    header:()=>null
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    )

}