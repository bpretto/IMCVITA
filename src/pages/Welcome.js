import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import logo from "../images/logo.png"


export default function Welcome({ navigation }) {

    const [username, setUsername] = React.useState('');

    function handleNavigateToHomepage() {
        navigation.navigate('Homepage', {
            username
        })
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />

            <TextInput
                name="Nome"
                label="João"
                placeholder="Como devemos lhe chamar?"
                type='outlined'
                style={styles.input}
                value={username}
                onChangeText={username => setUsername(username)}
                color="#000000"
            />

            <Button icon="check-circle-outline" mode="contained" style={styles.button} dark={true} onPress={handleNavigateToHomepage}>
                Pronto!
            </Button>
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
        marginBottom: 30
    },

    input: {
        marginTop: 10,
        textAlign: 'left',
        backgroundColor: '#fff',
        borderColor: '#0AC5A8',
        width: 250,
        height: 34,
    },

    button: {
        marginTop: 10,
        width: 250,
    },
});