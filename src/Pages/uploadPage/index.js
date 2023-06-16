import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { IconButton, Button, Avatar, Text, Card, List, Divider, TextInput, Checkbox, } from 'react-native-paper';

const App = () => {
    const [text1, setText1] = React.useState('');
    const [text2, setText2] = React.useState('');
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);

    return (
        <ScrollView>
            <View >
                <View style={styles.topHead}>
                    <IconButton
                        icon="chevron-left"
                        iconColor='white'
                        containerColor='#6E2625'
                        size={24}
                        onPress={() => console.log('Pressed')}
                    />
                    <Text style={styles.headFont}>UPLOAD</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.headTextInput}>Upload foto hewan peliharaan</Text>
                    <TextInput mode='outlined' placeholder='pilih foto...' style={{ marginTop: 5, marginBottom: 20 }} value={text1} onChangeText={text => setText1(text)} outlineStyle={{ borderRadius: 10 }} contentStyle={{ marginLeft: 10, fontSize: 14 }} disabled />
                    <Text style={styles.headTextInput}>Nama hewan peliharaan</Text>
                    <TextInput mode='outlined' placeholder='Choco' style={{ marginTop: 5, marginBottom: 20 }} value={text1} onChangeText={text => setText1(text)} outlineStyle={{ borderRadius: 10 }} contentStyle={{ marginLeft: 10, fontSize: 14 }} />
                    <Text style={styles.headTextInput}>Umur hewan peliharaan</Text>
                    <TextInput mode='outlined' placeholder='3 tahun / 1 bulan' style={{ marginTop: 5, marginBottom: 20 }} value={text2} onChangeText={text => setText2(text)} outlineStyle={{ borderRadius: 10 }} contentStyle={{ marginLeft: 10, fontSize: 14 }} />
                    <Text style={styles.headTextInput}>Status vaksin hewan peliharaan</Text>
                    <List.Section>
                        <List.Accordion title="pilih..." style={{ borderColor: '#0f0f0f70', borderWidth: 1, borderRadius: 10, height: 60 }}>
                            <Checkbox.Item
                                label='Vaksinasi rabies'
                                status={checked1 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked1(!checked1);

                                }}
                            />
                            <Checkbox.Item
                                label='Vaksinasi Hepatitis Infeksius'
                                status={checked2 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked2(!checked2);
                                }}
                            />
                        </List.Accordion>
                    </List.Section>
                    <Text style={styles.headTextInput}>Upload bukti vaksin</Text>
                    <TextInput mode='outlined' placeholder='pilih foto...' style={{ marginTop: 5, marginBottom: 20 }} value={text1} onChangeText={text => setText1(text)} outlineStyle={{ borderRadius: 10 }} contentStyle={{ marginLeft: 10, fontSize: 14 }} disabled />
                    <Text style={styles.headTextInput}>Deskripsi hewan peliharaan</Text>
                    <TextInput mode='outlined'
                        placeholder='tuliskan deskripsi hewan peliharaanmu di sini... Misalnya: keterampilan hewan peliharaan, keunikan hewan peliharaan, dan sebagainya. '
                        style={{ marginTop: 5, marginBottom: 20, height: 150 }}
                        value={text2}
                        onChangeText={text => setText2(text)}
                        numberOfLines={5}
                        outlineStyle={{ borderRadius: 10 }}
                        textAlignVertical='top'
                        textAlign='left'
                        contentStyle={{ margin: 10, fontSize: 14 }}
                    />
                    <TouchableOpacity>
                        <Button style={{ marginVertical: 30, borderRadius: 10 }} mode="contained" buttonColor="#6E2625" textColor="#f0f0f0" onPress={() => console.log('Pressed')}>Submit</Button>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    topHead: {
        height: 75,
        backgroundColor: '#6E2625',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row'
    },
    headFont: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 27,
        color: "#f0f0f0",
        opacity: 0.6
    },
    contentContainer: {
        marginHorizontal: 20,
        marginTop: 40
    },
    input: {
        height: 10,
        margin: 12,
        borderWidth: 1,
        padding: 10,

    },
    headTextInput: {
        fontSize: 16,
        fontWeight: '700'
    },
    inputText: {

    }
}
)


export default App;