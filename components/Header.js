//imports modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//App container
const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

Header.defaultProps = {
    title: "Shopping Liste",
}

// Stylesheet
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "darkorange", 
  },
  text: {
      color: "#fff",
      fontSize: 23,
      textAlign: "center",
  }
});

// exports the App
export default Header;