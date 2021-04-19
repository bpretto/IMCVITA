import React from "react";
import { Image, StyleSheet, View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import logo from "../images/logo.png";

export default function FoodTips() {
    const n = 7;

    function cards() {
        for (let index = 0; index < 7; index++) {
            <Card style={styles.firstCard} acessible={false}>
                <Card.Content>
                    <Title style={styles.cardTitle} >Dica de alimentação</Title>
                    <Paragraph style={styles.cardParagraph}>
                        Consuma quantidades equilibradas de carboidratos, proteínas e gorduras.
                        Aumente a ingestão de fibras e alimentos integrais na sua dieta.
                        Alguns alimentos que podem te ajudar nesse processo são: cereais (arroz
                        integral, aveia, milho, grão-de-bico e lentilha), verduras, legumes e
                        frutas no geral.
                </Paragraph>
                </Card.Content>
            </Card>
        }
    }
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}></Image>
            <View style={styles.scrollContainer}>
                <SafeAreaView style={styles.safeAreaView}>
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                        <Card style={styles.firstCard} acessible={false}>
                            <Card.Content>
                                <Title style={styles.cardTitle} >Muito abaixo do peso</Title>
                                <Paragraph style={styles.cardParagraph}>
                                    Consuma quantidades equilibradas de carboidratos, proteínas e gorduras.
                                    Aumente a ingestão de fibras e alimentos integrais na sua dieta.
                                    Alguns alimentos que podem te ajudar nesse processo são: cereais (arroz
                                    integral, aveia, milho, grão-de-bico e lentilha), verduras, legumes e
                                    frutas no geral.
                                </Paragraph>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card} acessible={false}>
                            <Card.Content>
                                <Title style={styles.cardTitle} >Abaixo do peso</Title>
                                <Paragraph style={styles.cardParagraph}>
                                    Consuma quantidades equilibradas de carboidratos, proteínas e gorduras.
                                    Aumente a ingestão de fibras e alimentos integrais na sua dieta.
                                    Alguns alimentos que podem te ajudar nesse processo são: cereais (arroz
                                    integral, aveia, milho, grão-de-bico e lentilha), verduras, legumes e
                                    frutas no geral.
                                </Paragraph>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card} acessible={false}>
                            <Card.Content>
                                <Title style={styles.cardTitle} >Peso ideal</Title>
                                <Paragraph style={styles.cardParagraph}>
                                    Consuma quantidades equilibradas de carboidratos, proteínas e gorduras.
                                    Aumente a ingestão de fibras e alimentos integrais na sua dieta.
                                    Alguns alimentos que podem te ajudar nesse processo são: cereais (arroz
                                    integral, aveia, milho, grão-de-bico e lentilha), verduras, legumes e
                                    frutas no geral.
                                </Paragraph>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card} acessible={false}>
                            <Card.Content>
                                <Title style={styles.cardTitle} >Obesidade 1º grau</Title>
                                <Paragraph style={styles.cardParagraph}>
                                    Consuma quantidades equilibradas de carboidratos, proteínas e gorduras.
                                    Aumente a ingestão de fibras e alimentos integrais na sua dieta.
                                    Alguns alimentos que podem te ajudar nesse processo são: cereais (arroz
                                    integral, aveia, milho, grão-de-bico e lentilha), verduras, legumes e
                                    frutas no geral.
                                </Paragraph>
                            </Card.Content>
                        </Card>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    logo: {
        maxHeight: 90,
        maxWidth: 185,
        marginTop: 25
    },

    scrollContainer: {
    },

    safeAreaView: {
        height: 650,
    },

    scrollView: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        backgroundColor: "#0AC5A8",
        width: '100%',
    },

    firstCard: {
        width: 300,
        marginVertical: 20,
        marginHorizontal: 20,
    },

    card: {
        width: 300,
        marginBottom: 20,
        marginHorizontal: 20,
    },

    cardTitle: {
        fontSize: 28,
        color: "#000000",
        marginVertical: 10
    },

    cardParagraph: {
        fontSize: 16,
        color: "#000000"
    }
});