import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { ThemeContext } from '../../../context/ThemeContext';

const Setting = () => {

	const { theme } = useContext(ThemeContext);

	return (
		<View style={[styles.scene, { backgroundColor: theme.colors.background }]}>
			<Feather name="settings" size={24} color="black" />
			<Text>Settings</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "#fff"
	}
});

export default Setting;