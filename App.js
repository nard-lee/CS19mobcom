
import { View, Text, FlatList } from 'react-native';

import fetchUser from './hooks/fetchUser';
import { styled } from 'nativewind';

import ListUsers from './components/listUsers';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {

	const { loading, data, error } = fetchUser('user');

	// console.log(data)

	return (
		<View className="w-full">

			{loading && <Text className="bg-cyan-800">Loading...</Text>}
			{error && <Text>{error}</Text>}
			{data && (<ListUsers data={data}/>)}

		</View>
	);
}

