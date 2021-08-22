import React from 'react';
import {  
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const COLORS = {primary: '#1f145c', white: '#fff', red: '#ff0000', gray: '#CCC',};

const App = () => {
const [ textInput, setTextInput ] = React.useState('') ;
const [todos, setTodos ] = React.useState([]);
React.useEffect(() => {
  getTodosFromUserDevice();
},[]);
React.useEffect(() => {
  saveTodoTouserDevice(todos);
}, [todos]);

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
    {!todo?.completed && (
        <TouchableOpacity style={[styles.actionIcon ]} onPress={()=>markTodoComplete(todo?.id)}>
        <Icon name="done-outline" size={20} color={COLORS.white} />
      </TouchableOpacity>
      )}

    <TouchableOpacity style={[styles.actionIcon, {backgroundColor:'red'} ]}
     onPress={() => deleteTodo(todo?.id)}>
      <Icon name="delete" size={20} color={COLORS.white} />
    </TouchableOpacity>
  </View>;
};
//criando o metodo de salvar com async storage para
const saveTodoTouserDevice = async todos => {
  try {
    const stringifyTodos = JSON.stringify(todos);
    await AsyncStorage.setItem('todos', stringifyTodos);
  } catch (e) {
    console.log(e);
    //msg de erro caso nao conectar ou salvar nada
  }
};

// criando agora o salvamento no storage
const getTodosFromUserDevice = async () => {
  try {
    const todos = await AsyncStorage.getItem('todos');
    if(todos !== null) {
      setTodos(JSON.parse(todos));
    }
  } catch (error) {
    console.log(error);
  }
};


// add novas tarefas
const addTodo = ()=> {
if(textInput == ""){
  Alert.alert('Erro', 'Preencha o campo em branco!');
}else {

  const newTodo = {
    id:Math.random(),
    task: textInput,
    completed: false,
  };
  setTodos([... todos, newTodo]);
  setTextInput('');
  }
};
// tarefas completadas
const markTodoComplete = todoId =>{
  const newTodos = todos.map((item)=>{
    if(item.id == todoId){
      return {... item, completed: true};
    }
    return item;
  });
  setTodos(newTodos);
};

// deletar uma lista de tarefas
const deleteTodo = todoId => {
const newTodos = todos.filter(item => item.id != todoId);
setTodos(newTodos);
}

// apagar todos botão acima de todos da tela
const clearTodos = () => {
  Alert.alert("Confirma", "Apagar as tarefas listadas?", [{
    text: "Sim",
    onPress: () => setTodos([]),
  }, 
  {text: 'Não'},
  ]);
};

  return ( 
  <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        TAREFAS DIÁRIAS
      </Text>
      <Icon name="delete-sweep" style={styles.Icon} onPress={clearTodos}/>
    </View>
    <FlatList
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{padding:20, paddingBottom: 100}}
     data={todos} 
     renderItem={({item}) => <ListItem todo={item} />}
     />
    <View style={styles.footer}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Digite sua tarefa aqui"
      value={textInput}
       onChangeText={(text)=>setTextInput(text)} />
    </View>
    <TouchableOpacity onPress={addTodo}>
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
    backgroundColor: COLORS.gray,
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
