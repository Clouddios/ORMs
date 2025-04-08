import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import Home from "./views/Home";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}