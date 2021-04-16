import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./pages/Homepage";
import themeStyle from "./styles/theme.style";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return(
        <PaperProvider>
            <NavigationContainer>
                <Navigator>
                    <Screen name="Homepage" component={Homepage} />
                </Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}

