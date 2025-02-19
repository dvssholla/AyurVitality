import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Settings({ navigation }) {
  const [averageCalc, setAverageCalc] = useState('Option 1');
  const [graphInterval, setGraphInterval] = useState('Daily');
  const [showAverageDropdown, setShowAverageDropdown] = useState(false);
  const [showGraphDropdown, setShowGraphDropdown] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Supportive</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>About Application</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Send Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Support</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.rowText}>App version</Text>
          <Text style={styles.versionText}>V1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rowText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownIcon: {
    fontSize: 18,
    color: '#888',
  },
  dropdown: {
    backgroundColor: '#4d4b4b',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: -5,
  },
  versionText: {
    fontSize: 16,
    color: '#888',
  },
});
 