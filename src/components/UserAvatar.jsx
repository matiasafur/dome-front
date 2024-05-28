import { StyleSheet, TouchableWithoutFeedback } from "react-native"
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { useTheme } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function UserAvatar({ user, onPress }) {
    const { colors } = useTheme();

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <ThemedView style={styles.container}>
                <ThemedText type="defaultBold" style={{ color: colors.text }}>{user.username}</ThemedText>
                <FontAwesome5 name={user?.avatar ? user.avatar : "user-astronaut"} size={25} color={colors.secondary} />
            </ThemedView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
});