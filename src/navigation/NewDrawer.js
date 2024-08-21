import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ButtomNavigation from '../navigation/ButtomNavigation';
import SettingScreen from '../screens/SettingScreen';
import CustomDrawer from '../components/CustomDrawer';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const Drawer = createDrawerNavigator();

const NewDrawer = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {marginLeft: -35, fontSize: 18, fontWeight: 'bold'},
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={ButtomNavigation}
          options={{
            headerShown: false,
            drawerIcon: ({color}) => (
              <Icon
                title="Home"
                name="home"
                size={25}
                color={color}
                onPress={() => alert('Make as Favorite')}
                style={{marginRight: 15}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: '#633689',
              elevation: 0,

              shadowOpacity: 0,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            drawerIcon: ({color}) => (
              <Icon
                title="Home"
                name="user"
                size={25}
                color={color}
                onPress={() => alert('Make as Favorite')}
                style={{marginRight: 15}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerStyle: {
              backgroundColor: '#633689',
              elevation: 0,

              shadowOpacity: 0,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            drawerIcon: ({color}) => (
              <Icon
                title="Home"
                name="gear"
                size={25}
                color={color}
                onPress={() => alert('Make as Favorite')}
                style={{marginRight: 15}}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 50,
  },
});

export default NewDrawer;
