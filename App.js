import * as React from 'react';
import { View, ScrollView, ImageBackground, StyleSheet, Image } from 'react-native';
import { Searchbar, Avatar, IconButton, Text, Divider, List, BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  // const MusicRoute = () => <Text>Music</Text>;

  // const AlbumsRoute = () => <Text>Albums</Text>;
  
  // const RecentsRoute = () => <Text>Recents</Text>;
  
  // const NotificationsRoute = () => <Text>Notifications</Text>;
  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
  //   { key: 'albums', title: 'Albums', focusedIcon: 'album' },
  //   { key: 'recents', title: 'Recents', focusedIcon: 'history' },
  //   { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  // ]);

  // const renderScene = BottomNavigation.SceneMap({
  //   music: MusicRoute,
  //   albums: AlbumsRoute,
  //   recents: RecentsRoute,
  //   notifications: NotificationsRoute,
  // });

  return (
    <ScrollView>
      <View style={{ flexDirection: "row" }}>
        <Avatar.Image
          size={40}
          source={require('./assets/images/logo.png')}
          style={{ marginVertical: 20, marginLeft: 20, marginRight: 10, alignSelf: "center", backgroundColor: "transparent" }} />
        <Searchbar
          style={{ flex: 1, marginVertical: 20, marginLeft: 10, marginRight: 5, height: 45, alignSelf: "center" }}
          placeholder="Cari wisata"
          onChangeText={value => { setSearchQuery(value) }}
          value={searchQuery}
          inputStyle={{ fontWeight: "300", opacity: searchQuery == '' ? 0.5 : 1, alignSelf: "center" }} />
        <IconButton
          style={{ marginVertical: 20, marginRight: 10, alignSelf: "center" }}
          icon="heart-outline"
          iconColor={"#0f0f0f"}
          size={25}
          onPress={() => console.log('Pressed')} />
      </View>
      <View style={styles.container}>
        <ImageBackground source={require('./assets/images/PulauBukulimauUnderwater.png')} resizeMode="cover" style={styles.image1}>
          <Text style={styles.text1}>Wisata Air</Text>
          <Text style={styles.text2}>Pulau Bukulimau Underwater</Text>
        </ImageBackground>
      </View>
      <View>
        <Text style={styles.text3}>Destinasi Wisata</Text>
        <Text style={styles.text4}>Pilihan terbaik</Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", rowGap: 20, columnGap: 20, marginHorizontal: 20 }}>
        <ImageBackground source={require('./assets/images/pantai-serdang.png')} resizeMode="cover" style={styles.image2} imageStyle={{ borderRadius: 15 }}>
          <Text style={styles.text5}>Pantai Serdang</Text>
        </ImageBackground>
        <ImageBackground source={require('./assets/images/vihara-patung-dewi-kwan-im.png')} resizeMode="cover" style={styles.image2} imageStyle={{ borderRadius: 15 }}>
          <Text style={styles.text5}>Vihara Patung Dewi Kwan Im</Text>
        </ImageBackground>
        <ImageBackground source={require('./assets/images/replika-sd-laskar-pelangi.png')} resizeMode="cover" style={styles.image2} imageStyle={{ borderRadius: 15 }}>
          <Text style={styles.text5}>Replika SD Laskar Pelangi</Text>
        </ImageBackground>
        <ImageBackground source={require('./assets/images/pantai-nyiur-melambai.png')} resizeMode="cover" style={styles.image2} imageStyle={{ borderRadius: 15 }}>
          <Text style={styles.text5}>Pantai Nyiur Melambai</Text>
        </ImageBackground>
      </View>
      <Text style={{ color: '#0085CC', alignSelf: 'center', marginTop: 30, marginBottom: 50, fontWeight: "700" }}>Lihat lainnya</Text>
      <Divider bold={true} style={{ marginHorizontal: 20 }}></Divider>
      <View>
        <Text style={styles.text3}>Jelajahi Sekarang</Text>
        <Text style={styles.text4}>Pilih kategori yang diminati</Text>
      </View>
      <View style={{ marginBottom: 30 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 20, marginBottom: 20 }}>
          <View>
            <Image style={styles.categoricalIcon} source={require('./assets/icons/categorical/wisata-alam.png')} />
            <Text style={{ fontSize: 10, textAlign: 'center', maxWidth: 50, marginVertical: 5 }}>Wisata Alam</Text>
          </View>
          <View>
            <Image style={styles.categoricalIcon} source={require('./assets/icons/categorical/wisata-air.png')} />
            <Text style={{ fontSize: 10, textAlign: 'center', maxWidth: 50, marginVertical: 5 }}>Wisata Air</Text>
          </View>
          <View>
            <Image style={styles.categoricalIcon} source={require('./assets/icons/categorical/wisata-kuliner.png')} />
            <Text style={{ fontSize: 10, textAlign: 'center', maxWidth: 50, marginVertical: 5 }}>Wisata Kuliner</Text>
          </View>
          <View>
            <Image style={styles.categoricalIcon} source={require('./assets/icons/categorical/wisata-sejarah.png')} />
            <Text style={{ fontSize: 10, textAlign: 'center', maxWidth: 50, marginVertical: 5 }}>Wisata Sejarah</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 20 }}>
          <View>
            <Image style={styles.categoricalIcon} source={require('./assets/icons/categorical/hotel-penginapan.png')} />
            <Text style={{ fontSize: 10, textAlign: 'center', maxWidth: 50, marginVertical: 5 }}>Wisata Sejarah</Text>
          </View>
          <View>
            <Image style={styles.categoricalIcon} source={require('./assets/icons/categorical/layanan-publik.png')} />
            <Text style={{ fontSize: 10, textAlign: 'center', maxWidth: 50, marginVertical: 5 }}>Wisata Sejarah</Text>
          </View>
          <View>
            <Image style={styles.categoricalIcon} source={require('./assets/icons/categorical/travel-transportasi.png')} />
            <Text style={{ fontSize: 10, textAlign: 'center', maxWidth: 50, marginVertical: 5 }}>Wisata Sejarah</Text>
          </View>
          <View>
            <Image style={styles.categoricalIcon} source={require('./assets/icons/categorical/belanja-oleh-oleh.png')} />
            <Text style={{ fontSize: 10, textAlign: 'center', maxWidth: 50, marginVertical: 5 }}>Wisata Sejarah</Text>
          </View>
        </View>
      </View>
      <View>
        <Image style={{ justifyContent: 'flex-start', width: '80%', alignSelf: 'center' }} source={require('./assets/images/kopit19.png')} resizeMode='contain' />
      </View>
      <View>
        <Text style={styles.text3}>Informasi dan Berita</Text>
        <Text style={styles.text4}>Seputar Belitung Timur</Text>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Divider bold={true}></Divider>
        <List.Item
          // titleStyle={{justifyContent: 'flex-start'}}
          title="Adakan Kerjurkab Tinju 2022"
          description="20 Oktober 2021"
          left={() => <Image source={require('./assets/images/kerjurkab.png')} />} />
        <Divider bold={true}></Divider>
        <List.Item
          // titleStyle={{justifyContent: 'flex-start'}}
          title="Wabup Beltim Apresiasi Job Fair Beltim"
          description="15 Oktober 2021"
          left={() => <Image source={require('./assets/images/jobfair.png')} />} />
        <Divider bold={true}></Divider>
        <List.Item
          // titleStyle={{justifyContent: 'flex-start'}}
          title="LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau"
          description="20 Oktober 2021"
          left={() => <Image source={require('./assets/images/lkpm.png')} />} />
        <Divider bold={true}></Divider>
        <Text style={{ color: '#0085CC', alignSelf: 'center', marginTop: 30, marginBottom: 50, fontWeight: "700" }}>Informasi lainnya</Text>
      </View>
      
      {/* <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image1: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 300
  },
  image2: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 200,
    minWidth: '40%'
  },
  categoricalIcon: {
    // minWidth: '10%'
    alignSelf: 'center',

  },
  text1: {
    marginLeft: 20,
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
    opacity: 0.8
  },
  text2: {
    marginLeft: 20,
    marginBottom: 20,
    color: 'white',
    fontSize: 32,
    fontWeight: "700",
    textAlign: 'left',
  },
  text3: {
    marginTop: 30,
    color: '#0f0f0f',
    fontSize: 24,
    textAlign: 'center',
  },
  text4: {
    marginTop: 3,
    marginBottom: 30,
    color: '#0f0f0f',
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.6
  },
  text5: {
    margin: 15,
    color: '#f0f0f0',
    fontSize: 14,
    fontWeight: "700",
    textAlign: 'left',
  },
});

export default App;
