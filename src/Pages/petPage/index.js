import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { IconButton, Button } from 'react-native-paper';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IconButton
          icon="chevron-left"
          iconColor='#6E2625'
          containerColor='white'
          size={24}
          style={styles.backButton}
          onPress={() => console.log('Pressed')}
        />
        <Image source={require('../../assets/image/dog1.jpeg')} style={styles.backgroundImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.Nama}>Roti Tawar</Text>
          <IconButton
            mode='default'
            icon="gender-male"
            size={24}
            iconColor='blue'
            containerColor='#E1FFFD'
          />
        </View>
        <Text style={styles.NamaJenis}>Golden</Text>
        <Text style={styles.NamaJenis}>1 tahun</Text>
        <Text style={styles.NamaJenis}>Cimahi</Text>
        <Text style={styles.Nama}>Status vaksin</Text>
        <View style={styles.contentContainer}>
          <IconButton
            icon="check"
            iconColor='black'
            containerColor='white'
            size={24}
          />
          <Text style={styles.NamaJenis}>Vaksinasi rabies</Text>
        </View>
        <View style={styles.contentContainer}>
          <IconButton
            icon="check"
            iconColor='black'
            containerColor='white'
            size={24}
          />
          <Text style={styles.NamaJenis}>Vaksinasi Hepatitis Infeksius</Text>
        </View>
        <Text style={styles.Nama}>Deskripsi</Text>
        <Text style={styles.NamaJenis}>Abdul umurnya sudah 1 tahun, terawat dengan baik, terlatih dengan baik. Sangat nurut, tapi clingy juga. Untuk perintah-perintah sederhana, seperti “sit” dan “sini”, dia bisa responsif. </Text>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={[styles.button, { alignSelf: 'flex-end', margin:10, width: 150 }]}
        >
          Chat
        </Button>
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
    alignItems: 'center',
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
    bottom: 16,
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

export default App;
