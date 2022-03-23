import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import RecordsScreen from "./containers/Records";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";
import Icon from "./components/Icon";

const App = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <NavigationContainer>
            <App.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconFocused;

                        if (route.name === 'HomeScreen') {
                          iconFocused = focused ? "#c0b244" : "#363636";
                        } else if (route.name === 'RecordsScreen') {
                          iconFocused = focused ? "#7444C0" : "#363636";
                        } else if (route.name === 'MessagesScreen') { // data-type and value
                          iconFocused = focused ? "#7444C0" : "#363636";
                        } else if (route.name === 'ProfileScreen') {
                          iconFocused = focused ? "#7444C0" : "#363636";
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconFocused} size={size} color={color} />;
                    },
                }
              )
            }

               	tabBarOptions={{
                    activeTintColor: "#7444C0",
                    inactiveTintColor: "#363636",
                    labelStyle: {
                      fontSize: 14,
                      textTransform: "uppercase",
                      paddingTop: 10
                    },
                    style: {
                      backgroundColor: "#FFF",
                      borderTopWidth: 0,
                      paddingVertical: 30,
                      height: 60,
                      marginBottom: 0,
                      shadowOpacity: 0.05,
                      shadowRadius: 10,
                      shadowColor: "#000",
                      shadowOffset: { height: 0, width: 0 }
                    }
                }}

            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Record" component={RecordsScreen} />
                <Tab.Screen name="Message" component={MessagesScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </App.Navigator>
        </NavigationContainer>
    );
}

export default App;

