import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";
import logo from "../images/logo.png"
import themeStyle from "../styles/theme.style";


export default function Calculate({ navigation }) {

    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [BMI, setBMI] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [missingFieldsVisible, setMissingFieldsVisible] = React.useState(false);

    function calculateBMI(height, weight) {
        const calculate = weight / (height * height);
        setBMI(calculate);
    };

    function showDialog() {
        if (!weight || !height) {
            setMissingFieldsVisible(true);
        } else if (BMI < 16 || BMI > 55) {
            setMissingFieldsVisible(true);
        } else {
            setVisible(true)
        }
    }
    const hideDialog = () => setVisible(false);
    const hideMissingFieldsDialog = () => setMissingFieldsVisible(false);

    function handleNavigateToSpecifiedBMITips() {
        setVisible(false);

        let categoryId;
        if (BMI <= 16.9) {
            categoryId = 1
        } else if (BMI <= 18.4) {
            categoryId = 2
        } else if (BMI <= 24.9) {
            console.log(BMI);
            categoryId = 3
        } else if (BMI <= 29.9) {
            categoryId = 4
        } else if (BMI <= 34.9) {
            categoryId = 5
        } else if (BMI >= 35) {
            categoryId = 6
        }

        navigation.navigate('SpecifiedBMITips', {
            categoryId
        });
    };

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />

            <TextInput
                name="Altura"
                label="1.75"
                placeholder="Insira sua altura..."
                type='outlined'
                style={styles.input}
                value={height}
                onChangeText={height => setHeight(height)}
                color="#000000"
                keyboardType="numeric"
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={"custom"}
                        options={{
                            mask: "1.75",
                        }}
                    />
                )}
            />

            <TextInput
                name="Peso"
                label="65"
                placeholder="Insira seu peso..."
                type='outlined'
                style={styles.input}
                value={weight}
                onChangeText={weight => setWeight(weight)}
                color="#000000"
                keyboardType="numeric"
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={"custom"}
                        options={{
                            mask: "1.75",
                        }}
                    />
                )}
            />

            <Button icon="calculator" mode="contained" style={styles.button} dark={true} onPress={showDialog}>
                Calcular IMC
            </Button>
            <Portal>
                <Dialog style={styles.dialog} visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title style={styles.dialogTitle}>O seu IMC é:</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph style={styles.dialogParagraph}>{calculateBMI(height, weight)}</Paragraph>
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
                        <Paragraph style={styles.dialogParagraph}>Você deve preencher os campos
                        corretamente para que seu IMC seja calculado!
                        </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions style={styles.dialogActions}>
                        <Button onPress={hideMissingFieldsDialog}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
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
});