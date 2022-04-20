import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";

export default function Perfil() {
  return (
    <View>
      <ImageBackground source={require("../../../assets/logo2.png")}>
        <Text>Miguel Miranda Fracassi</Text>
        <Text>Seu mangá favorito</Text>
      </ImageBackground>
    </View>
  );
}