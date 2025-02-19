import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
 
import pages from './pages';


export default function AppetiteInfo({navigation}) {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={styles.container}>
    <View style={styles.iconContainer}>
    <TouchableOpacity
              style={styles.circle}
            >
              <FontAwesome5 name={'shield-virus'} size={30} color="#FFFFFF" />
              <Text style={styles.title}>Immunity</Text>
            </TouchableOpacity>
    </View>
      <Text style={styles.content}>{pages[4].content}</Text>

          <View style={styles.navigation}>
        {currentPage > 0 && (
          <TouchableOpacity style={styles.button} onPress={handlePrevious}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
      </View>
        )}
      

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color: '#555',
    marginBottom: 30,
    alignContent: 'center'
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1a7587',
    borderRadius: 8,
    justifyContent: 'right'
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  iconContainer: {
  alignItems: 'center',
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
  marginTop: 5, // Spacing between icon and text
  fontSize: 14,
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center',
},

});

// <TouchableOpacity style={styles.button} onPress={() => {handleNext}}>
          //   <Text style={styles.buttonText}>Next</Text>
          // </TouchableOpacity>

                // <Text style={styles.title}>{pages[currentPage].title}</Text>



