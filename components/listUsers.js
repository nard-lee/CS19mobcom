

import { View, Text, FlatList } from 'react-native';

import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function ListUsers(data) {



    return (
        <View>
            <FlatList
                data={data.data}
                keyExtractor={(item) => item.user_id.toString()}
                renderItem={({ item }) => (
                    <StyledView className="flex flex-row h-screen ">
                        <StyledView>
                            <StyledText>{item.f_name}</StyledText>
                        </StyledView>
                        <StyledView>
                            <StyledText>{item.l_name}</StyledText>
                        </StyledView>
                        <StyledView>
                            <StyledText>{item.l_name}</StyledText>
                        </StyledView>
                    </StyledView>
                )}
            />
        </View>
    );

}