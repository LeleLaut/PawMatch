import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/image/pawmatch.jpg')} style={styles.logo} />
      <Text style={styles.appName}>Pawmatch</Text>
      <Text style={styles.login}>Login to your account</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'#000000'} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor={'#000000'} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.login}>- or sign in with -</Text>
      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/image/gmail.png')} style={styles.socialLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/image/facebook.png')} style={styles.socialLogo} />
        </TouchableOpacity>
      </View>
      <Text style={styles.login}>Don't have an account? Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'normal',
    marginTop: 16,
    marginBottom: 32,
    color: '#702625',
  },
  login: {
    fontSize: 14,
    fontWeight: 'normal',
    marginTop: 16,
    marginBottom: 32,
    color: '#702625',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#702625',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialLogin: {
    flexDirection: 'row',
  },
  socialButton: {
    marginHorizontal: 10,
    marginBottom: 16,
  },
  socialLogo: {
    width: 44,
    height: 44,
  },
});

export default LoginPage;