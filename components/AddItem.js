//imports modules
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

//App container
const AddItem = ({title, addItem}) => {

  const [text, setText] = useState('');

  //const onChange = (textValue) => setText(textValue);

  return (
    <View>
        <TextInput 
            placeholder='Tilføj til listen...' 
            style={styles.input} 
            onChangeText={(textValue) => setText(textValue)}
        />
        <TouchableOpacity 
            style={styles.btn} 
            onPress={() => addItem(text)}>
            
            <Text style={styles.btnText}>
                <Icon name="plus" size={20} /> Tilføj</Text>
        </TouchableOpacity>
    </View>
  );
}


// Stylesheet
const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: 'brightorange',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: "darkorange",
        fontSize: 20,
        textAlign: 'center',
    }
});

// exports the App
export default AddItem;