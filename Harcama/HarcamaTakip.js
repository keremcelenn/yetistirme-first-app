import React from 'react';
import { Text,StyleSheet, TextInput,View, Touchable, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react/cjs/react.development';

const HarcamaTakip = props => {


    const [text,setText] =useState('');
    const [textTutar,setTextTutar] =useState(0);

    const [shoppingList,setShoppingList] =useState(['Elma']);
    const [shoppingTutar,setShoppingTutar] =useState([0]);

    const onChangeText_Item=(text)=>{
        setText(text);

    }
    const onChangeTextTutar_Item=(text)=>{
        setTextTutar(text);

    }

    const onPress_Add=()=>{
        let copyShoppingList =[...shoppingList];
        copyShoppingList.push(text);
        setShoppingList(copyShoppingList);

        let copyShoppingTutar=[...shoppingTutar];
        copyShoppingTutar.push(textTutar);
        setShoppingTutar(copyShoppingTutar);
        
    }

    const renderItem = (params) => {
        const item = params.item;

        return (
            <TouchableOpacity onPress={()=>deleteItem(item)}>
                <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
        )
    }

    const deleteItem =(item)=>{
        let copyShoppingList =[];
        for(let it of shoppingList){
            if(it!=item)
            {
                copyShoppingList.push(it);
            }
        }
        setShoppingList(copyShoppingList);

        let copyShoppingTutar=[];
        for(let ik of shoppingTutar){
            if(ik!=item){
                copyShoppingTutar.push(ik);
            }
        }
        setShoppingTutar(copyShoppingTutar);
    }


    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <View >
                <View> 
                    <Text style={styles.headerText}>HARCAMA TAKİP</Text>
                </View>
                <View >
                    <TextInput placeholder="Harcama Adı" style={styles.textInput} onChangeText={onChangeText_Item}></TextInput>
                </View>
                <View>
                    <TextInput placeholder="Harcama Tutarı" style={styles.textInput} keyboardType="numeric" onChangeText={onChangeTextTutar_Item}></TextInput>
                </View>
                
                <View />
                <TouchableOpacity style={styles.button} onPress={onPress_Add}>
                    <Text style={styles.buttonText}>EKLE</Text>
                </TouchableOpacity>

                </View>
                <View style={styles.listContainer}>
                    <FlatList
                    data={shoppingList}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => { return index; }}
                    />
                    <FlatList
                    data={shoppingTutar}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => { return index; }}
                    />
                </View>
                

                <View>
                <View style={styles.footer}>
                    <Text> Toplam Harcama </Text>
                    <Text> Ücret </Text>

                </View>

                </View>
                

                

            </View>

        </SafeAreaView>
    );
};

const styles=StyleSheet.create({

    
    listContainer: {
        flexDirection:'row',
        width: 300,
    },

    genelContainer:{
        justifyContent:'space-between',
        flex:2



    },

    footer:{
        justifyContent:'center',
        alignItems:'center'

    },
    urunText:{
        fontSize:18,
        flexGrow:1

    },
    row:{
        flexDirection:'row',
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        alignItems:'center'

    },
    sagText:{
        color:'white',
        fontWeight:'bold'

    },
    butonSag:{
        backgroundColor:'#F95A49',
        borderRadius:5,
        width:50,
        height:25,
        justifyContent:'center',
        alignItems:'center'

    },
    buttonSol:{
        alignItems:'center',
        marginLeft:5,
        marginRight:5
        
    },
    kutucuk:{
        width:20,
        height:20,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.3)',
        borderRadius:5,

    },
    govdeText:{
        color:'#E97632',
        fontSize:20,
        fontWeight:'bold',
        margin:10,
        

    },

    buttonText:{
        fontSize:24,
        color:'white',
        fontWeight:'bold'

    },
    headercontainer:{
        justifyContent:'center',
        alignItems:'center',
        
    },
    headerText:{
        padding:10,
        fontSize:24,
        fontWeight:'bold',
        color:'#E97632',
        
    },
    safearea:{


    },
    container:{
        
        flexDirection:'column',

    },
    textInput:{
        width:370,
        height:50,
        padding:10,
        borderWidth:2,
        borderColor:'rgba(0,0,0,0.3)',
        borderRadius:10,
        margin:10,
        

    },
    button:{
        width:370,
        height:50,
        backgroundColor:'#E97632',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:10
    },

});

export default HarcamaTakip;
