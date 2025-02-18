import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

const Zanas = ({ title, description, imageSource }) => {
  return (
    <View style={styles.card}>      
      <Image source={imageSource} style={styles.cardImage}/>
      <Text style={styles.cardDescription}>{description}</Text>

    </View>
  );
};

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

  cardImage:{
    height:300,
    width:320,
    left:10
  },
});

export default Zanas;