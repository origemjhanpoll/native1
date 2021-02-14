import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

const Circle = () => {
  const border = 200;
  return (
    <View
      style={{
        width: border,
        height: border,
        backgroundColor: 'red',
        borderRadius: border,
      }}
    />
  );
};

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Circle />
    </SafeAreaView>
  );
};

export default Home;
