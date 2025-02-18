import { View, Text } from 'react-native'
import React from 'react'
import PublicTransportCard from './publictrasposrt';
import Kartazatrasport from './kartazatrasport';
import IntegerQRCode from './qrcode';

export default function Kartazatrasport2() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Kartazatrasport ><IntegerQRCode value={integerToConvert} /></Kartazatrasport>
    </View>
  )
}

const integerToConvert = "https://natrecors.free.bg";