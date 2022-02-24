//imports modules
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

//App container
const App = () => {

  const [items, setItems] = useState([
    {id: uuid(), text: 'Salat'},
    {id: uuid(), text: 'Oksekød'},
    {id: uuid(), text: 'Cabernet Sauvignon'},
    {id: uuid(), text: 'Franske Pilsner'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  };

  const addItem = (text) => {
    if(!text) {
      Alert.alert("Fejl", "Feltet var tomt. Hvad mangler du i køleskabet..?", [{ text: "OK" }]);
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
    
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  )
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

// exports the App
export default App;