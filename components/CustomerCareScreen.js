// src/components/CustomerCareScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For icons

const CustomerCareScreen = () => {
  
  // Function to handle button press
  const handleOptionPress = (option) => {
    Alert.alert(`${option} selected`, `You chose the ${option} option.`, [{ text: 'OK' }]);
  };

  return (
    <View style={styles.screen}>
      {/* Header Section */}
      <View style={styles.header}>
          <View style={styles.headerInner}>
            <Text style={styles.title}>Hotel Room Details</Text>
          </View>
      </View>

      {/* Options Section */}
      <View style={styles.options}>
        {/* Room Service Option */}
        <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Room Service')}>
          <Icon name="bed" size={24} color="#FFA500" />
          <Text style={styles.optionText}>Room Service</Text>
        </TouchableOpacity>

        {/* Laundry */}
        <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Laundry Service')}>
          <Icon name="tint" size={24} color="#FFA500" />
          <Text style={styles.optionText}>Laundry Service</Text>
        </TouchableOpacity>

        {/* Wi-Fi Support */}
        <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Wi-Fi Support')}>
          <Icon name="wifi" size={24} color="#FFA500" />
          <Text style={styles.optionText}>Wi-Fi Support</Text>
        </TouchableOpacity>

        {/* Billing Assistance */}
        <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Billing Assistance')}>
          <Icon name="credit-card" size={24} color="#FFA500" />
          <Text style={styles.optionText}>Billing Assistance</Text>
        </TouchableOpacity>

        {/* Complaint Registration */}
        <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Complaint Registration')}>
          <Icon name="exclamation-triangle" size={24} color="#FFA500" />
          <Text style={styles.optionText}>Complaint Registration</Text>
        </TouchableOpacity>

        {/* Feedback */}
        <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Feedback')}>
          <Icon name="comment" size={24} color="#FFA500" />
          <Text style={styles.optionText}>Feedback</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    marginTop: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  headerInner: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  options: {
    flex: 1,
    justifyContent: 'center', // Center options vertically
    alignItems: 'center', // Center options horizontally
  },
  optionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    width: '90%',
    borderRadius: 10,
    elevation: 3, // Adds shadow to buttons
  },
  optionText: {
    marginLeft: 15,
    fontSize: 18,
    color: '#333',
  },
});

export default CustomerCareScreen;
