import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
    {/* today task */}
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.items}>
        <Task text={"hii this task"}></Task>
        <Task text={"i am not doing anything today"}></Task>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
}
});
