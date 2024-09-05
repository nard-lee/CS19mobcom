import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import BottomTabView from './components/tab/BottomTabView';

import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {

	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(()=>{
		const prepare = async ()=> {
			try {
				await Font.loadAsync(Entypo.font);
				await new Promise(res => setTimeout(res, 2000));
			} catch (err) {
				console.warn(err)
 			} finally {
				setAppIsReady(true);
			}
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async ()=>{
		if(appIsReady) await SplashScreen.hideAsync();
	}, [appIsReady]);

	if(!appIsReady) return null;

	return (
		<View style={{ flex: 1 }} onLayoutRootView={ onLayoutRootView }>
			<StatusBar
				animated={true}
				backgroundColor='#ccc'
			/>
			<BottomTabView/>
		</View>
	);
}

