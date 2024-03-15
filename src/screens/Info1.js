import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Info1({ navigation }){
    return (
        <View style={styles.container}>
            <Text style={styles.ori}>Orixás são divindades de povos africanos incorporadas por muitas religiões brasileiras de matriz africana.
             São associados a forças da natureza, ancestrais divinizados ou energias divinas.</Text>
            <Text style={styles.ori}>Exu: é a divindade messageira e responsável pela comunicação entre os deuses, ancestrais e
            seres humanos.</Text>
            <Text style={styles.ori5}>Ogum: é a divindade da guerra, ferro e tecnologia.</Text>
            <Text style={styles.ori}>Omolu/Obaluaiye: é a divindade da varíola e doenças epidêmicas.</Text>
            <Text style={styles.ori1}>Nanã: é a divindade da lama e dos pântanos.</Text>
            <Text style={styles.ori6}>Oxumaré: governa o arco-íris e a serpente.</Text>
            <Text style={styles.ori}>Oxóssi: governa a caça, protege os animais e as florestas.</Text>
            <Text style={styles.ori}>Logunede: é considerado filho de Oxum com Oxóssi.</Text>
            <Text style={styles.ori}>Ossaim: é a divindade que governa a sagrada força das folhas.</Text>
            <Text style={styles.ori5}>Xangô: é a divindade do trovão, luz, fogo e justiça. </Text>
            <Text style={styles.ori}>Oya/Iansã: é a divindade dos ventos e das tempestades.</Text>
            <Text style={styles.ori2}>Oxum: é a divindade dos rios e da beleza. </Text>
            <Text style={styles.ori3}>Obá: governa as lagoas e é uma guerreira.</Text> 
            <Text style={styles.ori4}>Ewa: é devotada e gentil.</Text>
            <Text style={styles.ori}>Iemanjá: é a rainha dos oceanos e a mãe de todos os orixás.</Text>
            <Text style={styles.ori}>Oxalá: é o pai de todos os orixás, o rei vestido de branco é o mais poderoso de todos os orixás.</Text>
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
        width: 180,
        height: 20,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },

    textoBotao: { 
        color: 'white',
        fontSize: 20,
    },
    ori: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ori1: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ori2: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 85,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ori3: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 85,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ori4: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },  
    ori5: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ori6: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 150,
        alignItems: 'center',
        justifyContent: 'center',
    }
});