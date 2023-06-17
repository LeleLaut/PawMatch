// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { IconButton } from 'react-native-paper';
import HomePage from '../Pages/homePage/index';
import UploadPage from '../Pages/uploadPage/index';
import ChatInbox from '../Pages/chatInbox/index';
import ProfilePage from '../Pages/profilePage/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Upload" component={UploadPage} options={{
                tabBarLabel: 'Upload',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cards" color={color} size={26} />
                ),
            }} />
            <Tab.Screen
                name="Chat"
                component={ChatInbox}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="profile" component={ProfilePage} options={{
                tabBarLabel: 'profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
