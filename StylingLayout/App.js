import React from 'react';
import {View, Text} from 'react-native';

const HelloWorldComponent = () =>{

return (
  <View style={{backgroundColor:'green',
  flex: 1,
  flexDirection:'row',
  justifyContent:'center', //flexDirection ile aynı hiada
  alignItems:'center' //flexDirection'a dik hizada
  }}>
    <Text>
      Hello World
    </Text>
  </View>
);

}

//tekil exportlar
//bir sürü olabilir
export const age=25;
export const func  =()=>{
  //dfgdf
}

//default export
//sadece bir tane olabilir
export default HelloWorldComponent;