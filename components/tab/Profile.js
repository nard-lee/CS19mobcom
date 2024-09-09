import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Switch,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { Link } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { ThemeContext } from "../../context/ThemeContext";

const Profile = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    toggleTheme();
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={[styles.scene, { backgroundColor: theme.p_bg }]}>
      <StatusBar
        backgroundColor={theme.p_bg}
        barStyle={theme.name == "Dark" ? "light-content" : "dark-content"}
      />

      <View style={styles.profile}>
        <Feather name="user" size={70} color="#ccc" />
        <View style={styles.log_btn}>
          <Pressable>
            <Link
              to={{ screen: "Login" }}
              style={[styles._link, { color: theme.p_col }]}
            >
              Login
            </Link>
          </Pressable>
          <Text style={[{ color: theme.p_col }]}>or</Text>
          <Pressable>
            <Link
              to={{ screen: "Signup" }}
              style={[styles._link, { color: theme.p_col }]}
            >
              Signup
            </Link>
          </Pressable>
        </View>
        <Text style={{ color: "#ccc" }}>you're not logged in</Text>
      </View>
      <ScrollView style={[styles.o_scroll, { backgroundColor: theme.s_bg }]}>
        <View style={[styles.options, { backgroundColor: theme.s_bg }]}>
          <View style={[styles.theme_toggle, { backgroundColor: theme.p_bg }]}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              {theme.name == "Light" && (
                <Feather name="sun" size={24} color="#e6b800" />
              )}
              {theme.name == "Dark" && (
                <Feather name="moon" size={24} color="#fff" />
              )}
              <Text style={[styles._link, { color: theme.p_col }]}>
                {theme.name}
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#f2f2f2", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Pressable
            style={[{ backgroundColor: theme.p_bg }, styles.option_link]}
          >
            <Feather name="settings" size={20} color="#2e5cb8" />
            <Link
              to={{ screen: "Setting" }}
              style={[styles._link, { color: theme.p_col }]}
            >
              Setting
            </Link>
          </Pressable>
          <Pressable
            style={[{ backgroundColor: theme.p_bg }, styles.option_link]}
          >
            <Feather name="info" size={20} color="#cc6600" />
            <Link
              to={{ screen: "About" }}
              style={[styles._link, { color: theme.p_col }]}
            >
              About
            </Link>
          </Pressable>
          <Pressable
            style={[{ backgroundColor: theme.p_bg }, styles.option_link]}
          >
            <Feather name="power" size={20} color="red" />
            <Text style={[styles._link, { color: theme.p_col }]}>Quit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#fff"
  },
  profile: {
    flex: 1,
    flexBasis: 100,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    alignItems: "center",
    alignContent: "center",
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#ccc',
    // backgroundColor: 'red',
    height: 20,
  },
  log_btn: {
    flexDirection: "row",
    gap: 10,
    padding: 8,
    // backgroundColor: 'orange'
  },
  o_scroll: {
    flex: 1,
    flexBasis: 100,
    flexGrow: 2,
  },
  options: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  option_link: {
    // backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    padding: 8,
    paddingLeft: 20,
    // borderWidth: .5,
    // borderColor: '#ccc',
    paddingBottom: 15,
    paddingTop: 15,
    borderRadius: 10,
  },
  _link: {
    flex: 1,
    alignItems: "center",
    fontFamily: "Poppins-Regular",
  },
  theme_toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    paddingLeft: 20,
    marginTop: 10,
    // borderWidth: .5,
    // borderColor: '#ccc',
    borderRadius: 10,
    fontFamily: "Poppins-Regular",
    // backgroundColor: '#fff'
  },
});

export default Profile;
