import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CounterButton from './CounterButton';



const Counter = props => {

    // Array destructuring
    let [ num, setNum ] = useState(0);

    // const [ degiskenAdi, degiskenDegistirmeFonks ] = useState(baslangicDegeri);
    
    const onPress_Increase = () => {
        setNum(num + 1);
    }

    const onPress_Decrease = () => {
        if (num > -15) {
            setNum(num - 1);
        }
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

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{num}</Text>
            <View style={styles.buttonsContainer}>
               
               <CounterButton buttonText="ARTTIR" onPress={onPress_Increase}/>
               <CounterButton buttonText="AZALT" onPress={onPress_Decrease}/>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    numberText: {
        fontSize: 200,
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

export default Counter;
