import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import logo from "../images/logo.png"
import themeStyle from "../styles/theme.style";

const colors = '../constants/colors'


export default function Homepage() {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}></Image>
            <Button icon="calculator" mode="contained" style={styles.button} onPress={() => console.log('Pressed')}>
                Calcular IMC
            </Button>
            <Button icon="silverware-fork-knife" mode="contained" style={styles.button} onPress={() => console.log('Pressed')}>
                Dicas de alimentação
            </Button>
            <Button icon="weight-lifter" mode="contained" style={styles.button} onPress={() => console.log('Pressed')}>
                Dicas de exercícios
            </Button>
            <Button icon="information-outline" color={themeStyle.green} style={styles.infoButton} onPress={() => console.log('Pressed')}>
                Sobre nós
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo: {
        marginBottom: 30
    },
    
    button: {
        marginTop: 10,
        width: 210,
        backgroundColor: themeStyle.green 
    },

    infoButton: {
        
    }
});