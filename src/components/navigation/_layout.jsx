import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DarkTheme, LightTheme } from "../../constants/Themes";
import { useColorScheme } from "react-native";
import Tabs from "./Tabs";

export function Layout() {
    const scheme = useColorScheme();

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
            <Tabs />
        </NavigationContainer>
    );
}