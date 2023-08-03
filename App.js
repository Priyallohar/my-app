import React ,{ useState }from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, ScrollView  } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)

  }

  return (
    <View style={styles.container}>
    {/* today task */}
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.items}>
        {
          taskItems.map((item , index)=>{
              return(
                <TouchableOpacity key = {index} onPress={()=>{completeTask(index)}}>
                   <Task text ={item}/>
                </TouchableOpacity>
              )
          })
        }
      </View>
    </View>

     {/* write a task */}
     <KeyboardAvoidingView behavior={Platform.OS==="ios"? "padding":"height"} style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)}></TextInput>
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
     </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#D8BFD8',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal:20,
  },
sectionTitle:{
  fontSize:24,
  fontWeight:"bold",
},
items:{
  marginTop:30,
},
writeTaskWrapper:{
  position:"absolute",
  bottom:60,
  width:"100%",
  flexDirection:"row",
  justifyContent:"space-around",
  alignItems:'center',
},
input:{
  paddingVertical:15,
  paddingHorizontal:15,
  width:250,
  backgroundColor:'#E6E6FA',
  borderRadius:60,
  borderWidth:1,
  borderColor:"#DDA0DD"
},
addWrapper:{
  width:60,
  height:60,
  backgroundColor:'#E6E6FA',
  borderWidth:1,
  borderRadius:60,
  borderColor:"#DDA0DD",
  justifyContent:"center",
  alignItems:'center'
},
addText:{},
});
