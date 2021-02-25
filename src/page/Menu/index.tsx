import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  // Image,
  Text,
  Pressable,
  StatusBar,
  FlatList,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Image, Circle, ClipPath } from 'react-native-svg';

const background = {
  text: 'fundo ',
  uri:
    'https://cdn.dribbble.com/users/6458921/screenshots/15109584/media/691a27d539fbfd3b9d000319ade5daf4.jpg',
};

const { height, width } = Dimensions.get('screen');

const Fundo = () => {
  return (
    <Svg
      x="0"
      y="0"
      style={{ position: 'absolute', height: '40%', width: '100%', zIndex: -1 }}
      viewBox="0 0 360 243"
      preserveAspectRatio="xMidYMid slice">
      <ClipPath id="clip">
        <Path
          fill="#1D5AF5"
          d="M360 183.022C309.86 220.683 247.536 243 180 243C112.464 243 50.1396 220.683 0 183.022V0H360V183.022Z"
        />
      </ClipPath>
      <Image
        y="-60"
        width={width}
        height={width}
        preserveAspectRatio="xMidYMid"
        href={{ uri: background.uri }}
        clipPath="url(#clip)"
      />
    </Svg>
  );
};

const Card = () => {
  return (
    <View style={{ height: width / 1.7, width: width, padding: 16 }}>
      <View
        style={{
          // backgroundColor: 'white',
          flex: 1,
          borderRadius: 16,
          elevation: 2,
        }}></View>
    </View>
  );
};

const Rotinas = () => {
  const icon = 100
  return (
    <View
      style={{
        height: icon,
        width: icon,
        backgroundColor: '#FFF',
        borderRadius: icon,
        elevation: 2
      }}>
      {/* <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 16, elevation: 2 }}></View> */}
    </View>
  );
};

const Menu = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F0F5' }}>
      <Fundo />
      <View style={{ height: 80, width: width }} />
      <Card />
      <View style={{ flex: 1, zIndex: -2, }}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,]}
          style={{ padding: 16, paddingTop: 45, }}
          keyExtractor={(_, index) => String(index)}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
          renderItem={Rotinas}
        />
      </View>
    </SafeAreaView>
  );
};

export default Menu;
