
import React, { useContext } from 'react';
import BottomTabView from './components/tab/BottomTabView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './components/Signup';
import Login from './components/Login';
import Setting from './components/tab/user/Setting';
import About from './components/tab/user/About';

import { ThemeContext, ThemeProvider } from './context/ThemeContext';

const Stack = createStackNavigator();

export default function App() {
	return (
		<ThemeProvider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							borderWidth: 0
						}
					}}
				>
					<Stack.Screen name="Home" component={BottomTabView}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="Signup" component={Signup}
						options={{ 
							headerTitle: '' 
						}}
					/>
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Setting" component={Setting} />
					<Stack.Screen name="About" component={About} />
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	);
}

