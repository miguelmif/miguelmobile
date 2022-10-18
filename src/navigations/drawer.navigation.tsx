import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ChatNavigation from "../navigations/chat.navigation"
import { ChatScreen, PerfilScreen, MapScreen, SairScreen, QrCodeScreen, CameraScreen, ArquivoScreen, VideoAudioScreen, AcelerometroScreen } from "../screens";
import colors from "../styles/colors";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: colors.black },
                headerTintColor: colors.white,
                drawerStyle: { backgroundColor: colors.black },
                drawerActiveTintColor: colors.white,
                drawerInactiveTintColor: colors.white,
            }}
        >
            <Drawer.Screen
                name="AudioVideo"
                component={VideoAudioScreen}
                options={{
                    drawerLabel: "Áudio Vídeo",
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="video" size={24} color={colors.white} />
                    ),
                }}
            /> 
            <Drawer.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                drawerIcon: () => (
                    <Ionicons name="person" size={24} color={colors.white} />
                ),
                }}
            />
            <Drawer.Screen
                name="Sair"
                component={SairScreen}
                options={{
                drawerIcon: () => (
                    <Ionicons name="exit" size={24} color={colors.white} />
                ),
                }}
            />
             <Drawer.Screen
                name="Acelerometro"
                component={AcelerometroScreen}
                options={{
                drawerIcon: () => (
                    <Ionicons name="exit" size={24} color={colors.white} />
                ),
                }}
            />
        </Drawer.Navigator>
    )
}