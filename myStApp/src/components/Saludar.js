import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
    // const {firstname, lastname} = props; 
    /* Se pasan los elementos cargados del app.js a los props del componente */
    // const {firstname = "Edward", lastname = "Carvajal"} = props; 
    /* Enviar elementos al props por default - esta manera no es tan practica cuando hay muchos props */
    const {firstname, lastname} = props; 

    return (
        <Text>
            Hola {firstname} {lastname}
        </Text>
    );
}

Saludar.defaultProps = {
    firstname: "Mauricio",
    lastname: "Delgado"
}
/* Enviar elementos props por default de una manera más practica y mejorada */

Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string
}
/* Validar props de un componente */