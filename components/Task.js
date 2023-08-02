import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from "react-native"

const Task = (props) => {
  return (
   <View style={styles.items}>
    <View style = {styles.itemsLeft}>
        <TouchableOpacity style= {styles.circle}></TouchableOpacity>
        <Text style= {styles.itemText}>{props.text}</Text>
    </View>
    <View style={styles.square}> 

    </View>
   
   </View>
  )
}

 const styles = StyleSheet.create({
    items:{
        backgroundColor:'#E6E6FA',
        padding:15,
        borderRadius:10,
      flexDirection:"row",
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:20,
       
    },
    itemsLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:"wrap",

    },
    circle:{
        width:10,
        height:10,
        backgroundColor:"#EE82EE",
        opacity:0.6,
        borderRadius:50,
        marginRight:15,
    },
    text:{
        width:"80%",
    },
    square:{
        width:20,
        height:20,
        borderWidth:2,
        borderRadius:5,
        borderColor:"#EE82EE"
    },
 })
export default Task