import { Button, StyleSheet } from "react-native";
import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";
import ThemedScrollView from "../components/ThemedScrollView";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useEffect } from "react";

export default function DeviceInfoScreen({ route }) {
    const { device } = route.params;
    const { colors } = useTheme();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    title="Edit"
                    color={colors.accent}
                />
            )
        });
    }, [device, navigation]);

    const Separator = () => {
        return (
            <ThemedView style={{ backgroundColor: colors.border, height: 1 }} />
        );
    }

    const capitalize = (string) => (
        string.charAt(0).toUpperCase() + string.slice(1)
    );

    return (
        <ThemedView style={styles.container}>
            <ThemedScrollView>
                <ThemedView style={styles.content}>
                    <ThemedView style={{ justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <ThemedView style={[styles.icon, { backgroundColor: colors.card }]}>
                            <Ionicons
                                name={device.icon || "hardware-chip-outline"}
                                color={colors.primary}
                                size={50}
                            />
                        </ThemedView>
                            <ThemedText type="defaultBold">{device.name}</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.header}>
                        <ThemedText type="defaultBold">Type</ThemedText>
                        <ThemedText type="default">{capitalize(device.type)}</ThemedText>
                    </ThemedView>
                    <Separator />
                    <ThemedView style={styles.header}>
                        <ThemedText type="defaultBold">Description</ThemedText>
                    </ThemedView>
                    <ThemedView style={[styles.description, { backgroundColor: colors.card }]}>
                        <ThemedText type="default">{device.description}</ThemedText>
                    </ThemedView>
                    <Separator />
                    <ThemedView style={styles.header}>
                        <ThemedView style={styles.header}>
                            <Ionicons name="globe-outline" color={colors.primary} size={30} />
                            <ThemedText type="defaultBold">Location</ThemedText>
                        </ThemedView>
                        <ThemedText type="default">{device.location || "Undefined"}</ThemedText>
                    </ThemedView>
                    <Separator />
                    <ThemedView style={styles.header}>
                        <ThemedView style={styles.header}>
                            <Ionicons name="pulse-outline" color={colors.primary} size={30} />
                            <ThemedText type="defaultBold">Status</ThemedText>
                        </ThemedView>
                        <ThemedText type="default">{capitalize(device.status)}</ThemedText>
                    </ThemedView>
                    <Separator />
                    <ThemedView style={styles.header}>
                        <ThemedView style={styles.header}>
                            <Ionicons name="radio-outline" color={colors.primary} size={30} />
                            <ThemedText type="defaultBold">Connection</ThemedText>
                        </ThemedView>
                        <ThemedText type="default">{capitalize(device.connection)}</ThemedText>
                    </ThemedView>
                    <Separator />
                    <ThemedView style={styles.header}>
                        <ThemedView style={styles.header}>
                            <Ionicons name="cellular-outline" color={colors.primary} size={30} />
                            <ThemedText type="defaultBold">Signal</ThemedText>
                        </ThemedView>
                        <ThemedText type="default">{device.signalPower > 80 ? 'Strong' : 'Poor'}</ThemedText>
                    </ThemedView>
                    <Separator />
                    <ThemedView style={styles.header}>
                        <ThemedView style={styles.header}>
                            <Ionicons name="notifications-outline" color={colors.primary} size={30} />
                            <ThemedText type="defaultBold">Alerts</ThemedText>
                        </ThemedView>
                    </ThemedView>
                </ThemedView>
            </ThemedScrollView>
        </ThemedView>
    );
};

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
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        gap: 10
    },
    description: {
        padding: 10,
        minHeight: 100,
        borderRadius: 25
    },
});