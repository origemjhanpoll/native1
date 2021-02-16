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
import {Actions} from 'react-native-router-flux';

const listPageDestino = [
  {
    text: 'Carousel ',
    uri:
      'https://cdn.dribbble.com/users/346110/screenshots/10784815/media/d9aef95460878d2ed58fcf6faa3babc0.jpg',
  },
];

const Circle = () => {
  const border = 200;
  return (
    <View
      style={{
        width: border,
        height: border,
        backgroundColor: 'blue',
        borderRadius: border,
      }}
    />
  );
};

const PageDestino = ({item}: any) => {
  return (
    <Pressable
      onPress={() => Actions.pageCarousel()}
      style={{
        marginTop: 16,
        marginHorizontal: 16,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={{uri: item.uri}}
        style={{
          borderRadius: 16,
          ...(StyleSheet.absoluteFill as {}),
        }}
      />
      <Text style={{color: 'white', fontSize: 48, fontWeight: 'bold'}}>
        {item.text}
      </Text>
    </Pressable>
  );
};

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item, index) => String(index)}
        data={listPageDestino}
        renderItem={PageDestino}
      />
    </SafeAreaView>
  );
};

export default Home;
