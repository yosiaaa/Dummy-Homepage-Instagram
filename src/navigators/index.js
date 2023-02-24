import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import {Homepage, Splash} from "../screens"

const Stack = createNativeStackNavigator();

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={Splash}/>
                <Stack.Screen name="Homepage" component={Homepage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigators;