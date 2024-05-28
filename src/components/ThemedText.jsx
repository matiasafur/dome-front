import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet } from "react-native";

export function ThemedText({
    style,
    type = 'default',
    ...rest }) {
    const { colors } = useTheme();
    const color = colors.text;
    
    return (
        <Text
            style={[
                { color },
                type === 'default' ? styles.default : undefined,
                type === 'defaultBold' ? styles.defaultBold : undefined,
                type === 'title' ? styles.title : undefined,
                type === 'subtitle' ? styles.subtitle : undefined,
                type === 'notification' ? styles.notification : undefined,
                type === 'link' ? styles.link : undefined,
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    defaultBold: {
        fontSize: 16,
        fontHeight: 24,
        fontWeight: '600',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    notification: {
        fontSize: 16,
        lineHeight: 24,
        color: '#ff6347',
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: '#5892FF',
    },
});