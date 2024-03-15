import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function About(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Candomblé</Text>
            <Text style={styles.cam}>O Candomblé uma religião regionalizado no Brasil, porém com características trazidas
            pelos negros da África. Como nessa época a Igreja Católica proibia os rituais africanos, os negros usavam as imagens
            católicas como símbolo, mas continuavam cultuando seus Orixás, Inquices e Vodus. Para o Candomblé, os orixás são deuses supremos, possuindo habilidades e personalidades 
             diferentes, assim como as formas de rituais. Estes também escolhem as pessoas que utilizam para incorporar no ato
             do nascimento, podendo compartilhá-lo com outro orixá, caso necessário. Os rituais de Candomblé são, via de regra, realizados por meio de cânticos, 
             danças, batidas de tambores, oferendas de vegetais, minerais, objetos e, às vezes, sacrifício de alguns animais.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cam: {
        fontSize: 15,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 5,
    },
});