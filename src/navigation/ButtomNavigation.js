import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import ChatScreen from '../screens/ChatScreen';
import MeetScreen from '../screens/MeetScreen';
import MessageScreen from '../screens/MessageScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabStack = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#F8F8F8',
        tabBarLabelStyle: {
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 15,
          margin: 0,
          padding: 0,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
        tabBarStyle: {
          backgroundColor: '#633689',
        },
      }}>
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarLabel: 'CHATS',
        }}
      />
      <Tab.Screen
        name="MeetScreen"
        component={MeetScreen}
        options={{
          tabBarLabel: 'MEET',
        }}
      />
    </Tab.Navigator>
  );
};

const ButtomNavigation = props => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#633689',
          elevation: 0,

          shadowOpacity: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={({navigation}) => ({
          title: 'Crew Chat',
          headerTitleAlign: 'center',

          headerLeft: () => (
            <View style={styles.iconContainer}>
              <Icon
                title="Favorite"
                name="navicon"
                size={30}
                color="white"
                onPress={() => navigation.toggleDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={styles.iconContainer}>
              <Icon title="Favorite" name="search" size={22} color="white" />
            </View>
          ),
        })}
      />
      <Stack.Screen name="Second" component={MeetScreen} />
      <Stack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={({route}) => ({
          title: route.params.userName,

          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 50,
  },
});

export default ButtomNavigation;
