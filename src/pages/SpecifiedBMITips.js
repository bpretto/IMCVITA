import React from "react";
import { Image, StyleSheet, View, SafeAreaView, ScrollView, Text } from "react-native";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { exerciseTips } from "../tips/exerciseTips";
import { foodTips } from "../tips/foodTips";

import logo from "../images/logo.png";

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
                            <Card.Cover source={{ uri: 'https://vitasuco.com.br/wp-content/uploads/2020/08/capa_blog_vita_suco.png' }} />
                            <Title style={styles.cardTitle}>Dica de alimentação</Title>
                            <Paragraph style={styles.cardParagraph}>{foodTip[0].description}</Paragraph>
                        </Card.Content>
                    </Card>
                    <Card style={styles.card} acessible={false}>
                        <Card.Content>
                            <Card.Cover source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/runningfeet-1446281102.jpg' }} />
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
        justifyContent: 'space-between',
    },

    logo: {
        maxHeight: 100,
        maxWidth: 200,
        marginTop: 50
    },


    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#0AC5A8",
        marginVertical: 10
    },

    scrollContainer: {
        marginBottom: 50,
        maxHeight: 520
    },

    scrollView: {
        backgroundColor: "#0AC5A8",
    },

    firstCard: {
        maxHeight: 480,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
    },

    card: {
        maxHeight: 480,
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