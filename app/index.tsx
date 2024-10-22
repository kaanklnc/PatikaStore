import React from 'react';
import patika_products from '@/src/products.json';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import  PatikaCards from '@/src/components/PatikaCards';
import SearchBar from '@/src/components/SearchBar';

function App(){
    return(
        <SafeAreaView>
        <Text style= {styles.header}>PATIKASTORE</Text>
         <SearchBar />
        <FlatList keyExtractor={item => item.id.toString()} data={patika_products} renderItem={({item}) => <PatikaCards product = {item} />} numColumns={2} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header : {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 10,
        color: 'purple'
    }
})



export default App;