import React from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";


export function ThemedView({
    style,
    ...rest
}) {
    const { colors } = useTheme();
    const background = colors.background;

    return (
        <View style={[{ backgroundColor: background }, style]} {...rest} />
    );
}
