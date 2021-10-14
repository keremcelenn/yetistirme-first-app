import React from 'react';
import { StyleSheet, Text,TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';

const NumberButton = props => {

const [isSelected,setIsSelected] = useState(false);

const onPress=()=>
{
    setIsSelected(!isSelected);
    props.onSelectedStateChange(!isSelected,props.number);


};

    return (
        <TouchableOpacity style={[styles.touchable, {backgroundColor:isSelected ? 'orange' : 'lightgrey'}]} onPress={onPress}>
            <Text style={styles.text}>
                {props.number}
            </Text>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
touchable:{
    backgroundColor:'grey',
    borderRadius:100,
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:5

},
text:{
    fontSize:20,
    color:'white',
    fontWeight:'600'

}

});

export default NumberButton;
