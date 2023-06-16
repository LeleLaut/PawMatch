import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Dimensions, ScrollView } from 'react-native';
import { IconButton, Card, LeftContent, Button } from 'react-native-paper';


const App = () => {
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
                />
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
                <Card>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Title title="Card Title" subtitle="Card Subtitle"/>
                    <Card.Content>
                        <Text variant="titleLarge">Card title</Text>
                        <Text variant="bodyMedium">Card content</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Title title="Card Title" subtitle="Card Subtitle" />
                    <Card.Content>
                        <Text variant="titleLarge">Card title</Text>
                        <Text variant="bodyMedium">Card content</Text>
                    </Card.Content>
                </Card>
            </View>
        </View>
    );
};

export default App;