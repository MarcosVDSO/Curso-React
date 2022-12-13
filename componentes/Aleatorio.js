import React from "react";
import { Text } from "react-native";

export default (props) => {
    const {min, max} = props
    const discriminante = max - min + 1
    const resultado = parseInt(Math.random()*discriminante)+min

    return (<Text> O resultado é {resultado}</Text>)
}