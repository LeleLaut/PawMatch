import React from 'react';
import { View, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { IconButton, Card, LeftContent, Button, Text } from 'react-native-paper';

const { width } = Dimensions.get('window');


const HomePage = () => {
  return (
    <ScrollView>

      <View style={{
        backgroundColor: '#6E2625', flexDirection: 'row', height: 75, borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, justifyContent: 'space-between', alignItems: 'center'
      }}>
        <IconButton
          icon="magnify"
          iconColor='black'
          containerColor='white'
          size={24}
          onPress={() => console.log('Pressed')}
          style={{marginHorizontal:20}}
        />

        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
          PawMatch
        </Text>

        <IconButton
          icon="bell-outline"
          iconColor='black'
          containerColor='white'
          size={24}
          onPress={() => console.log('Pressed')}
          style={{marginHorizontal:20}}
        />
      </View>
        <View style={{alignSelf:'center'}}>
        <Image
        source={require('../../assets/image/card2.png')}
        />
        </View>
      <View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginVertical:10}}>
      <Text variant="headlineSmall" style={{ paddingLeft : 10}}>Kucing</Text>
      <Text variant="labelLarge" style={{paddingRight: 15, color: '#6E2625'}}>Lihat Semua</Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 10 }}>
        <Card style={{ width: width * 0.45 , marginBottom:20 , backgroundColor :'white'}}>
          <Card.Cover source={require('../../assets/image/cat1.jpg')} />
          <Card.Content>
            <Text variant="titleLarge">Yanto</Text>
            <Text variant="labelLarge">Scottish Fold</Text>
            <Text variant="labelLarge">2.5 Tahun</Text>
            <Text variant="labelMedium">Bandung</Text>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <IconButton
              mode= 'contained'
              icon="cat"
              size={20}
              iconColor='#6E2625'

            />
            <IconButton
            mode='default'
              icon="gender-male"
              size={20}
              iconColor='blue'
              containerColor='#E1FFFD'
            />
          </Card.Actions>
        </Card>
        <Card style={{ width: width * 0.45 , marginBottom:20 , backgroundColor :'white',}}>
          <Card.Cover source={require('../../assets/image/cat2.jpg')} />
          <Card.Content>
            <Text variant="titleLarge">Yanti</Text>
            <Text variant="labelLarge">Anggora</Text>
            <Text variant="labelLarge">1 Tahun</Text>
            <Text variant="labelMedium">Bandung</Text>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <IconButton
              mode= 'contained'
              icon="cat"
              size={20}
              iconColor='#6E2625'

            />
            <IconButton
              mode='default'
              icon="gender-female"
              size={20}
              iconColor='#FFB6C1'
              containerColor='#FFE9FF'
            />
          </Card.Actions>
        </Card>
        </View>
       
      <View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginVertical:10}}>
      <Text variant="headlineSmall" style={{ paddingLeft : 10}}>Anjing</Text>
      <Text variant="labelLarge" style={{paddingRight: 15, color: '#6E2625'}}>Lihat Semua</Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 10 }}>
        <Card style={{ width: width * 0.45 , marginBottom:20 , backgroundColor :'white'}}>
          <Card.Cover source={require('../../assets/image/dog1.jpeg')} />
          <Card.Content>
            <Text variant="titleLarge">Roti Tawar</Text>
            <Text variant="labelLarge">Golden</Text>
            <Text variant="labelLarge">3.5 Tahun</Text>
            <Text variant="labelMedium">Cimahi</Text>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <IconButton
              mode= 'contained'
              icon="dog"
              size={20}
              iconColor='#6E2625'

            />
            <IconButton
              mode='default'
              icon="gender-male"
              size={20}
              iconColor='blue'
              containerColor='#E1FFFD'
            />
          </Card.Actions>
        </Card>
        <Card style={{ width: width * 0.45 , marginBottom:20 , backgroundColor :'white',}}>
          <Card.Cover source={require('../../assets/image/dog2.jpg')} />
          <Card.Content>
            <Text variant="titleLarge">Siti</Text>
            <Text variant="labelLarge">Pudel</Text>
            <Text variant="labelLarge">2 Tahun</Text>
            <Text variant="labelMedium">Garut</Text>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <IconButton
              mode= 'contained'
              icon="dog"
              size={20}
              iconColor='#6E2625'
              

            />
            <IconButton
              mode='default'
              icon="gender-female"
              size={20}
              iconColor='#FFB6C1'
              containerColor='#FFE9FF'
            />
          </Card.Actions>
        </Card>
        </View>
      </View>
      </View>
        <View style={{alignSelf:'center'}}>
        <Image
        source={require('../../assets/image/card1.png')}
        />
        </View>
    </ScrollView>
  );
};

export default HomePage;