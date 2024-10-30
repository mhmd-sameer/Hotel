import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const SignInPage = ({ navigation }) => {
  const handleGoogleSignIn = () => {
    console.log("Google Sign-In pressed");
  };

  const handleClientLogin = () => {
    navigation.navigate('HomePage'); // Navigate to HomePage for clients
  };

  const handleStaffLogin = () => {
    navigation.navigate('Home'); // Navigate to Home for staff
  };

  const CustomButton = ({ title, onPress, iconName }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconName && <Icon name={iconName} size={24} color="#fff" style={styles.icon} />}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome</Text>

      <CustomButton 
        title="Sign in with Google" 
        onPress={handleGoogleSignIn} 
        iconName="google" 
      />
      <View style={styles.spacer} />

      <CustomButton 
        title="Sign in as Client" 
        onPress={handleClientLogin} 
        iconName="user" 
      />
      <View style={styles.spacer} />

      <CustomButton 
        title="Login as Staff" 
        onPress={handleStaffLogin} 
        iconName="users" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 50,
  },
  spacer: {
    height: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '80%',
    justifyContent: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInPage;
