import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Cicon from '../../utils/Cicon';
import LandPage from '../LandPage';
import { ThemeContext, ThemeProvider } from '../../context/ThemeContext';

import Home from './Home';
import Profile from './Profile';
import Like from './Like';

const renderScene = SceneMap({
  home: Home,
  like: Like,
  user: Profile,
});



export default function BottomTabView() {


  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleCloseLandingPage = () => {
    setShowLandingPage(false);
  };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: <Cicon name="home" size={21} color="#fff" title="Home" /> },
    { key: 'like', title: <Cicon name="heart" size={21} color="#fff" title="Like" /> },
    { key: 'user', title: <Cicon name="user" size={21} color="#fff" title="User" /> },
  ]);

  const renderTabBar = (props) => {
    const { theme } = useContext(ThemeContext);

    return (
      <View style={[styles.tabBar, { backgroundColor: theme.colors.background }]}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Text style={{ color: index === i ? '#339933' : theme.colors.text }}>
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>

      <LandPage
        visible={showLandingPage}
        onClose={handleCloseLandingPage}
      />


      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        style={styles.container}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    alignItems: 'center',
    backgroundColor: '#339933',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    borderTopWidth: 0.5,
    borderBlockColor: 'rgba(0, 0, 0, 0.5)',
    borderStyle: 'dotted',
  },
  tabItem: {
    paddingTop: 8,
    paddingBottom: 5,

  }
});