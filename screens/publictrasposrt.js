import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

const PublicTransportCard = ({ title, description1,description2,description3, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description1}</Text>
      <Text style={styles.cardDescription}>{description2}</Text>
      <Text style={styles.cardDescription}>{description3}</Text>
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
  cardImage: {
    width: 300,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#5F7470',
  },
  cardDescription: {
    fontSize: 20,
    marginTop: 8,},
  
});

export default PublicTransportCard;