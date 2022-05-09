import React from "react";
import { View, Text, ImageBackground, Image, TextInput } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Miguel Miranda Fracassi</Text>
        <Text style={styles.title}> Dragon Ball Z</Text>
        <CardSocial>
          <>
            <FontAwesome5 name="facebook" />
            <TextInput placeholder="https://facebook.com" />
          </>
        </CardSocial>
        <CardSocial>
          <>
            <FontAwesome5 name="instagram" />
            <TextInput placeholder="https://instagram.com" />
          </>
        </CardSocial>
        <CardSocial>
          <>
            <FontAwesome5 name="twitter" />
            <TextInput placeholder="https://twitter.com" />
          </>
        </CardSocial>
        <Button
          title="Salvar"
          type="dourado"
          onPress={() => console.log("Salvar")}
        />
        <Button
          title="Alterar Senha"
          type="dourado"
          onPress={() => console.log("Alterar Senha")}
        />
        <Button 
        title="Sair" 
        type="dourado" 
        onPress={() => console.log("Sair")} 
        />

    </View>
  );
}