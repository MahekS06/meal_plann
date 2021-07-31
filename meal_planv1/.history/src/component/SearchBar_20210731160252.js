import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchBar = ({}) => {
    return(
        <View style paddingTop='50'
        style={styles.background}>
        <Text>
            Search Screen
          </Text>
        
        </View>

    );
};
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50
    }
})

export default SearchBar;