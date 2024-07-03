import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./resultIMC";

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((weight/((height/100) * (height/100))).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setWeight(null)
            setHeight(null)
            setMessageImc("Seu IMC é igual a:")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha seu peso e altura")
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput onChangeText={setHeight} value={height} placeholder="Ex: 180cm" keyboardType="numeric"></TextInput>
                <Text>Peso</Text>
                <TextInput onChangeText={setWeight} value={weight} placeholder="Ex: 80kg" keyboardType="numeric"></TextInput>
            </View>
            <View>
                <Button title={textButton} onPress={() => validationImc()} />
            </View>
            <View>
                <ResultImc messageResultImc={messageImc} ResultImc={imc} />
            </View>
        </View>
    );
}