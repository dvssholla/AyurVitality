import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cards = [
  {
    id: 1, 
    title: 'Acne', 
    image: 'https://assets.nhs.uk/nhsuk-cms/images/S_0917_acne_M1080444.max-600x600.jpg', 
    buttons: ['Description', 'Symptoms', 'Causes', 'Treatments'],
  },
  {
    id: 2, 
    title: 'Cystic Acne', 
    image: 'https://my.clevelandclinic.org/-/scassets/images/org/health/articles/21737-cystic-acne-694069284', 
    buttons: ['Description', 'Symptoms', 'Causes', 'Treatments'],
  },
  {
  id: 3, 
    title: 'Blackheads', 
    image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/BeautyandSkinCare/793-Blackheads-1296x728-body.jpg?w=1155&h=1528', 
    buttons: ['Description', 'Symptoms', 'Causes', 'Treatments'],
  },
];

const Card = ({ card, expanded, onPress, onButtonPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardText}>{card.title}</Text>
    {expanded && (
      <View style={styles.buttonContainer}>
        {card.buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => onButtonPress(card, button)}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}
  </TouchableOpacity>
);

export default function Library() {
  const [expandedCard, setExpandedCard] = useState(null);
  const navigation = useNavigation();

  const handleCardPress = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleButtonPress = (card, button) => {
    navigation.navigate('Detail', { card, button });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Skincare Library</Text>
        <View style={styles.cardContainer}>
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              expanded={expandedCard === card.id}
              onPress={() => handleCardPress(card.id)}
              onButtonPress={handleButtonPress}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 80,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'teal',
    borderRadius: 10,
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'teal',
    fontSize: 16,
  },
});