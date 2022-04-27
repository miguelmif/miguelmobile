import React from "react";
import { View, Text, ImageBackground, Image, TextInput } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.container}
      >
        <Image source={require("../../assets/lazaro.png")} />
        <Text>Lázaro Eduardo da Silva</Text>
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
          type="marrom"
          onPress={() => console.log("Salvar")}
        />
        <Button
          title="Alterar Senha"
          type="dourado"
          onPress={() => console.log("Alterar Senha")}
        />
        <Button title="Sair" type="black" onPress={() => console.log("Sair")} />
      </ImageBackground>
    </View>
  );
}