import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../images/logo.png"


export default function AboutUs() {

    const navigation = useNavigation();

    function handleNavigateToCalculate() {
        navigation.navigate('Calculate');
    };

    function handleNavigateToFoodTips() {
        navigation.navigate('FoodTips');
    };

    function handleNavigateToExerciseTips() {
        navigation.navigate('ExerciseTips');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Somos estudantes de um curso técnico em Informática e
                este aplicativo foi idealizado apenas para fins acadêmicos.
                Todas as informações presentes em formato de dicas são
                ilustrativas. Essas dicas não devem, em hipótese alguma,
                serem seguidas sem acompanhamento prévio e permissão de um
                profissional qualificado.
            </Text>
            <Image source={logo} style={styles.logo}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    text: {
        marginTop: 130,
        fontSize: 28,
        textAlign: "center",
        marginHorizontal: 40,
        color: "#0AC5A8"
    },

    logo: {
        marginBottom: 150,
        maxHeight: 90,
        maxWidth: 185,
    },
});