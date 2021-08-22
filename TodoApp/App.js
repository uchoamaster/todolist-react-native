import React from 'react';

import {  SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const COLORS = {primary: '#1f145c', white: '#fff', red: '#ff0000'};

const App = () => {
  return ( 
  <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        TODOAPP
      </Text>
      <Icon name="delete" style={styles.Icon}/>
    </View>
  </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
  color: COLORS.primary,
  fontWeight: 'bold',
  fontSize: 20,
  },
  Icon: {
    color: COLORS.red,
    fontSize: 30,
  }

});

export default App;
