
import { View, Text, ScrollView } from 'react-native';
import ListUsers from './components/listUsers';
import UserProvider from './context/UserContext';

export default function App() {

	return (
		<UserProvider>
			<View>
				<ScrollView>
					<ListUsers />
				</ScrollView>
			</View>
		</UserProvider>
	);
}

