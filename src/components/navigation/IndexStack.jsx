import { useNavigation, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import { ThemedText } from "../ThemedText";
import HeaderBackground from "../HeaderBackground";
import DeviceScreen from "../../screens/DeviceScreen";

const Stack = createNativeStackNavigator();

export default function IndexStack() {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <Stack.Navigator
            screenOptions={{
                presentation: 'card',
                headerShown: true,
                headerShadowVisible: false,
                headerTintColor: colors.text,
                headerBackground: () => <HeaderBackground />
            }}>
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <>
                            <ThemedText type="title" style={{ color: colors.primary }}>D·</ThemedText>
                            <ThemedText type="title" style={{ color: colors.accent }}>O·</ThemedText>
                            <ThemedText type="title" style={{ color: colors.secondary }}>M·</ThemedText>
                            <ThemedText type="title" style={{ color: colors.text }}>E</ThemedText>
                        </>
                    ),
                }}
            />
            <Stack.Screen name="device"
                component={DeviceScreen}
                options={({ route }) => ({
                    title: route.params.device.name
                })}
                initialParams={{ device: null }}
            />
        </Stack.Navigator>
    );
}