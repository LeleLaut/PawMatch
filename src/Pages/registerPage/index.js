import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/image/pawmatch.jpg')} style={styles.logo} />
      <Text style={styles.appName}>Pawmatch</Text>
      <Text style={styles.login}>Create your account</Text>
      <TextInput style={styles.input} placeholder="username" placeholderTextColor={'#000000'} />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'#000000'} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor={'#000000'} />
      <TextInput style={styles.input} placeholder="confirm Password" secureTextEntry={true} placeholderTextColor={'#000000'} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  logo: {
    width: 100,
    height: 100,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'normal',
    marginTop: 16,
    marginBottom: 8,
    color: '#702625',
  },
  login: {
    fontSize: 14,
    fontWeight: 'normal',
    marginTop: 8,
    marginBottom: 32,
    color: '#702625',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#00000066',
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
  backButton: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 14,
    top: 16,
    left: 16,
    zIndex: 999,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
});

export default App;