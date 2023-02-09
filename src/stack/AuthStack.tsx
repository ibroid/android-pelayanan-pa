import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Masuk" component={SignIn} />
            <Stack.Screen name="Daftar" component={SignUp} />
        </Stack.Navigator>
    )

}