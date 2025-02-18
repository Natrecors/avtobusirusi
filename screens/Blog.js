import { View, Text, Image } from 'react-native'
import React from 'react'
import PublicTransportCard from './publictrasposrt';
import Zanas from './zanas';
import IntegerQRCode from './qrcode';

export default function About() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Zanas imageSource={require("../assets/images/nas.png")} description="Ние сме учебно предприятие Транспорт Съпорт Канети. Фирмата ни се състои от 13 души: Преслава, Найден, Любослав, Мартин М., Николай, Мартин С., Мария, Филипа, Кирил, Янислав, Момчил, Леа, Стойко." />
</View>
  )
}

