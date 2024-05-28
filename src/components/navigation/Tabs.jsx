import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";

// Screens
import SettingsScreen from "../../screens/SettingsScreen";
import SignInScreen from "../../screens/SignInScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import IndexStack from "./IndexStack";
import HeaderBackground from "../HeaderBackground";

const Tab = createBottomTabNavigator();

export default function Tabs() {
    const { colors } = useTheme();
    const { authState } = useAuth();

    return (
        <Tab.Navigator
            initialRouteName={authState.authenticated ? 'index' : 'signin'}
            screenOptions={{
                headerShown: false,
                headerTitleStyle: { fontSize: 20 },
                headerTintColor: colors.text,
                headerShadowVisible: false,
                headerBackground: () => <HeaderBackground />,
                tabBarActiveTintColor: colors.primary,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    minHeight: 100,
                    borderTopWidth: 1,
                    borderTopColor: colors.border,
                    backgroundColor: colors.background,
                },
            }}>

            {authState.authenticated ?
                (
                    <>
                        <Tab.Screen
                            name="index"
                            component={IndexStack}
                            options={{
                                tabBarIcon: ({ color, focused, size }) => (
                                    <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="settings"
                            component={SettingsScreen}
                            options={{
                                tabBarIcon: ({ color, focused, size }) => (
                                    <Ionicons name={focused ? 'list' : 'list-outline'} color={color} size={size} />
                                ),
                            }} />
                    </>
                ) : (
                    <>
                        <Tab.Screen
                            name="signin"
                            component={SignInScreen}
                            options={{
                                title: 'Sign In',
                                headerShown: true,
                                tabBarStyle: {
                                    display: 'none',
                                }
                            }} />
                        <Tab.Screen
                            name="register"
                            component={RegisterScreen}
                            options={{
                                title: 'Create Account',
                                headerShown: true,
                                tabBarStyle: {
                                    display: 'none',
                                }
                            }} />
                    </>
                )}
        </Tab.Navigator>
    );
}