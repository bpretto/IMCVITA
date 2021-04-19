import React from "react";
import { Image, StyleSheet, View, SafeAreaView, ScrollView, Text } from "react-native";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { exerciseTips } from "../exerciseTips";
import { foodTips } from "../foodTips";

import logo from "../images/logo.png";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function SpecifiedBMITips({ route }) {
    const { categoryId } = route.params;

    const foodTip = foodTips.filter(tip => tip.id === categoryId)
    const exerciseTip = exerciseTips.filter(tip => tip.id === categoryId)

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}></Image>
            <Text style={styles.title}>Você está na categoria: {foodTip[0].title}</Text>
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
                            <Title style={styles.cardTitle}>Dica de alimentação</Title>
                            <Paragraph style={styles.cardParagraph}>{foodTip[0].description}</Paragraph>
                        </Card.Content>
                    </Card>
                    <Card style={styles.card} acessible={false}>
                        <Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Title style={styles.cardTitle} >Dica de exercício</Title>
                            <Paragraph style={styles.cardParagraph}>{exerciseTip[0].description}</Paragraph>
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
        marginBottom: 45,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#0AC5A8",
        marginBottom: 15
    },

    scrollContainer: {
        maxHeight: 510
    },

    scrollView: {
        backgroundColor: "#0AC5A8",
    },

    firstCard: {
        maxHeight: 470,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
    },

    card: {
        maxHeight: 470,
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