import React from "react";
import { View, Text } from "react-native";

const NutritionalScreen = ({ navigation }) => {
    return(
        <View style={styles.background}>
        <Text>
            Already have an account? Sign in
          </Text>
        
        </View>

    );
};
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE'
    }
})

export default NutritionalScreen;