import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native'
import { HomeStack } from './src/navigation/HomeStack'

export default function App() {
	useEffect(() => {
		SplashScreen.hide();
	  }, []);

	return (
		<NavigationContainer>
			<HomeStack></HomeStack>
		</NavigationContainer>
	)
}
