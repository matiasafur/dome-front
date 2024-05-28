import { useTheme } from "@react-navigation/native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export default function ErrorView({ message }) {
    const { colors } = useTheme();
    return (
        <ThemedView style={{
            flex: 1,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.card,
        }}>
            <ThemedText type="notification">{message}</ThemedText>
        </ThemedView>
    );
}