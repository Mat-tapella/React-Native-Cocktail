import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cocktailData = await Promise.all(letters.map(async letter => {
                const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                return data.drinks;
            }));
            setCocktails(cocktailData.flat());
        };
        fetchData();
    }, []);

    const renderCocktail = ({ item }) => {
        return (
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={{ uri: item.strDrinkThumb }}
                />
                <Text style={styles.title}>{item.strDrink}</Text>
            </View>
        );
    };

    return (
        <FlatList
            data={cocktails}
            renderItem={renderCocktail}
            keyExtractor={item => item.idDrink}
        />
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 200,
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
