import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({}) => {
    return(
        <View style={styles.background}>
            <Feather name="search" />
            <TextInput placeholder="Search"/>
        </View>

    );
};
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#D3D3D3',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1
    }
})

export default SearchBar;