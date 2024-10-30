import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const StaffProfile = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaView style={isDarkMode ? styles.darkSafeContainer : styles.safeContainer}>
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.contentContainer} 
        showsVerticalScrollIndicator={false}
      >
        {/* Theme Toggle Button */}
        <TouchableOpacity 
          style={styles.themeToggleButton} 
          onPress={toggleTheme}
        >
          <Icon name={isDarkMode ? "sunny" : "moon"} size={30} color={isDarkMode ? "#FFA500" : "#333"} />
        </TouchableOpacity>

        {/* Settings Icon */}
        <TouchableOpacity 
          style={styles.settingsIcon} 
          onPress={() => navigation.navigate('Settings')}
        >
          <Icon name="settings-outline" size={30} color="#333" />
        </TouchableOpacity>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/120' }} 
            style={styles.profileImage} 
          />
          <Text style={styles.managerName}>Sam</Text>
          <Text style={styles.managerRole}>Hotel Manager</Text>
        </View>

        {/* Task Management Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Task Management</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Assign Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>View Assigned Tasks</Text>
          </TouchableOpacity>
        </View>

        {/* Staff Performance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Staff Performance</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>View Performance Reports</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: 20,
  },
  darkSafeContainer: {
    flex: 1,
    backgroundColor: '#2c3e50', // Dark mode background color
    paddingTop: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingBottom: 40, // Ensure padding at the bottom for better scroll experience
  },
  themeToggleButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginTop: 60,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#FFA500',
  },
  managerName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 5,
  },
  managerRole: {
    fontSize: 18,
    color: '#7f8c8d',
  },
  section: {
    marginVertical: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: '#FF8C00', // Orange theme matching the background
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3,
  },
  actionButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default StaffProfile;
