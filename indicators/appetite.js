import React, { useState } from "react";
import { View, Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { FontAwesome5 } from '@expo/vector-icons';
import GradientSlider from '../gradientslider'

const Appetite = ({ navigation }) => {
  // Graph intervals
  const intervals = ["4/7", "4/9", "4/11", "4/12", "4/13", "4/16"];

  // Slider state
  const [score, setScore] = useState(4);
  const colors = ["#ff9999", "#ffcc99", "#e3e388", "#ccff99", "#99ff99"];

  return (
    <View style={styles.container}>
      {/* ICON */}
      <TouchableOpacity style={styles.circle}>
        <FontAwesome5 name={'utensils'} size={30} color="#FFFFFF" />
        <Text style={styles.title}>Appetite</Text>
      </TouchableOpacity>
      
      {/* GRAPH */}
      <LineChart
        data={{
          labels: intervals,
          datasets: [{ data: [3, 4, 1, 2, 4, 5] }],
        }}
        width={Dimensions.get("window").width - 40}
        height={220}
        chartConfig={{
          backgroundColor: "#fffff",
          backgroundGradientFrom: "#ffff",
          backgroundGradientTo: "#fffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(84, 196, 171, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(84, 196, 172, ${opacity})`,
          propsForDots: { r: "6", strokeWidth: "2", stroke: "#54c4ab" },
        }}
        style={{ marginVertical: 8, borderRadius: 16 }}
      />

      <GradientSlider score={score}/>
      
      <Text style={styles.heading}>Score: {score}</Text>
      <Text style={styles.heading}>
        {score <= 3 ? "Great start, let's build on this!" : "You're doing great, keep up the good work!"}
      </Text>

      {/* BUTTONS */}
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('appetiteTips')}}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#1a7587",
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  circle: {
    width: 100,
    height: 100,
    margin: 15,
    marginTop: 100,
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
});

export default Appetite;

// <View style={styles.ovalSlider}>
//         {[1, 2, 3, 4, 5].map((value, index) => (
//           <TouchableOpacity
//             key={value}
//             onPress={() => setScore(value)}
//             style={[styles.ovalButton, {
//               backgroundColor: colors[index],
//               opacity: score === value ? 1 : 0.6,
//             }]}
//           >
//             <Text style={styles.ovalText}>{value}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>