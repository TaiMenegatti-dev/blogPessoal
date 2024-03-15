import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Info2({ navigation }){
    return (
        <View style={styles.container}>
            <Text>Página Info2</Text>
            <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </Pressable>
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
        color: 'white',
        fontSize: 20,
    }
});