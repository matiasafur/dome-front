import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { TOKEN_KEY } from "@env";
import { initializeClient, updateClientToken } from "../graphql/Client";


export default function useAuthState() {
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: false,
    });
    useEffect(() => {
        initializeClient();
    }, []);

    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await SecureStore.getItemAsync(TOKEN_KEY);

                if (token) {
                    setAuthState({
                        token,
                        authenticated: true,
                    });
                }
            } catch (error) {
                console.error('Failed to load token:', error);
            }
        };
        loadToken();
    }, []);

    useEffect(() => {
        const saveToken = async () => {
            try {
                if (authState.token) {
                    await SecureStore.setItemAsync(TOKEN_KEY, authState.token);
                } else {
                    await SecureStore.deleteItemAsync(TOKEN_KEY);
                }
                await updateClientToken();
            } catch (error) {
                console.error('Failed to save token:', error);
            }
        };
        saveToken();
    }, [authState.token]);

    return { authState, setAuthState };
}