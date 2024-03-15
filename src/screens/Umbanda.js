import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Feed(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Umbanda</Text>
            <Text style={styles.umb}>A Umbanda é uma junção de diversas religiões que chegaram ao Brasil, como o catolicismo, espiritismo e as 
            religiosidades africana, indiana e indígena. É muito confundida com o candomblé, a Umbanda possui três princípios
             básicos que são: fraternidade, caridade e respeito ao próximo. </Text>
             <Text style={styles.umb}>Além de caridade e evolução, alguns dos seus principais fundamentos são: </Text>
             <Text style={styles.umb}>• Existência de um único Deus, supremo e onipotente, conhecido como Zambi, Olorum 
             ou simplesmente Deus;</Text>
             <Text style={styles.umb}>• Existência dos orixás, seres do Plano Superior que representam, cada um à sua forma, 
             elementos da natureza, do planeta ou das próprias características humanas;</Text>
             <Text style={styles.umb}>• A mediunidade como forma de comunicação entre as esferas física e espiritual;</Text>
             <Text style={styles.umb}>• Crença na alma imortal e na reencarnação, ou seja, outras vidas;</Text>
             <Text style={styles.umb}>• Crença na Lei Cármica, no qual se baseiam as ações do homem e suas consequências;</Text>
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
    umb: {
        fontSize: 15,
        marginLeft: 12,
        marginRight: 12,
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