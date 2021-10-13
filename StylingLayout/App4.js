import React from 'react'
import {View, StyleSheet, Dimensions,Text} from 'react-native'

const dimensions = Dimensions.get('screen');
const width=dimensions.width;
const height=dimensions.height;

//flex, Flexshrink, FlexGrow
const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(0,0,0,0.1)',
        flex:1
    },
    header:{
       backgroundColor:'green',
       height:width*0.2
    },
   products:{
        backgroundColor:'yellow',
        height:width*2,
        flexShrink:1,
        //flexGrow:1
        

    },
    campaignsContainer:{
        backgroundColor:'red',
        height:width*0.3

    },
    footer:{
        backgroundColor:'aqua',
        height:width*0.2
     
    }
    });
    
const App = ()=>{
   
    return (
    <View style={styles.container}> 
        <View style={styles.header}>
            <Text>Anasayfa</Text>
        </View>
        <View style={styles.campaignsContainer}>
            <Text>Kampanya</Text>
            <Text>Kampanya</Text>
            <Text>Kampanya</Text>
        </View>
        <View style={styles.products}/>
        <View style={styles.footer}/>

    </View>)
}

export default App;