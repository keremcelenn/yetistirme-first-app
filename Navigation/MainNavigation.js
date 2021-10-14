import React from 'react';
import { Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen';
import ProfileScreen from './Profile';

const HomeStack=createStackNavigator();

const MainNavigation = props => {
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen
                component={HomeScreen}
                name={'home-screen'}
                options={{
                    title:'ANASAYFA',
                    headerStyle:{
                        backgroundColor:'lightgrey'
                    },
                    headerTitleStyle:{
                        color:'white'
                    }
                }
                }
                />
                <HomeStack.Screen
                component={ProfileScreen}
                name={'profile-screen'}
                options={{
                    title:'PROFİL',
                    headerStyle:{
                        backgroundColor:'lightgrey'
                    }
                }}
                />

            </HomeStack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
