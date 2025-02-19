import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';

export default function Dashboard({ navigation }) {
  const data = [
    { title: "Appetite", value: 4, icon: 'utensils', page: 'appetite' },
    { title: "Digestion", value: 3,  icon: 'seedling', page: 'digestion' },
    { title: "Bowels", value: 2, icon: 'toilet', page: 'bowel' },
    { title: "Energy", value: 4, icon: 'bolt', page: 'stamina' },
    { title: "Immunity", value: 5, icon: 'shield-virus', page: 'immunity' },
    { title: "Sleep", value: 3, icon: 'bed', page: 'sleep' },
    { title: "Calmness", value: 5, icon: 'peace', page: 'peace' },
    { title: "Cognition", value: 2, icon: 'brain', page: 'cognitive' },
    { title: "Hormones", value: 1, icon: 'dna', page: 'hormonal' },
  ];

  const totalScore = data.reduce((sum, item) => sum + item.value, 0) / data.length;
  const progress = totalScore;

  const circleRadius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * circleRadius;
  
  // const progressOffset = circumference - (progress * circumference); 
  const circleOffSet = -(circumference/5) * (5 - Math.round(progress))

  return (
    <View style={styles.container}>
      <View style={styles.batteryContainer}>
        <Svg height="120" width="120">
          <Circle
            cx="60"
            cy="60"
            r={circleRadius}
            stroke="#f2f2f2"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx="60"
            cy="60"
            r={circleRadius}
            stroke={progress > 0.6 ? '#008080' : '#008080'}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${circumference}`}
            strokeDashoffset={`${circleOffSet}`}
            strokeLinecap="round"
          />
        </Svg>
        <View style={styles.batteryLabel}>
          <Text style={styles.batteryText}>{Math.round(progress)}</Text>
          <Text style={styles.batterySubtitle}>Overall</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.circle,
                {
                  backgroundColor: item.value > 3 ? '#008080' : '#EE4B2B',
                  borderColor: item.value > 3 ? '#54c4ab' : '#F05D5E',
                },
              ]}
              onPress={() => {
                console.log(`Navigating to: ${item.page}`);


                navigation.navigate(item.page);
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <FontAwesome5
                name={item.icon}
                size={40}
                color={item.color === 'green' ? '#FFFFFF' : '#FFFFFF'}
                style={styles.icon}
              />
              <Text style={styles.value}>{item.value}</Text>
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
    backgroundColor: '#fff',
  },
  batteryContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  batteryLabel: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 40,
  },
  batteryText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  batterySubtitle: {
    fontSize: 14,
    color: '#555',
  },
  scrollContent: {
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  circle: {
    width: 90,
    height: 90,
    margin: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    position: 'absolute',
    top: -25,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  icon: {
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFF',
  },
});
