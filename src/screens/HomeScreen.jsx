import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";

import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";
import LoadingView from "../components/LoadingView";
import ErrorView from "../components/ErrorView";
import ThemedScrollView from "../components/ThemedScrollView";
import DevicesList from "../components/DevicesList";
import { CURRENT_USER_QUERY } from "../graphql/queries/userQueries";
import UserAvatar from "../components/UserAvatar";

export default function HomeScreen() {
    const { colors } = useTheme();
    const navigation = useNavigation();

    const { data, loading, error, refetch } = useQuery(
        CURRENT_USER_QUERY,
        { fetchPolicy: 'network-only' }
    );

    useEffect(() => {
        if (data && data.me) {
            navigation.setOptions({
                headerRight: () => (
                    <UserAvatar
                        user={data.me}
                        onPress={() => navigation.navigate('settings')}
                    />
                )
            });
        }
    }, [data, navigation]);

    if (loading) {
        return <LoadingView />;
    }

    const devices = data?.me?.devices;

    return (
        <ThemedView style={styles.container}>
            <ThemedScrollView
                refreshable={true}
                refreshAction={refetch}
            >
                {error ? (
                    <ErrorView message={error.message} />
                ) : (
                    <ThemedView style={styles.content}>
                        <ThemedView style={styles.header}>
                            <ThemedText type="defaultBold">My Devices</ThemedText>
                            <Ionicons
                                name="add"
                                color={colors.accent}
                                size={30}
                                accessible={true}
                            />
                        </ThemedView>
                        {devices?.length === 0 ? (
                            <ThemedText type="defaultBold">Start adding your devices</ThemedText>
                        ) : (
                            <DevicesList devices={devices} />
                        )}
                    </ThemedView>
                )}
            </ThemedScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingHorizontal: 10,
            marginBottom: 100
        },
        content: {
            paddingVertical: 10,
            gap: 10,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    });