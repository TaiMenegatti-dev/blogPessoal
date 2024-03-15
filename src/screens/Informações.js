import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Blog({ navigation }){
    return (
        <View style={styles.container}>
            <Text style={styles.inf}>As pessoas que seguem as religiões de matriz africana acreditam em orixás, personificações de elementos da natureza e de energia, e em guias espirituais, que podem se incorporar durante certas cerimônias e vir à Terra para ajudar as pessoas que necessitam. Os guias são denominados “entidades” e cada orixá possui uma linha de entidades que o auxilia.</Text>
            <Text style={styles.title}>Clique para saber mais:</Text>
            <Pressable style={styles.botao} onPress={() => navigation.navigate("Info1")}>
                <Text style={styles.textoBotao}>Orixás</Text>
            </Pressable>
            <Pressable style={styles.botao} onPress={() => navigation.navigate("Info2")}>
                <Text style={styles.textoBotao}>Guias Espirituais</Text>
            </Pressable>
            <Image source={require('../assets/guias.jpg')} style={styles.image}/>
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

    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },

    textoBotao: { 
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 5,
    },
    inf: {
        fontSize: 15,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 250,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 20
    }
});