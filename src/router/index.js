import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {GetStarted, Register, Splash, Login, UploadPhoto} from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default Router;