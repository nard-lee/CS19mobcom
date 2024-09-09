import { View, Text, StyleSheet, Image} from "react-native";
import React, {useContext} from "react";
import { ThemeContext } from "../../../context/ThemeContext";


const SmallCard = ({img_src}) => {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.c_container}>
      <View style={[styles.sm_card, { backgroundColor: theme.s_bg }]}>
        <Image
          style={[styles.sm_jumbo]}
          source={img_src}
          resizeMode="cover"
        />
      </View>
      <Text style={{ color: theme.p_col }}>Meat</Text>
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

export default SmallCard;
