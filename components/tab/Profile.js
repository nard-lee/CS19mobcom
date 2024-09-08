
import { View, Text, StyleSheet, Pressable, Switch, StatusBar } from 'react-native'
import React, { useState, useContext } from 'react';
import { Link } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import { ThemeContext } from '../../context/ThemeContext';

const Profile = () => {

	const { theme, toggleTheme } = useContext(ThemeContext);

	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => {
		toggleTheme();
		setIsEnabled(previousState => !previousState);
	}

	return (
		<View style={[styles.scene, { backgroundColor: theme.colors.background }]}>
			<StatusBar />
			<View style={styles.profile}>
				<Feather name="user" size={60} color="#ccc" />
				<View style={styles.log_btn}>
					<Pressable>
						<Link
							to={{ screen: 'Login' }}
							style={[{fontSize: 20}, theme.textColor()]}
						>Login</Link>
					</Pressable>
					<Text style={[theme.textColor()]}>or</Text>
					<Pressable>
						<Link
							to={{ screen: 'Signup' }}
							style={[{fontSize: 20}, theme.textColor()]}
						>Signup</Link>
					</Pressable>
				</View>
				<Text style={{ color: '#ccc' }}>you're not logged in</Text>
			</View>
			<View style={styles.options}>
				<View style={styles.theme_toggle}>
					<View style={{ flex: 1, flexDirection: 'row', gap: 10, alignItems: 'center' }}>
						{theme.name == 'Light' && <Feather name="sun" size={24} color="#000" />}
						{theme.name == 'Dark' && <Feather name="moon" size={24} color="#fff" />}
						<Text style={[{ fontSize: 20 }, theme.textColor()]}>{theme.name}</Text>
					</View>
					<Switch
						trackColor={{ false: '#f2f2f2', true: '#81b0ff' }}
						thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
				<Pressable style={[styles.option_link]}>
					<Feather name="settings" size={20} color={theme.colors.text} />
					<Link
						to={{ screen: 'Setting' }}
						style={[{ flex: 1, fontSize: 20 }, theme.textColor()]}
					>Setting</Link>
				</Pressable>
				<Pressable style={[styles.option_link]}>
					<Feather name="info" size={20} color={theme.colors.text} />
					<Link
						to={{ screen: 'About' }}
						style={[{ flex: 1, fontSize: 20 }, theme.textColor()]}
					>About</Link>
				</Pressable>
				<Pressable style={[{ fontSize: 20 }, styles.option_link]}>
					<Feather name="power" size={20} color={theme.colors.text} />
					<Text style={[{ fontSize: 20 }, theme.textColor()]}>Quit</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
		flexDirection: 'column',
		// backgroundColor: "#fff"
	},
	profile: {
		flex: 1,
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		gap: 10,
		padding: 10,
		alignItems: 'center',
		alignContent: 'center',
		borderBottomWidth: 0.5,
		borderBottomColor: '#ccc',
		// backgroundColor: 'blue',
		height: 10,
	},
	log_btn: {
		flexDirection: 'row',
		gap: 10,
		padding: 8,
		// backgroundColor: 'orange'
	},
	options: {
		flex: 1,
		flexGrow: 2,
		flexDirection: 'column',
		gap: 10,
		padding: 10
	},
	option_link: {
		// backgroundColor: 'red',
		flexDirection: "row",
		alignItems: 'center',
		gap: 8,
		padding: 8,
		paddingLeft: 20,
		borderWidth: .5,
		borderColor: '#ccc',
		paddingBottom: 15,
		paddingTop: 15,
		borderRadius: 10
	},
	theme_toggle: {
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		paddingLeft: 20,
		marginTop: 10,
		borderWidth: .5,
		borderColor: '#ccc',
		borderRadius: 10
	}
});

export default Profile;

