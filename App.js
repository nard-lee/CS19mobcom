import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import BottomTabView from './components/tab/BottomTabView';



export default function App() {

	return (
		<View style={{ flex: 1 }}>
			<StatusBar
				animated={true}
				backgroundColor='#ccc'
			/>
			<BottomTabView />
		</View>
	);
}

