import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import * as SecureStore from "expo-secure-store";
import { SERVER_URL, TOKEN_KEY } from "@env";

console.log('Client attempts to connect to: ', SERVER_URL);

const httpLink = createHttpLink({
    uri: SERVER_URL,
    credentials: 'same-origin',
});

const authLink = setContext(async (_, { headers }) => {
    try {
        const token = await SecureStore.getItemAsync(TOKEN_KEY);
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : '',
            }
        };
    } catch (error) {
        console.error("Error fetching token from SecureStore:", error);
        return {
            headers: {
                ...headers,
            }
        };
    }
});

let client;

export function initializeClient() {
    client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
        name: 'dome',
    });
    return client;
}

export async function updateClientToken() {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    client.setLink(
        setContext((_, { headers }) => ({
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : '',
            }
        })).concat(httpLink)
    );
}

export async function clearStore() {
    if (client) {
        await client.clearStore();
    }
}
