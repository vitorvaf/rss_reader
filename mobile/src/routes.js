import React from 'react';
import { NavigationContainer } from  '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Feed from './pages/feed';
import Channel from './pages/channel';
import Item from './pages/item';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Feed" component={ Feed } />
                <AppStack.Screen name="Channel" component={ Channel } />
                <AppStack.Screen name="Item" component={ Item } />
            </AppStack.Navigator>             
        </NavigationContainer>
    );
}


