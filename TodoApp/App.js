import React from 'react';

import {  
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const COLORS = {primary: '#1f145c', white: '#fff', red: '#ff0000'};

const App = () => {
  const [todos, setTodos ] = React.useState([
    
    {id:1, task: 'Primeira tarefa da lista', completed: true},
    {id:2, task: 'Segunda tarefa da lista', completed: true},
    {id:3, task: 'Terceira tarefa da lista', completed: false},
    {id:4, task: 'Quarta tarefa da lista', completed: true},

]);

const ListItem = ({todo}) => {
  return <View style={styles.ListItem}>
    <View style={{flex: 1}}>
      <Text 
      style={{
      fontWeight: 'bold',
      fontSize: 16,
      color: COLORS.primary,
      textDecorationLine: todo?.completed ? 'line-through' : 'none',
    }}>{todo?.task}</Text>
    </View>
   {/* se estiver completado então nao vai aparecer o check */}
    {
      !todo?.completed && (
        <TouchableOpacity style={[styles.actionIcon ]}>
        <Icon name="done-outline" size={20} color={COLORS.white} />
      </TouchableOpacity>

      )}

    <TouchableOpacity style={[styles.actionIcon, {backgroundColor:'red'} ]}>
      <Icon name="delete" size={20} color={COLORS.white} />
    </TouchableOpacity>
  </View>;
};

  return ( 
  <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        TAREFAS DIÁRIAS
      </Text>
      <Icon name="delete" style={styles.Icon}/>
    </View>
    <FlatList
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{padding:20, paddingBottom: 100}}
     data={todos} 
     renderItem={({item}) => <ListItem todo={item} />}
     />
    <View style={styles.footer}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Digite sua tarefa aqui" />
    </View>
    <TouchableOpacity>
      <View  style={styles.IconContainer}>
        <Icon name="add-task"  color={COLORS.white} style={styles.IconFooterContainer} />
      </View>
    </TouchableOpacity>
    </View>  

  </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },
  ListItem:{
    padding: 20,
    backgroundColor:COLORS.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
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
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
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
  },
  IconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',

  },
  IconFooterContainer: {
    fontSize: 30,
  },

});

export default App;
