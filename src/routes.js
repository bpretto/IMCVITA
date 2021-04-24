import React from "react";
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Welcome from "./pages/Welcome"
import Homepage from "./pages/Homepage";
import Calculate from "./pages/Calculate";
import SpecifiedBMITips from "./pages/SpecifiedBMITips";
import FoodTips from "./pages/FoodTips";
import ExerciseTips from "./pages/ExerciseTips";
import AboutUs from "./pages/AboutUs";


const { Navigator, Screen } = createStackNavigator();

const theme = {
    ...DarkTheme,
    roundness: 2,
    colors: {
        ...DarkTheme.colors,
        primary: '#0AC5A8',
        accent: '#fff',
        background: '#252525',
        text: '#fff',
        placeholder: '#aaaaaa',
        surface: '#fff',
        notification: '#fff'
    },
};

export default function Routes() {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <Navigator >
                    <Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                    <Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
                    <Screen name="Calculate" component={Calculate} options={{
                        title: "Calcular IMC",
                        headerTitleAlign: "center",
                        headerTintColor: "#0AC5A8",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }} />
                    <Screen name="SpecifiedBMITips" component={SpecifiedBMITips} options={{
                        title: "Dicas para seu IMC",
                        headerTitleAlign: "center",
                        headerTitleAlign: "center",
                        headerTintColor: "#0AC5A8",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }} />
                    <Screen name="FoodTips" component={FoodTips} options={{
                        title: "Dicas de alimentação",
                        headerTitleAlign: "center",
                        headerTintColor: "#0AC5A8",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }} />
                    <Screen name="ExerciseTips" component={ExerciseTips} options={{
                        title: "Dicas de exercícios",
                        headerTitleAlign: "center",
                        headerTintColor: "#0AC5A8",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }} />
                    <Screen name="AboutUs" component={AboutUs} options={{
                        title: "Sobre nós",
                        headerTitleAlign: "center",
                        headerTintColor: "#0AC5A8",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }} />
                </Navigator>
            </NavigationContainer>
        </PaperProvider >
    )
}

