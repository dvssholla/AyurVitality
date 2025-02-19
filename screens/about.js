import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function About() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AyurVitality</Text>
      <Text style={styles.description}>
        Welcome to your personalized Ayurvedic health assessment tool. This app
        empowers you to explore and understand your health by evaluating key
        indicators of well-being through the timeless wisdom of Ayurveda. By
        assessing areas like appetite, digestion, energy, sleep, and mental
        peace, you’ll gain insights into your overall health and identify areas
        that might need nurturing.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('Button Pressed');
          navigation.navigate('credentials');
        }}>
        <Text style={styles.buttonText}>Let's go!</Text>
      </TouchableOpacity>
    </View>
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
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#187a85',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});