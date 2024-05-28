import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";
import { ActivityIndicator, Button } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "@react-navigation/native";

export default function SettingsScreen() {
    const { logout, loading } = useAuth();
    const { colors } = useTheme();

    return (
        <SafeAreaView>
            <ThemedView>
                <ThemedText type="title">Settings</ThemedText>
                {loading ? (
                    <>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </>
                ) : (
                    <Button title="Log Out" onPress={logout} color={colors.notification} />
                )}
            </ThemedView>
        </SafeAreaView>
    );
}
