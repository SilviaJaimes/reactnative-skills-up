import React from "react";
import { View, Text, Button } from "react-native";

export default function SettingsScreen (props) {
    const { navigation } = props;

    const goToPage = (pageName) => { 
        /* Se le va a pasar el nombre de la pagina como un parametro el cual se especifica a la hora de la construccion del btn */
        navigation.navigate(pageName);
    }

    return (
        <View>
            <Text>Settings Screen</Text>
            <Text>Settings Screen</Text>
            <Text>Settings Screen</Text>
            <Text>Settings Screen</Text>
            <Text>Settings Screen</Text>
            <Text>Settings Screen</Text>
            <Text>Settings Screen</Text>

            <Button onPress={() => goToPage("Home")} title="Ir a Home"/>
        </View>
    );
}