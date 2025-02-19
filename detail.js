import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const content = {
  Acne: {
    'Description': 'Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It often results in whiteheads, blackheads, or pimples and typically appears on the face, forehead, chest, upper back, and shoulders. Acne is most prevalent among teenagers, though it can affect people of all ages. Several factors contribute to acne, including excess oil production, bacteria, hormonal imbalances, certain medications, and diet.',
    'Symptoms': 'Symptoms of acne...',
    'Causes': 'Causes of acne...',
    'Treatments': 'Treatments for acne...',
  },
  'Cystic Acne': {
    'Description': 'Cystic acne is a type of severe acne caused by inflamed cysts under the skin. These cysts are red and swollen, filled with pus. This type of acne can affect the back, face, chest, and can leave scarring if not treated properly. Treatment to this skin issue includes prescription medication, such as antibiotics, hormonal therapies, or retinoids.',
    'Symptoms': 'Symptoms of Cystic acne...',
    'Causes': 'Causes of Cystic acne...',
    'Treatments': 'Treatments for Cystic acne...',
  },
  'Blackheads': {
    'Description': 'Blackheads, or open comedones, are a common form of acne characterized by small, dark bumps on the skin. They occur when hair follicles become clogged with a mixture of dead skin cells and excess oil (sebum). Unlike whiteheads, which are closed, blackheads have an open surface that allows the trapped material to oxidize and turn black when exposed to air. They often appear on the face, particularly the nose, forehead, and chin, but can also be found on other parts of the body. Proper skincare and treatments like salicylic acid and retinoids can help manage and reduce blackheads.',
    'Symptoms': 'Symptoms of Blackheads...',
    'Causes': 'Causes of Blackheads...',
    'Treatments': 'Treatments for Blackheads...',
  },
};

export default function Detail({ route }) {
  const { card, button } = route.params;
  const buttonContent = content[card.title][button];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{card.title}</Text>
        {button === 'Description' && (
          <Image source={{ uri: card.image }} style={styles.image} />
        )}
        <Text style={styles.description}>{buttonContent}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});