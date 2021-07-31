import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar  from '../component/SearchBar';
import axios from "axios";
import nal from "../api/nal";

const NutritionalScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const[errorMessage, setErrorMessage] = useState('');
    const searchApi = async (searchTerm) => {
        try{
        const response = await axios.post('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=4745ryZOUpkjufOEPrASN4kU95sMMLgmOkK36ba4',{
            params: {
                limit: 50,
                term: searchTerm
            }
        });
        setResults(response.data.foods);
    } catch (err) {
        setErrorMessage('Something went wrong');
    }
    };

    //searchApi('dosa');

    return(
        <View >
            <Text style={styles.screen}>Nutritional Screen</Text>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
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