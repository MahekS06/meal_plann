import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar  from '../component/SearchBar';

const NutritionalScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    
    return(
        <View >
            <Text style={styles.screen}>Nutritional Screen</Text>
            <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} />
        <Text>Search Screen</Text>
        <Text>{term}</Text>
        </View>

    );
};
const styles = StyleSheet.create({
    screen: {
        marginTop: 50
    }
})

export default NutritionalScreen;