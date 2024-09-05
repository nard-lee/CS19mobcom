import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const Cicon = ({ name, size, color, title }) => {
	return (
		<View style={styles.iconHolder}>
			<Feather name={name} size={size} color={color} />
			<Text style={styles.lb}>{title}</Text>
			{name == 'heart' && 
				<View style={styles.notif}>
					<Text style={{ fontSize: 10, zIndex: 1, color: '#fff' }}>3</Text>
				</View>
			}
		</View>
	)
};

const styles = StyleSheet.create({
	iconHolder: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},
	lb: {
		fontSize: 9,
		color: '#333',
		lineHeight: 10
	},
	notif: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: -5,
		right: -8,
		backgroundColor: '#cc0000',
		width: 15,
		height: 15,
		fontSize: 11,
		borderRadius: 50
	}
});

export default Cicon