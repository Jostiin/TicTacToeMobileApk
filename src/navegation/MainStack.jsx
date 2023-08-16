import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/home';
import Game from '../components/game';


const Stack = createNativeStackNavigator()

const MainStack = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#1A2B33',borderBottomWidth:0},headerTintColor:'white',headerTitleStyle:{fontWeight:'bold'}}}>
                <Stack.Screen 
                    name='Home'
                    component= {Home}
                />
                <Stack.Screen 
                    name='Game'
                    component= {Game}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
    
}

export default MainStack
