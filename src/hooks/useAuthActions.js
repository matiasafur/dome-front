import { useMutation } from "@apollo/client";
import { useCallback, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { TOKEN_KEY } from "@env";
import { clearStore, updateClientToken } from "../graphql/Client";
import { LOGIN_MUTATION, REGISTER_MUTATION } from "../graphql/mutations/userMutations";


export default function useAuthActions(setAuthState) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [loginMutation] = useMutation(LOGIN_MUTATION);
    const [registerMutation] = useMutation(REGISTER_MUTATION);

    const register = useCallback(async (username, email, password) => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await registerMutation({
                variables: {
                    username,
                    email,
                    password,
                }
            });
            return { data };
        } catch (error) {
            console.error('Error at AuthProvider register:', error);
            setError(error);
            return { error };
        } finally {
            setLoading(false);
        }
    }, [registerMutation]);

    const login = useCallback(async (username, password) => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await loginMutation({
                variables: {
                    username,
                    password
                },
            });

            const token = data?.login?.token;

            if (token) {
                setAuthState({
                    token,
                    authenticated: true,
                });
                await SecureStore.setItemAsync(TOKEN_KEY, token);
                await updateClientToken();
                console.log('New Login TOKEN: ', token);
                return { data };
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Error at AuthProvider login:', error.message);
            setError(error);
            return { error };
        } finally {
            setLoading(false);
        }
    }, [loginMutation, setAuthState]);

    const logout = useCallback(async () => {
        setLoading(true);
        try {
            await SecureStore.deleteItemAsync(TOKEN_KEY);
            setAuthState({
                token: null,
                authenticated: false,
            });
            await updateClientToken();
            await clearStore();
            console.log('Logged out successfully');
        } catch (error) {
            console.error('Error while logout:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [setAuthState]);

    return { register, login, logout, loading, error };
}