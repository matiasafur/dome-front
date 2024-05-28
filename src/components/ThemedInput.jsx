import { useTheme } from "@react-navigation/native";
import { TextInput } from "react-native";
import { ThemedText } from "./ThemedText";


export default function ThemedInput({
    children,
    style,
    ...rest }) {
    const { colors } = useTheme();

    return (
        <TextInput style={
            [style, { backgroundColor: colors.card }]}
            {...rest}>
            <ThemedText type="default">{children}</ThemedText>
        </TextInput >
    );
};