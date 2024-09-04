
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'; // use curly brace to import
//https://stackoverflow.com/questions/60277899/usecontext-returns-undefined

export default function ListUsers() {

    const user = useContext(UserContext);

    console.log(user.data)

    return (
        
        <View>
            {user.loading && ( <Text>Loading...</Text> )}
            {user.data && (
                <FlatList
                    data={user.data}
                    keyExtractor={(item) => item.user_id.toString()}
                    renderItem={({ item }) => (
                        <View style={design.container}>
                            <View style={design.textContent}>
                                <Text>{item.f_name}</Text>
                            </View>
                            <View style={design.textContent}>
                                <Text>{item.l_name}</Text>
                            </View>
                            <View style={design.textContent}>
                                <Text>{item.email}</Text>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );

}

const design = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
    },
    textContent: {
        flex: 1,
        textAlign: 'center',
        borderWidth: 1,
    }
});