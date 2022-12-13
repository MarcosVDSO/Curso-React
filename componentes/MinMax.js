import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default(prop) => (
<Text style={estilo.fontG}>
    O valor {prop.max} é maior que o valor {prop.min}!
</Text>
)