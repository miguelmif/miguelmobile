import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, PerfilScreen, MapScreen, SairScreen, QrCodeScreen, CameraScreen } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.cinza,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.cinza,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={ChatScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="map" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Sair"
        component={SairScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="exit" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="QrCode"
        component={QrCodeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="qrcode-scan" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="camera" size={24} color={colors.white} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
