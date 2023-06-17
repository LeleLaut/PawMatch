import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { IconButton, Avatar, Card, LeftContent, Button } from 'react-native-paper';

const ChatPage = () => {
    return (

        <View style={{ flex: 1 }}>
            <View style={{
                backgroundColor: '#6E2625', flexDirection: 'row', height: 75, borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20, justifyContent: 'space-between', alignItems: 'center'
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <IconButton
                        icon="chevron-left"
                        iconColor='white'
                        containerColor='#6E2625'
                        size={24}
                        onPress={() => console.log('Pressed')}
                    />
                    <Avatar.Image size={42} source={require('../../assets/image/foto.jpg')} />
                </View>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
                    Piaa
                </Text>

                <View style={{ flexDirection: 'row' }}>
                    <IconButton
                        icon="video"
                        iconColor='white'
                        containerColor='#6E2625'
                        size={24}
                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        icon="phone"
                        iconColor='white'
                        containerColor='#6E2625'
                        size={24}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                {/* Add your chat bubbles or messages here */}
                <ScrollView>
                    <View style={styles.chatme}>
                        <Text style={{ fontSize: 16, color: "#fff", }} >hi aisudgiusfbyiucdyaisuyd</Text>
                    </View>
                    <View style={styles.chatyou}>
                        <Text style={{ fontSize: 16, color: "#000", }} >hi juga asiodutvisudaouidbyaosiudbyaoiudby</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingBottom: 10,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#ffffff',
            }}>
                <TouchableOpacity
                    onPress={() => console.log('Attachment')}
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 5,
                        borderColor: '#6E2625',
                        marginRight: 5,
                    }}
                >
                    <IconButton
                        icon="attachment"
                        color="#6E2625"
                        size={24}
                        onPress={() => console.log('Attachment')}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <TextInput
                        onChangeText={text => setMessage(text)}
                        placeholder="Type a message"
                        style={{
                            height: 40,
                            marginVertical: 5,
                            paddingHorizontal: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: 'gray',
                        }}
                    />
                </View>
                <IconButton
                    icon="send"
                    iconColor='white'
                    containerColor='#6E2625'
                    size={24}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    chatme: {
        backgroundColor: "#702625",
        padding: 10,
        marginLeft: '45%',
        borderRadius: 5,
        //marginBottom: 15,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        //maxWidth: 500,
        borderRadius: 20,
    },
    chatyou: {
        backgroundColor: "#dedede",
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-start',
        //maxWidth: 500,
        //padding: 14,

        //alignItems:"center",
        borderRadius: 20,
    }
});



export default ChatPage;

