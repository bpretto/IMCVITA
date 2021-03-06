import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import logo from "../images/logo.png"


export default function Homepage({ route, navigation }) {
    const { username } = route.params;

    function handleNavigateToCalculate() {
        navigation.navigate('Calculate');
    };

    function handleNavigateToFoodTips() {
        navigation.navigate('FoodTips');
    };

    function handleNavigateToExerciseTips() {
        navigation.navigate('ExerciseTips');
    };

    function handleNavigateToAboutUs() {
        navigation.navigate('AboutUs');
    };

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}></Image>
            <Text style={styles.username}>Como podemos lhe ajudar, {username}?</Text>
            <Button icon="calculator" mode="contained" style={styles.button} dark={true} onPress={handleNavigateToCalculate}>
                Calcular IMC
            </Button>
            <Button icon="silverware-fork-knife" mode="contained" style={styles.button} dark={true} onPress={handleNavigateToFoodTips}>
                Dicas de alimentação
            </Button>
            <Button icon="weight-lifter" mode="contained" style={styles.button} dark={true} onPress={handleNavigateToExerciseTips}>
                Dicas de exercícios
            </Button>
            <Button icon="information-outline" color="#0AC5A8" onPress={handleNavigateToAboutUs}>
                Sobre nós
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        marginBottom: 30
    },

    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#0AC5A8",
        marginBottom: 15
    },

    button: {
        marginTop: 10,
        width: 250,
    },
});