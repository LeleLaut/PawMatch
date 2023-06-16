import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { PaperProvider, Button, Avatar, Text, Card, List, Divider } from 'react-native-paper';

const App = () => {

    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.topHead}>
                    <Text style={styles.headFont}>PROFILE</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Avatar.Image size={92} style={{ alignSelf: "center", marginTop: 30, marginBottom: 10 }} source={require('../../assets/image/orangutan.jpeg')} />
                    <Text style={{ alignSelf: "center", color: "#0f0f0f", fontSize: 16, fontWeight: "bold" }}>Edwin Malik Makarim</Text>
                    <Text style={{ alignSelf: "center", color: "#0f0f0f", fontSize: 11, fontWeight: "300", opacity: 0.5 }}>edwinsiganteng@dumbmail.com</Text>
                    <Card style={{ marginVertical: 30, backgroundColor: "#f0f0f0" }}>
                        <Card.Content>
                            <TouchableOpacity>
                                <List.Item
                                    title="Account"
                                    left={props => <List.Icon {...props} icon="account" />}
                                />
                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity>
                                <List.Item
                                    title="My uploads"
                                    left={props => <List.Icon {...props} icon="cards" />}
                                />
                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity>
                                <List.Item
                                    title="Language"
                                    left={props => <List.Icon {...props} icon="translate" />}
                                />
                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity>
                                <List.Item
                                    title="Notification"
                                    left={props => <List.Icon {...props} icon="bell-badge" />}
                                />
                            </TouchableOpacity>
                        </Card.Content>
                    </Card>
                    <TouchableOpacity>
                        <Button style={{ marginVertical: 30 }} mode="contained" buttonColor="#6E2625" textColor="#f0f0f0" onPress={() => console.log('Pressed')}>Sign out</Button>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0f0f0",
        flex: 1
    },
    topHead: {
        height: 75,
        backgroundColor: '#6E2625',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
    },
    headFont: {
        alignSelf: "center",
        fontSize: 27,
        color: "#f0f0f0",
        opacity: 0.6
    },
    contentContainer: {
        marginHorizontal: 37,
        color: "#0f0f0f"
    },

})

export default App;
