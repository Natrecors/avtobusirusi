import React from 'react';
import {Image, View, StyleSheet, ScrollView } from 'react-native';
import PublicTransportCard from './publictrasposrt';

const Kartata = () => {
  return (
    <View style={styles.container}>
        <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        pagingEnabled
        style={styles.scrollView}>


        <PublicTransportCard
          title="Детска карта за един месец 0 - 14г."
          description1="тролеи- безплатна"
          description2="автобуси -  безплатна"
          description3="тролеи и автобуси - безплатна "
          imageSource={require('./karti/dete.png')}
        
        />

        <PublicTransportCard
          title="Ученическа карта за един месец"
          description1="тролеи -  4лв"
          description2="автобуси -  10лв"
          description3="тролеи и автобуси - 12 лв "
          imageSource={require('./karti/uchenik.png')}
        />
        <PublicTransportCard
          title="Студентка карта за един месец"
          description1="тролеи -  6лв"
          description2="автобуси -  12лв"
          description3="тролеи и автобуси - 15 лв "
          imageSource={require('./karti/studneti1.png')}
        />
        
        <PublicTransportCard
          title="Карта за възрастни за един месец"
          description1="вс тролеи -  4лв"
          description2="вс автобуси -  10лв"
          description3="тролеи и автобуси - 12 лв "
          imageSource={require('./karti/pensi.png')}
        />
        <PublicTransportCard
          title="Нормална карта за един месец"
          description1="вс тролеи -  60 лв"
          description2="вс автобуси -  80 лв"
          description3="тролеи и автобуси - 135 лв "
          imageSource={require('./karti/normalna.png')}
        
        />
       </ScrollView>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Kartata;
