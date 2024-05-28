import { useTheme } from "@react-navigation/native";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";


export default function HeaderBackground() {
    const { colors } = useTheme();

    return (
        <ThemedView style={[styles.header, { borderBottomColor: colors.border }]}>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        borderBottomWidth: 1
    }
});