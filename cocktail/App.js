import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function App() {

  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      let drinks = [];

      for (let i = 0; i < letters.length; i++) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letters[i]}`);
        const data = await response.json();
        if (data.drinks) {
          drinks = [...drinks, ...data.drinks];
        }
      }

      setCocktails(drinks);
    };

    fetchCocktails();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={cocktails}
        renderItem={({ item }) => <Text>{item.strDrink}</Text>}
        keyExtractor={item => item.idDrink}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
});
