import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function AccountScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name={'person-circle-outline'} size={100} color={'tomato'} />
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>ME</Text>
        </View>
    );
}