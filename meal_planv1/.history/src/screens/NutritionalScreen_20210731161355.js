import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar  from '../component/SearchBar';

const NutritionalScreen = ({ navigation }) => {
    return(
        <View >
            <Text>Nutritional Screen</Text>
            <SearchBar />
        <Text>Search Screen</Text>
        
        </View>

    );
};
const styles = StyleSheet.create({
    
})

export default NutritionalScreen;