import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/RandomScreens';
import SettingsScreen from './screens/AccountScreens';

const homeName = "Home";
const randomName = "Random Cocktail";
const accountName = "Account";

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === randomName) {
                            iconName = focused ? 'wine' : 'wine-outline';

                        } else if (rn === accountName) {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}>

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={randomName} component={DetailsScreen} />
                <Tab.Screen name={accountName} component={SettingsScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;