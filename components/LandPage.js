import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const LandPage = ({ visible, onClose }) => {
	return (
		<Modal visible={visible} animationType="fade">
			<View style={styles.popupContainer}>
				<TouchableOpacity style={styles.closeButton} onPress={onClose}>
					<Text style={styles.closeButtonText}>
						<AntDesign name="close" size={24} color="black" />
					</Text>
				</TouchableOpacity>
				<View style={styles.welcome_text}>
					<Text style={{ fontSize: 35 }}>Welcome to </Text>
					<Text style={{ fontSize: 35 }}>Healthy Recipe</Text>
				</View>
				<View style={styles.grp_btn}>
					<Pressable
						style={[styles.button, styles.l_btn]}
						onPress={() => onClose()}
					>
						<Link style={[styles.btn_link, { color: '#339933' }]} to={{ screen: 'Login' }}>Login</Link>
					</Pressable>
					<Pressable
						style={[styles.button, styles.s_btn]}
						onPress={() => onClose()}
					>
						<Link style={styles.btn_link} to={{ screen: 'Signup' }}>Signup</Link>
					</Pressable>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	popupContainer: {
		// backgroundColor: '#ccc',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 30,
		height: '100%'
	},
	closeButton: {
		flex: 1,
		position: 'absolute',
		top: 20,
		right: 20,
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 5,
		zIndex: 1
	},
	welcome_text: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'red',
		width: '100%'
	},
	closeButtonText: {
		flex: 1,
		fontSize: 24,
		fontWeight: 'bold',
		width: '100%'
	},
	grp_btn: {
		width: '100%',
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'col',
		gap: 8,
		// backgroundColor: 'green'
	},
	button: {
		width: '100%',
		padding: 15,
		borderRadius: 20,
		textAlign: 'center'
	},
	l_btn: {
		// backgroundColor: '#FFA500',
		borderWidth: 2,
		borderColor: '#339933'
	},
	s_btn: {
		backgroundColor: '#339933'
	},
	btn_link: {
		textAlign: 'center',
		fontSize: 16,
		color: '#fff',
	},
	btn_link_g: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	}

});


export default LandPage;