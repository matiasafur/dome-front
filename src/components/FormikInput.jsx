import React, { useState } from "react";
import { useField } from "formik";
import { Dimensions, TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Ionicons } from "@expo/vector-icons";

const { width: windowWidth } = Dimensions.get("window");

export default function FormikInput({ name, type = 'default' | 'password', ...props }) {
    const { colors } = useTheme();
    const [field, meta, helpers] = useField(name);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <ThemedView style={{ padding: 5 }}>
            <ThemedView style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 14,
                borderWidth: 1,
                borderColor: meta.error ? colors.notification : colors.border
            }}>
                <TextInput
                    style={{
                        color: colors.text,
                        fontSize: 16,
                        width: windowWidth * 0.7,
                        height: 40,
                        paddingHorizontal: 2,
                        paddingVertical: 10,
                    }}
                    value={field.value}
                    secureTextEntry={type === 'password' ? !showPassword : false}
                    onChangeText={value => helpers.setValue(value)}
                    {...props}
                />
                {type == 'password' && (
                    <Ionicons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color={colors.text}
                        style={{ marginLeft: 10 }}
                        onPress={toggleShowPassword}
                    />
                )}
            </ThemedView>
            <ThemedView>
                {meta.error && <ThemedText type="notification">{meta.error}</ThemedText>}
            </ThemedView>
        </ThemedView>
    )
}
