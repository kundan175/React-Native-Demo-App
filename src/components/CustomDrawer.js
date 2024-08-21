import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../assets/image/backgroung_new.png')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/image/kindpng_533328.png')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
              marginTop: 20,
              marginLeft: 10,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Crew Chat
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
