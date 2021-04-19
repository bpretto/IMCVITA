import React from "react";
import { Image, StyleSheet, View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import JSON from "../foodTips.json"

import logo from "../images/logo.png";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function SpecifiedBMITips({ route }) {
    const { categoryId } = route.params;

    const cardContent = JSON.foodTips.filter(id => id === categoryId);

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}></Image>
            <SafeAreaView horizontal={true} vertical={false} style={styles.scrollContainer}>
                <ScrollView
                    horizontal={true}
                    vertical={false}
                    style={styles.scrollView}
                    showsHorizontalScrollIndicator={false}
                >
                    <Card style={styles.firstCard} acessible={false}>
                        <Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Title style={styles.cardTitle} >{cardContent.title}</Title>
                            <Paragraph style={styles.cardParagraph}>{cardContent.description}</Paragraph>
                        </Card.Content>
                    </Card>
                    <Card style={styles.card} acessible={false}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
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
                </ScrollView>
            </SafeAreaView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        maxHeight: 90,
        maxWidth: 185,
        marginBottom: 75,
    },

    scrollContainer: {
        height: 440
    },

    scrollView: {
        backgroundColor: "#0AC5A8",
    },

    firstCard: {
        height: 400,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
    },

    card: {
        height: 400,
        width: 300,
        marginTop: 20,
        marginRight: 20,
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