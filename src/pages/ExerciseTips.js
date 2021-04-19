import React from "react";
import { Image, StyleSheet, View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { exerciseTips } from "../exerciseTips"

import logo from "../images/logo.png";

export default function ExerciseTips() {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}></Image>
            <View style={styles.scrollContainer}>
                <SafeAreaView style={styles.safeAreaView}>
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                        <Card style={styles.firstCard} acessible={false}>
                            <Card.Content>
                                <Title style={styles.cardTitle} >{exerciseTips[0].title}</Title>
                                <Paragraph style={styles.cardParagraph}>{exerciseTips[0].description}</Paragraph>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card} acessible={false}>
                            <Card.Content>
                                <Title style={styles.cardTitle} >{exerciseTips[1].title}</Title>
                                <Paragraph style={styles.cardParagraph}>{exerciseTips[1].description}</Paragraph>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card} acessible={false}>
                            <Card.Content>
                                <Title style={styles.cardTitle} >{exerciseTips[2].title}</Title>
                                <Paragraph style={styles.cardParagraph}>{exerciseTips[2].description}</Paragraph>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card} acessible={false}>
                            <Card.Content>
                                <Title style={styles.cardTitle} >{exerciseTips[3].title}</Title>
                                <Paragraph style={styles.cardParagraph}>{exerciseTips[3].description}</Paragraph>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card} acessible={false}>
                            <Card.Content>
                                <Title style={styles.cardTitle} >{exerciseTips[4].title}</Title>
                                <Paragraph style={styles.cardParagraph}>{exerciseTips[4].description}</Paragraph>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card} acessible={false}>
                            <Card.Content>
                                <Title style={styles.cardTitle} >{exerciseTips[5].title}</Title>
                                <Paragraph style={styles.cardParagraph}>{exerciseTips[5].description}</Paragraph>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card} acessible={false}>
                            <Card.Content>
                                <Title style={styles.cardTitle} >{exerciseTips[6].title}</Title>
                                <Paragraph style={styles.cardParagraph}>{exerciseTips[6].description}</Paragraph>
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

    safeAreaView: {

        height: 650,
    },

    scrollView: {
        backgroundColor: "#0AC5A8",
        width: '100%',
    },

    firstCard: {
        marginVertical: 20,
        marginHorizontal: 20,
    },

    card: {
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