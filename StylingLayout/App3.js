import React from 'react'
import {View, StyleSheet, Dimensions,Text} from 'react-native'

const dimensions = Dimensions.get('screen');
const width=dimensions.width;
const height=dimensions.height;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(0,0,0,0.1)',
        flex:1,
        paddingHorizontal:20
    },
    header:{
       backgroundColor:'green',
       height:width *0.3,
       justifyContent:'center',
       alignItems:'center',
       marginBottom:20
    },
   products:{
        backgroundColor:'yellow',
       height:width *0.5,

    },
    campaignsContainer:{
        backgroundColor:'white',
       height:width *0.6,
       marginHorizontal:20,
       margin:20,
       borderColor:'rgba(0,0,0,1)',
       borderWidth:1,
       borderRadius:20,
       padding:10

    },
    footer:{
        backgroundColor:'aqua',
       height:width *0.3,
       marginTop:20

    }
    });
    
    //Margin - PaddingFarkı
    //Reponsive olsun diye ekran width i kullanma
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