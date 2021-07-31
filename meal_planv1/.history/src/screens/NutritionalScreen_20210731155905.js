import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar  from '../component/SearchBar';

const NutritionalScreen = ({ navigation }) => {
    return(
        <View >
            <SearchBar />
        <Text>
            Already have an account? Sign in
          </Text>
        
        </View>

    );
};
const styles = StyleSheet.create({
    
})

export default NutritionalScreen;