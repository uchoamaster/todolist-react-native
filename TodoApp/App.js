import React from 'react';

import {  SafeAreaView, StyleSheet, View, Text , TextInput } from 'react-native';
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
    <View style={styles.footer}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Digite sua tarefa aqui" />
    </View>
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
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  }

});

export default App;
