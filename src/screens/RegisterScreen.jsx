import React from "react";
import { ActivityIndicator, Alert, Button, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ThemedView } from "../components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Formik } from "formik";
import FormikInput from "../components/FormikInput";
import { useAuth } from "../context/AuthContext";
import { ThemedText } from "../components/ThemedText";
import registerSchema from "../schemes/registerSchema";

const initialValues = {
    username: '',
    email: '',
    password: '',
}

export default function RegisterScreen() {
    const { colors } = useTheme();
    const { register, loading, error } = useAuth();
    const navigation = useNavigation();

    const handleRegister = async ({ username, email, password }) => {
        const result = await register(username, email, password);
        if (result?.error) {
            Alert.alert('Create Account Failed', result.error.message || 'Network request timed out');
        } else if (result.data?.createUser?.id) {
            Alert.alert('Account created successfully');
            navigation.goBack();
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
                    <Formik
                        initialValues={initialValues}
                        validationSchema={registerSchema}
                        onSubmit={handleRegister}>
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
                                                name='email'
                                                placeholder="E-mail"
                                            />
                                            <FormikInput
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <ThemedView style={{ marginVertical: 10 }}>
                                                <Button onPress={handleSubmit} title="Submit" color={colors.primary} />
                                                <Button onPress={() => navigation.goBack()} title="Cancel" color={colors.notification} />
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