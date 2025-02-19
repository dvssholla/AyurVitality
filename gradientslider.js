import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Svg, { Rect, Polygon, Defs, LinearGradient, Stop } from "react-native-svg";

const GradientSlider = ({ score }) => {
  const width = Dimensions.get("window").width * 0.8;
  const height = 20;
  const pointerSize = 12;
  const minValue = 1;
  const maxValue = 5;
  const position = ((score - minValue) / (maxValue - minValue)) * width;

  return (
    <View style={styles.container}>
      <Svg width={width} height={height + pointerSize}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#ff3333" />
            <Stop offset="0.5" stopColor="#ffff66" />
            <Stop offset="1" stopColor="#33cc33" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width={width} height={height} rx={10} fill="url(#grad)" />
        <Polygon
          points={`${position - pointerSize / 2},${height} ${position + pointerSize / 2},${height} ${position},${height + pointerSize}`}
          fill="red"
        />
      </Svg>
      <Text style={[styles.label, { left: position - 5 }]}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  label: {
    position: "absolute",
    top: 35,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default GradientSlider;
