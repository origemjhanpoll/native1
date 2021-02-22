import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
  Pressable,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const listPageDestino = [
  {
    text: 'Carousel ',
    uri:
      'https://cdn.dribbble.com/users/346110/screenshots/10784815/media/d9aef95460878d2ed58fcf6faa3babc0.jpg',
  },
];


const Rotinas = ({ item }: any) => {
  return (
    <Pressable
      onPress={() => Actions.pageCarousel()}
      style={{
        height: 100,
        width: 100,
        backgroundColor: 'red',
      }}>
    </Pressable>
  );
};

const Menu = () => {
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={({ index }: any) => String(index)}
        data={listPageDestino}
        renderItem={Rotinas}
      />
    </SafeAreaView>
  );
};

export default Menu;
