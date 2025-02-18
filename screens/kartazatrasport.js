import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import IntegerQRCode from './qrcode';

const Kartazatrasport = ({ title, description, imageSource }) => {
  return (
    <View style={styles.card}>
      <Text style={{alignItems:'center'}}>carta
      <IntegerQRCode value={integerToConvert}/></Text>
      <Text>carta</Text>
    </View>
  );
};
const integerToConvert = "https://natrecors.free.bg";

const styles = StyleSheet.create({
  card: {
    color:'#E0E2DB',
    backgroundColor: '#B8BDB5',
    borderRadius: 10,
    padding: 12,
    margin: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardDescription: {
    fontSize: 20,    
    fontWeight: 'bold',
    marginTop: 8,},
  
});

export default Kartazatrasport;