import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function RandomScreen({ navigation }) {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    const [cocktailName, setCocktailName] = useState('');
    const [cocktailImage, setCocktailImage] = useState('');

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setCocktailName(data.drinks[0].strDrink);
                setCocktailImage(data.drinks[0].strDrinkThumb);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{cocktailName}</Text>
            <Image
                source={{ uri: cocktailImage }}
                style={styles.image}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
});
