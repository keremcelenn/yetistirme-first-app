import React from 'react'
import {View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
    backgroundColor:'green',
    // width:100,
    // height:200,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderColor:'black',
    borderWidth:2,
    borderRadius:5,
    margin:5,
    paddingHorizontal:5
    
    
    },
    square:{
        backgroundColor:'lightblue',
        width:50,
        height:50,
        borderColor:'grey',
        borderWidth:2,
        borderRadius:5,
        margin:10

    }
    });
    const yellowBoxStyles=[styles.square,{
        backgroundColor:'yellow',
    }];
    
    const whiteBoxStyles=[styles.square,{
        backgroundColor:'white',
    }];
    
    const blackBoxStyles=[styles.square,{
        backgroundColor:'black',
    }];

const App = ()=>{
   
    return (
    <View style={styles.container}> 
    <View style={styles.square}></View>
    <View style={yellowBoxStyles}/>
    <View style={whiteBoxStyles}/>
    <View style={blackBoxStyles}/>

    </View>)
}



export default App;