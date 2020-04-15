import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Header from './src/Header';
import Ctain from './src/Ctain';
import Containlist from './list.json';
import Bottombar from './src/Bottombar';
import Drawer from './src/Drawer';


export default function App() {
  return (
    <View style={styles.container}>
      <Drawer />
      <Header />
      <FlatList
        data={Containlist}
        renderItem={({ item }) => <Ctain list={item} />}
        keyExtractor={item => item.title} />
    <Bottombar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f8f8f8',
    flex:1
  },
});