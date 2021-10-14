import React, { useState,useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CounterButton from './CounterButton';
import NumberButton from './NumberButton';



const CounterAdvanced = props => {

    // Gösterilen Sayi
    const [ num, setNum ] = useState(0);

    //Artış-azalış miktarı
    // const [amount,setAmount]=useState(0);

    const refAmount = useRef(0);

    // const [ degiskenAdi, degiskenDegistirmeFonks ] = useState(baslangicDegeri);
    
    const onPress_Increase = () => {
        console.log(refAmount.current);
        setNum(num + refAmount.current);
    }

    const onPress_Decrease = () => {
        console.log(refAmount.current);
        setNum(num - refAmount.current);
        
    }

    const renderNumPad = () => {
        let numComponents = [];
        for (let i = 1; i < 10; i++) {
            numComponents.push(
                <Text key={i}>1</Text>
            )
        }

        return numComponents;
    }

    const onSelectedStateChange =(isSelected,number)=>{
        console.log(isSelected,number);
        console.log(refAmount.current);

        let newAmount;
        if(isSelected)
        {
            newAmount =refAmount.current +number;
        }
        else
        {
            newAmount =refAmount.current -number;
        }

        refAmount.current=newAmount;


    }
    const onChangeText=(Text,numb)=>{
        console.log(Text,numb);

        refAmount.current=Text*1;

    }

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{num}</Text>
            <View style={styles.numberButtonsContainer}>
                <NumberButton number={5} onSelectedStateChange={onSelectedStateChange} />
                <NumberButton number={10} onSelectedStateChange={onSelectedStateChange}/>
                <NumberButton number={15} onSelectedStateChange={onSelectedStateChange}/>

            </View>
            <View>
            <TextInput style={styles.input} placeholder={"Sayı Giriniz.."} onChangeText={onChangeText}/>
            </View>
            <View style={styles.buttonsContainer}>
               
               <CounterButton buttonText="ARTTIR" onPressButton={onPress_Increase}/>
               <CounterButton buttonText="AZALT" onPressButton={onPress_Decrease}/>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        backgroundColor: 'rgb(230,230,230)',
        marginBottom: 10,
        marginTop: 50,
        paddingHorizontal: 10,
    },
    numberButtonsContainer:{
        flexDirection:'row'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    numberText: {
        fontSize: 50,
        color: 'lightgreen',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    touchable: {
        height: 50,
        width: 150,
        backgroundColor: 'orange',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700',
    },
})

export default CounterAdvanced;
