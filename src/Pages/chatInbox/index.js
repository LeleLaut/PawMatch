import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { List, IconButton, Button, Divider } from 'react-native-paper';

const Header = () => {
  return (
    <View>
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
                    Chat Inbox
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
      <View>
      <TouchableOpacity
  style={{ flexDirection: 'row', height: 90, alignItems: 'center' }}
  onPress={() => {
  
  }}
>
  <Image
    source={require('../../assets/image/foto.jpg')}
    style={{ width: 40, height: 40, borderRadius: 25, marginLeft: 15, marginTop: 10, padding: 25 }}
  />
  <View style={{ marginLeft: 10, flex:1 }}>
    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Juu</Text>
    <Text style={{ color: 'grey', fontSize: 12 }}>nanti aku kabarin lagi yaa</Text>
  </View>
  <Text style={{ textAlign: 'right', paddingTop: 12, color: 'black', fontWeight: 'bold', paddingRight:20 }}>03.01</Text>
</TouchableOpacity>
<Divider></Divider>
<TouchableOpacity
  style={{ flexDirection: 'row', height: 90, alignItems: 'center' }}
  onPress={() => {
  
  }}
>
  <Image
    source={require('../../assets/image/foto.jpg')}
    style={{ width: 40, height: 40, borderRadius: 25, marginLeft: 15, marginTop: 10, padding: 25 }}
  />
  <View style={{ marginLeft: 10, flex:1 }}>
    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Gall</Text>
    <Text style={{ color: 'grey', fontSize: 12 }}>Gassss</Text>
  </View>
  <Text style={{ textAlign: 'right', paddingTop: 12, color: 'black', fontWeight: 'bold', paddingRight:20 }}>03.01</Text>
</TouchableOpacity>
  <Divider></Divider>
  <TouchableOpacity
  style={{ flexDirection: 'row', height: 90, alignItems: 'center' }}
  onPress={() => {
  
  }}
>
  <Image
    source={require('../../assets/image/foto.jpg')}
    style={{ width: 40, height: 40, borderRadius: 25, marginLeft: 15, marginTop: 10, padding: 25 }}
  />
  <View style={{ marginLeft: 10, flex:1 }}>
    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Piaa</Text>
    <Text style={{ color: 'grey', fontSize: 12 }}>Halo Bang?</Text>
  </View>
  <Text style={{ textAlign: 'right', paddingTop: 12, color: 'black', fontWeight: 'bold', paddingRight:20 }}>03.01</Text>
</TouchableOpacity>
  <Divider></Divider>
  <TouchableOpacity
  style={{ flexDirection: 'row', height: 90, alignItems: 'center' }}
  onPress={() => {
  
  }}
>
  <Image
    source={require('../../assets/image/foto.jpg')}
    style={{ width: 40, height: 40, borderRadius: 25, marginLeft: 15, marginTop: 10, padding: 25 }}
  />
  <View style={{ marginLeft: 10, flex :1 }}>
    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Kett</Text>
    <Text style={{ color: 'grey', fontSize: 12 }}>Gajadi gann</Text>
  </View>
  <Text style={{ textAlign: 'right', paddingTop: 12, color: 'black', fontWeight: 'bold', paddingRight:20 }}>03.01</Text>
</TouchableOpacity>
  <Divider></Divider>
  <TouchableOpacity
  style={{ flexDirection: 'row', height: 90, alignItems: 'center' }}
  onPress={() => {
  
  }}
>
  <Image
    source={require('../../assets/image/foto.jpg')}
    style={{ width: 40, height: 40, borderRadius: 25, marginLeft: 15, marginTop: 10, padding: 25 }}
  />
  <View style={{ marginLeft: 10, flex:1 }}>
    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Jusky</Text>
    <Text style={{ color: 'grey', fontSize: 12 }}>nanti aku kabarin lagi yaa</Text>
  </View>
  <Text style={{ textAlign: 'right', paddingTop: 12, color: 'black', fontWeight: 'bold', paddingRight:20 }}>03.01</Text>
</TouchableOpacity>
  <Divider></Divider>
      </View>
      </View>
  )
};

export default Header;



