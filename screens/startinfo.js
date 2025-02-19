import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const pages = [
  { title: "Appetite", icon: "utensils", page: "appetiteInfo" },
  { title: "Digestion", icon: "seedling", page: "digestionInfo" },
  { title: "Bowels", icon: "toilet", page: "bowelsInfo" },
  { title: "Energy", icon: "bolt", page: "staminaInfo" },
  { title: "Immunity", icon: "shield-virus", page: "immunityInfo" },
  { title: "Sleep", icon: "bed", page: "sleepInfo" },
  { title: "Calmness", icon: "peace", page: "calmnessInfo" },
  { title: "Cognition", icon: "brain", page: "cognitionInfo" },
  { title: "Hormones", icon: "dna", page: "hormonesInfo" },
];

export default function Info({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.content}>Click on each icon to guide you in your assessment. Answering yes to the questions indicates a higher score, while no suggests a lower score.
</Text>
        <View style={styles.grid}>
          {pages.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.circle}
              onPress={() => {
                console.log(`Navigating to: ${item.page}`);
                navigation.navigate(item.page);
              }}
            >
              <FontAwesome5 name={item.icon} size={30} color="#FFFFFF" />
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  scrollContent: {
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    margin: 15,
    borderRadius: 50,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color: '#555',
    marginBottom: 30,
    alignContent: 'center'
  },
});
