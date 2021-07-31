import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar  from '../component/SearchBar';
import nal from "../api/nal";

const NutritionalScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    
    return(
        <View >
            <Text style={styles.screen}>Nutritional Screen</Text>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit={() => console.log('Term was Submitted')}
            />
        <Text>Search Screen</Text>
        <Text>We have found {results.length} results</Text>
        </View>

    );
};
const styles = StyleSheet.create({
    screen: {
        marginTop: 50
    }
})

export default NutritionalScreen;