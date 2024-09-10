import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useContext } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "@react-navigation/native";

const Login = ({navigation}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.form_container, { backgroundColor: theme.p_bg }]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="black" />
      </Pressable>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Monoton-Regular",
            fontSize: 40,
            color: theme.p_col,
          }}
        >
          Healthy Recipe
        </Text>
      </View>
      <View style={[styles.form, { backgroundColor: theme.p_bg }]}>
        <View style={styles.input_block}>
          <Entypo
            style={styles.input_icon}
            name="email"
            size={24}
            color={theme.p_col}
          />
          <TextInput
            style={[styles.input, { backgroundColor: theme.s_bg }]}
            placeholder="Email"
            placeholderTextColor={theme.p_col}
          />
        </View>
        <View style={styles.input_block}>
          <Entypo
            style={styles.input_icon}
            name="lock"
            size={24}
            color={theme.p_col}
          />
          <TextInput
            style={[styles.input, { backgroundColor: theme.s_bg }]}
            placeholder="Password"
            placeholderTextColor={theme.p_col}
          />
        </View>
        <Pressable style={styles.form_btn}>
          <Text style={styles.btn_text}>Login</Text>
        </Pressable>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ color: theme.p_col, alignContent: "flex-end" }}>
            Havent signed up?
          </Text>
          <Link
            to={{ screen: "Signup" }}
            style={[
              {
                color: theme.p_col,
                fontSize: 14,
                fontWeight: "bold",
                fontFamily: "Open-sans",
              },
            ]}
          >
            Signup
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form_container: {
    flex: 1,
    gap: 50,
    flexDirection: "column",
    padding: 30,
  },
  form: {
    width: "100%",
    flexDirection: "column",
    gap: 10,
    backgroundColor: "red",
  },
  input_block: {
    position: "relative",
  },
  input_icon: {
    position: "absolute",
    zIndex: 1,
    left: 15,
    top: 15,
    fontSize: 15,
  },
  input: {
    // backgroundColor: "#fff",
    padding: 10,
    paddingLeft: 40,
    width: "100%",
    borderRadius: 10,
    fontFamily: "Open-sans",
  },
  form_btn: {
    // backgroundColor: "#fff",
    padding: 10,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#5d6ba2",
  },
  btn_text: {
    fontFamily: "Poppins-Regular",
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Login;
