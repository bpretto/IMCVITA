import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";
import logo from "../images/logo.png"
import themeStyle from "../styles/theme.style";


export default function Calculate() {

    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');

    const navigation = useNavigation();

    const [visible, setVisible] = React.useState(false);
    const [missingFieldsVisible, setMissingFieldsVisible] = React.useState(false);
    function showDialog() {
        if (!weight || !height) {
            setMissingFieldsVisible(true);
        } else {
            setVisible(true)
        }
    }
    const hideDialog = () => setVisible(false);
    const hideMissingFieldsDialog = () => setMissingFieldsVisible(false);
    const handleNavigateToSpecifiedBMITips = () => {
        navigation.navigate('SpecifiedBMITips')
    };

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}></Image>

            <TextInput
                label="Altura"
                placeholder="   Insira sua altura..."
                type='outlined'
                style={styles.input}
                value={height}
                onChangeText={height => setHeight(height)}
                color="#000000"
            />

            <TextInput
                label="Peso"
                placeholder="   Insira seu peso..."
                type='outlined'
                style={styles.input}
                value={weight}
                onChangeText={weight => setWeight(weight)}
                color="#000000"
            />

            <Button icon="calculator" mode="contained" style={styles.button} dark={true} onPress={showDialog}>
                Calcular IMC
            </Button>
            <Portal>
                <Dialog style={styles.dialog} visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title style={styles.dialogTitle}>O seu IMC é:</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph style={styles.dialogParagraph}>25,8</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions style={styles.dialogActions}>
                        <Button onPress={handleNavigateToSpecifiedBMITips}>Ver dicas para meu IMC</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <Portal>
                <Dialog style={styles.dialog} visible={missingFieldsVisible} onDismiss={hideMissingFieldsDialog}>
                    <Dialog.Title style={styles.dialogTitle}>Erro:</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph style={styles.dialogParagraph}>Você deve preencher os campos corretamente para que seu IMC seja calculado!</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions style={styles.dialogActions}>
                        <Button onPress={hideMissingFieldsDialog}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <Button icon="information-outline" color={themeStyle.green} onPress={() => console.log('Pressed')}>
                Sobre nós
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
        width: 210,
        height: 34,
    },

    button: {
        marginTop: 10,
        width: 210,
    },

    dialog: {
        alignSelf: 'center',
        backgroundColor: "#252525",
        alignItems: "center"
    },

    dialogTitle: {
        color: "#0AC5A8"

    },

    dialogParagraph: {
        color: "#0AC5A8",
        textAlign: 'center',
        fontSize: 20
    },

    dialogActions: {
    },
});