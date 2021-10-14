import React from 'react';
import { Text,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = props => {

const nav=useNavigation();

const onPress_GotoProfile=()=>{
    nav.navigate('profile-screen');
}

    return (
        <View style={{flex:1, backgroundColor:'green',justifyContent:'center', alignItems:'center'}}>
            <Text>home screen</Text>
            <TouchableOpacity onPress={onPress_GotoProfile}>
                <Text>Profile Git</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
