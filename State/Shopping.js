import React from 'react';
import { Text, TouchableOpacity, View, TextInput, SafeAreaView, FlatList, Touchable } from 'react-native';
import { useState } from 'react/cjs/react.development';



const ShoppingList = props => {
    const [text,setText] =useState('');
    const [shoppingList,setShoppingList] =useState(['elma']);


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

        // let copyShoppingList=[...shoppingList];
        // copyShoppingList.splice(index,1);
        // setShoppingList(copyShoppingList);
    }

    const onChangeText_Item=(text)=>{
        setText(text);

    }
    const onPress_Add=()=>{
        let copyShoppingList =[...shoppingList];
        copyShoppingList.push(text);
        setShoppingList(copyShoppingList);
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input} placeholder={"İtem adı yaz"} onChangeText={onChangeText_Item} />
            <TouchableOpacity style={styles.button} onPress={onPress_Add}>
                <Text style={styles.buttonText}>EKLE</Text>
            </TouchableOpacity>
            <View style={styles.listContainer}>
                <FlatList
                    data={shoppingList}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => { return index; }}
                />
            </View>
        </SafeAreaView>
    );
};

/*
// Flatlist arkaplanında böyle bir şey var
let comps = [];
for (let item of dummyData) {
    const comp = renderItem(item);
    comps.push(comp)
}
*/

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        width: 300,
        height: 40,
        backgroundColor: 'rgb(230,230,230)',
        marginBottom: 10,
        marginTop: 50,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'orange',
        height: 60,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    listContainer: {
        width: 300,
    },
    itemText: {
        fontSize: 16,
        marginBottom: 5,
    },
};

export default ShoppingList;
