import { View, Text } from "react-native";
import React from "react";

const Category = () => {
  return (
    <View>
      <Text>Category</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    width: "100%",
    flexDirection: "row",
    // backgroundColor: 'red'
  },
  sm_card: {
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
  },
  c_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sm_jumbo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default Category;
