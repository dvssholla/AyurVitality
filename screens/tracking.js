import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Tracking() {
  const navigation = useNavigation();
  const [taskDate, setTaskDate] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const [responses, setResponses] = useState({
    appetite: null,
    digestion: null,
    bowel: null,
    stamina: null,
    immunity: null,
    sleep: null,
    peaceOfMind: null,
    senseOrgans: null,
    hormones: null,
  });

  const questions = [
    { key: 'appetite', label: 'Appetite' },
    { key: 'digestion', label: 'Digestion' },
    { key: 'bowel', label: 'Bowels' },
    { key: 'stamina', label: 'Energy' },
    { key: 'immunity', label: 'Immunity' },
    { key: 'sleep', label: 'Sleep' },
    { key: 'peaceOfMind', label: 'Calmness' },
    { key: 'senseOrgans', label: 'Cognitition' },
    { key: 'hormones', label: 'Hormones' },
  ];

  const handleResponse = (key, value) => {
    setResponses((prev) => ({ ...prev, [key]: value }));
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDateTimePicker(false);
    if (selectedDate) {
      setTaskDate(selectedDate);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.subtitle}>1 = Poor, 5 = Excellent</Text>

        <View style={styles.dateContainer}>
          <Text style={styles.label}>Select Date:</Text>
          <TouchableOpacity
            style={styles.dateTimePickerButton}
            onPress={() => setShowDateTimePicker(true)}>
            <Text style={styles.dateTimePickerButtonText}>
              {taskDate.toDateString()}
            </Text>
          </TouchableOpacity>
          {showDateTimePicker && (
            <DateTimePicker
              value={taskDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        {questions.map((question) => (
          <View key={question.key} style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.label}</Text>
            <View style={styles.radioGroup}>
              {[1, 2, 3, 4, 5].map((rating) => (
                <TouchableOpacity
                  key={rating}
                  style={[
                    styles.numberButton,
                    responses[question.key] === rating && styles.selectedButton,
                  ]}
                  onPress={() => handleResponse(question.key, rating)}>
                  <Text
                    style={[
                      styles.numberText,
                      responses[question.key] === rating && styles.clickedText,
                    ]}>
                    {rating}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("dashboard")}}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  dateTimePickerButton: {
    height: 40,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#187a85',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  dateTimePickerButtonText: {
    fontSize: 16,
    color: '#187a85',
  },
  questionContainer: {
    marginBottom: 20,
    width: '100%',
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
   
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  numberButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#187a85',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: '#ffffff',
  },
  selectedButton: {
    backgroundColor: '#187a85',
  },
  numberText: {
    fontSize: 16,
    color: '#187a85',
  },
  clickedText: {
    color: '#ffffff',
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    backgroundColor: '#187a85',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
  },
});
