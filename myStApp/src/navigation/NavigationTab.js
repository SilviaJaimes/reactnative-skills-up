import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { StyleSheet, Text, View } from "react-native";

const tab = createBottomTabNavigator();

export default function NavigationTab() {
    return (
        <tab.Navigator>
            <tab.Screen name="Home" component={HomeScreen} />
            <tab.Screen name="Settings" component={SettingsScreen} />
        </tab.Navigator>
    )
}