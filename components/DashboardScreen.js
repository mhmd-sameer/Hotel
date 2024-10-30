// src/components/DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DashboardScreen = () => {
  // Sample customer data
  const customerInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    roomNumber: '101',
    checkInDate: '2024-10-25',
    checkOutDate: '2024-10-30',
    photo: 'https://via.placeholder.com/100', // Placeholder image URL
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.title}>Service Available</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Image source={{ uri: customerInfo.photo }} style={styles.photo} />
        
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>{customerInfo.name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{customerInfo.email}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>{customerInfo.phone}</Text>

        <Text style={styles.label}>Room Number:</Text>
        <Text style={styles.info}>{customerInfo.roomNumber}</Text>

        <Text style={styles.label}>Check-In Date:</Text>
        <Text style={styles.info}>{customerInfo.checkInDate}</Text>

        <Text style={styles.label}>Check-Out Date:</Text>
        <Text style={styles.info}>{customerInfo.checkOutDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: 'orange',
  },
  header: {
    marginBottom: 20,
    marginTop:40,
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
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3, // Adds shadow to the info card
    alignItems: 'center', // Center align items in the container
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Make it circular
    marginBottom: 15, // Space between photo and text
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
});

export default DashboardScreen;
