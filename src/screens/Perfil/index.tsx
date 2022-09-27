import React,  {useEffect, useRef, useState}  from "react";
import { Text, View, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonComp, CardSocialComp } from "../../components";
import styles from "./styles";
import { useAuth } from "../../hook/auth";
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from "../../services/data/Push"


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Perfil() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      const token = await registerForPushNotificationsAsync()
      console.log(token)
    }
    fetchToken()
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Miguel Miranda Fracassi</Text>
        <Text style={styles.title}> Dragon Ball Z</Text>
        <CardSocialComp>
          <>
            <FontAwesome5 name="facebook" />
            <TextInput placeholder="https://facebook.com" />
          </>
        </CardSocialComp>
        <CardSocialComp>
          <>
            <FontAwesome5 name="instagram" />
            <TextInput placeholder="https://instagram.com" />
          </>
        </CardSocialComp>
        <CardSocialComp>
          <>
            <FontAwesome5 name="twitter" />
            <TextInput placeholder="https://twitter.com" />
          </>
        </CardSocialComp>
        <ButtonComp
          title="Salvar"
          type="dourado"
          onPress={() => console.log("Alterar Senha")}
        />
        <ButtonComp 
        title="Sair" 
        type="dourado" 
        onPress={() => console.log("Sair")} 
        />

    </View>
  );
}