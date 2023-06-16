import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Button, ScrollView } from 'react-native';

const YourScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('.//src/image/Photo.png')} style={styles.backgroundImage} />
        <TouchableOpacity style={styles.backButton}>
          <Image source={require('.//src/image/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <Text style={styles.Nama}>Roti Tawar</Text>
          <Image source={require('.//src/image/man.png')} style={styles.logo} />
        </View>
        <Text style={styles.NamaJenis}>Golden</Text>
        <Text style={styles.NamaJenis}>1 tahun</Text>
        <Text style={styles.NamaJenis}>Cimahi</Text>
        <Text style={styles.Nama}>Status vaksin</Text>
        <View style={styles.contentContainer}>
          <Image source={require('.//src/image/check.png')} style={styles.logo2} />
          <Text style={styles.NamaJenis}>Vaksinasi rabies</Text>
        </View>
        <View style={styles.contentContainer}>
          <Image source={require('.//src/image/check.png')} style={styles.logo2} />
          <Text style={styles.NamaJenis}>Vaksinasi Hepatitis Infeksius</Text>
        </View>
        <Text style={styles.Nama}>Deskripsi</Text>
        <Text style={styles.NamaJenis}>Abdul umurnya sudah 1 tahun, terawat dengan baik, terlatih dengan baik. Sangat nurut, tapi clingy juga. Untuk perintah-perintah sederhana, seperti “sit” dan “sini”, dia bisa responsif. </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  backgroundImage: {
    width: 400,
    height: 400,
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
  contentContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  Nama: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
    marginLeft: 8,
    color: '#000',
  },
  NamaJenis: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    color: '#000',
  },
  logo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 12,
  },
  logo2: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 4,
  },
  button: {
    width: 70,
    height: 40,
    bottom: 16,
    left: '75%',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#702625',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    padding: 8,
    fontWeight: 'bold',
  },
});

export default YourScreen;