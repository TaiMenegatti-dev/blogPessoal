import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Religiões de matriz africana!</Text>
            <Text style={styles.p1}>As religiões de matrizes africanas são parte da diversidade religiosa do Brasil.
             Dentre algumas dessas manifestações, que tem como referência a cultura trazida pelos africanos durante mais
            de 300 anos de escravidão estão o cabula, o catimbó, a quimbanda e, principalmente, a umbanda e o candomblé,
            que se propagaram com mais intensidade pelo Brasil. Desde sua chegada ao país estes praticantes foram alvos
            de perseguições por manifestarem a sua fé, mas, ainda hoje, os episódios de intolerância religiosa fazem 
            parte do cotidiano dessas pessoas. </Text>
            <Image source={require('../assets/matriz.jpg')} style={styles.image}/>
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
    image: {
        width: 350,
        height: 200,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 20
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20, 
        marginTop: 20, 
    },
    p1: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    t2: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,

    },
});