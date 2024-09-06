
import React from 'react';
import BottomTabView from './components/tab/BottomTabView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './components/Signup';
import Login from './components/Login';

const Stack = createStackNavigator();

export default function App() {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={BottomTabView} 
						options={{
							headerShown: false
						}}
					/>
					<Stack.Screen name="Signup" component={Signup} />
					<Stack.Screen name="Login" component={Login} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

