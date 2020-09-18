import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { HomeStack } from './src/navigation/HomeStack'

export default function App() {
	return (
		<NavigationContainer>
			<HomeStack></HomeStack>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({})
