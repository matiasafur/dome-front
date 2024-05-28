import { useTheme } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

export default function ThemedScrollView({
    style,
    refreshable = false,
    refreshAction,
    refreshTimeout = 5000,
    ...rest
}) {
    const { colors } = useTheme();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);

        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Refresh timed out')), refreshTimeout)
        );

        // Wrap refreshAction to ensure it returns a promise
        const wrappedRefreshAction = () => {
            try {
                return Promise.resolve(refreshAction());
            } catch (error) {
                return Promise.reject(error);
            }
        };

        try {
            await Promise.race([wrappedRefreshAction(), timeoutPromise]);
        } catch (error) {
            console.log(error.message);
        } finally {
            setRefreshing(false);
        }
    }, [refreshAction, refreshTimeout]);

    return (
        <ScrollView
            style={[
                style,
                {
                    backgroundColor: colors.background
                }]}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            refreshControl={refreshable ? (
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={colors.primary}
                />
            ) : null}
            {...rest}
        />
    );
}
