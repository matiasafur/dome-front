import { useTheme } from "@react-navigation/native";
import { ThemedView } from "./ThemedView";
import { ActivityIndicator } from "react-native";

export default function LoadingView() {
    const { colors } = useTheme();

    return (
        <ThemedView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ActivityIndicator size="large" color={colors.primary} />
        </ThemedView>
    );
}