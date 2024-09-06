import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Feather from '@expo/vector-icons/Feather';
import LandPage from '../LandPage';
import Home from './Home';
import Profile from './Profile';
import Like from './Like';

import Cicon from '../../utils/Cicon';

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
    { key: 'home', title: <Cicon name="home" size={21} color="#333" title="Home" /> },
    { key: 'like', title: <Cicon name="heart" size={21} color="#333" title="Like" /> },
    { key: 'user', title: <Cicon name="user" size={21} color="#333" title="User" /> },
  ]);

  const renderTabBar = (props) => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Text style={{ color: index === i ? '#673ab7' : '#222' }}>
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
      backgroundColor: '#f2f2f2',
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