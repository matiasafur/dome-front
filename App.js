import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Layout } from "./src/components/navigation/_layout";
import { ApolloProvider } from "@apollo/client";
import { initializeClient } from "./src/graphql/Client";
import { AuthProvider } from "./src/context/AuthContext";

const client = initializeClient();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <SafeAreaProvider style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <Layout />
        </SafeAreaProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
