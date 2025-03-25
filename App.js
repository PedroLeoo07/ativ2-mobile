import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to ATIV2</Text>
      <Image source={require("./assets/corinthians.png")} style={styles.image} />
      <Text style={styles.subTitle}>Imagem aleatória</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    margin: 20,
  },

  header: {
    display: 'flex',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subTitle: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'black',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },


});
 