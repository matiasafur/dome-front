import React from "react";
import { ActivityIndicator, Alert, Button, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ThemedView } from "../components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Formik } from "formik";
import signInSchema from "../schemes/signInSchema";
import FormikInput from "../components/FormikInput";
import { useAuth } from "../context/AuthContext";
import { ThemedText } from "../components/ThemedText";

const initialValues = {
    username: '',
    password: '',
}

export default function SignInScreen() {
    const { colors } = useTheme();
    const { login, loading, error } = useAuth();
    const navigation = useNavigation();

    const handleLogin = async ({ username, password }) => {
        const result = await login(username, password);
        if (result?.error) {
            Alert.alert('Login Failed', result.error.message || 'Network request timed out');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}>
                <ThemedView style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    {error && <ThemedText type="notification">{error.message}</ThemedText>}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={signInSchema}
                        onSubmit={handleLogin}>
                        {({ handleSubmit }) => {
                            return (
                                <ThemedView>
                                    {loading ? (
                                        <>
                                            <ActivityIndicator size="large" color={colors.primary} />
                                        </>
                                    ) : (
                                        <>
                                            <FormikInput
                                                name="username"
                                                placeholder="Username"
                                            />
                                            <FormikInput
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <ThemedView style={{ marginVertical: 10 }}>
                                                <Button onPress={handleSubmit} title="Log In" color={colors.primary} />
                                                <Button onPress={() => navigation.navigate('register')} title="Create Account" color={colors.link} />
                                            </ThemedView>
                                        </>
                                    )}
                                </ThemedView>
                            );
                        }}
                    </Formik>
                </ThemedView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
