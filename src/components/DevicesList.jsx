import { useNavigation, useTheme } from "@react-navigation/native";
import { ThemedView } from "./ThemedView";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";


export default function DevicesList({ devices }) {
    let { colors } = useTheme();
    const navigation = useNavigation();

    const renderItem = useCallback(({ item: device }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('device-stats', { device });
                }}
            >
                <ThemedView style={[styles.item, { backgroundColor: colors.card }]}>
                    <ThemedView style={[styles.deviceAvatar, { backgroundColor: colors.card }]}>
                        <ThemedView style={[styles.icon, { backgroundColor: colors.border }]}>
                            <Ionicons name={device.icon || 'hardware-chip-outline'} color={colors.primary} size={35} />
                        </ThemedView>
                        <ThemedText type="default">{device.name}</ThemedText>
                    </ThemedView>
                    <ThemedView style={{ backgroundColor: colors.card }}>
                        <Ionicons name="chevron-forward" color={colors.border} size={30} />
                    </ThemedView>
                </ThemedView>
            </TouchableOpacity>
        );
    }, []);

    return (
        <>
            {devices?.length === 0 ? (
                <></>
            ) : (
                <ThemedView >
                    <FlatList
                        style={[styles.list, {
                            backgroundColor: colors.card,
                            borderColor: colors.border
                        }]}
                        data={devices}
                        keyExtractor={device => device.id}
                        scrollEnabled={false}
                        renderItem={device => renderItem(device)}
                        ItemSeparatorComponent={
                            <ThemedView style={{
                                backgroundColor: colors.border,
                                height: 1
                            }} />
                        }
                    />
                </ThemedView>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    list: {
        borderRadius: 25,
        borderWidth: 1,
    },
    item: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    deviceAvatar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 25,
    }
});