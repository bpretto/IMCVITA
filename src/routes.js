import React from "react";
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Homepage from "./pages/Homepage";
import Calculate from "./pages/Calculate";
import SpecifiedBMITips from "./pages/SpecifiedBMITips";

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
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="Homepage" component={Homepage} />
                    <Screen name="Calculate" component={Calculate} />
                    <Screen name="SpecifiedBMITips" component={SpecifiedBMITips} />
                </Navigator>
            </NavigationContainer>
        </PaperProvider >
    )
}

