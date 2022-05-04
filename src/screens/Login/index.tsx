import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";
import { ButtonProps } from "../../interfaces/Button.interface";


export default function Login({ navigation }: LoginTypes) {
  async function handleSignIn() {
    navigation.navigate("Tab");
  }
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView>
          <Text style={styles.title}>Login</Text>
          <View style={styles.formRow}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.formRow}>
            <Entypo name="key" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Button title="Entrar" type="marrom" onPress={handleSignIn} />
          <Button title="Cadastre-se" type="dourado" onPress={handleCadastrar} />
        </KeyboardAvoidingView>
        <Image 
          source={require("../../../assets/logo2.png")}
          style={styles.image}
         />
    </View>
  );
}
