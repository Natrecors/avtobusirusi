import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const IntegerQRCode = ({ value }) => {
  const qrCodeSize = 75;


  const qrCodeValue = String(value);

  return (
    <View>
      <QRCode
        value={qrCodeValue}
        size={qrCodeSize}
      />
    </View>
  );
};

export default IntegerQRCode;