import { StyleSheet } from "react-native";
import { ThemedView } from "../components/ThemedView";
import ThemedScrollView from "../components/ThemedScrollView";
import { ThemedText } from "../components/ThemedText";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";


export default function DeviceStatsScreen({ route }) {
    const { device } = route.params;
    const { colors } = useTheme();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons
                    name="information-circle-outline"
                    color={colors.accent}
                    size={30}
                    accessible={true}
                    onPress={() => navigation.navigate('device-info', {device})}
                />
            )
        });
    }, [device, navigation]);

    return (
        <ThemedView style={styles.container}>
            <ThemedScrollView>
                <ThemedView style={styles.content}>
                    <ThemedText type="default">Device Stats Here</ThemedText>
                </ThemedView>
            </ThemedScrollView>
        </ThemedView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginBottom: 100
    },
    content: {
        paddingVertical: 10,
        gap: 10,
    },
});