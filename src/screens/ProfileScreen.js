import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const ProfileScreen = () => {
  return (
    <View style={styles.mainBody}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/image/Yesh.png')}
            style={{
              marginTop: 20,
              width: '50%',
              height: 180,
              resizeMode: 'contain',
              margin: 20,
              borderRadius: 200,
            }}
          />
        </View>
        <View style={{marginLeft: 45, marginRight: 45}}>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 18 : 18,
              lineHeight: 25,
            }}>
            Name
          </Text>
        </View>
        <View style={styles.SectionStyle}>
          <Icon
            title="Favorite"
            name="user"
            size={22}
            color="black"
            style={{marginTop: 7, marginRight: 10}}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="Your Name"
            placeholderTextColor="black"
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        <View style={{marginLeft: 45, marginRight: 45}}>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 18 : 18,
              lineHeight: 25,
            }}>
            About
          </Text>
        </View>
        <View style={styles.SectionStyle}>
          <Icon
            title="Favorite"
            name="info"
            size={22}
            color="black"
            style={{marginTop: 9, marginRight: 14}}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="About"
            placeholderTextColor="black"
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        <View style={{marginLeft: 45, marginRight: 45}}>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 18 : 18,
              lineHeight: 25,
            }}>
            Phone
          </Text>
        </View>
        <View style={styles.SectionStyle}>
          <Icon
            title="Favorite"
            name="phone"
            size={22}
            color="black"
            style={{marginTop: 10, marginRight: 10}}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Your Phone Number"
            placeholderTextColor="black"
            keyboardType="number-pad"
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        <View style={styles.Container}>
          <TouchableOpacity>
            <View style={styles.viewcontainer}>
              <Text style={styles.textcontainer}>Update</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 42,
    marginTop: 5,
    marginLeft: 18,
    marginRight: 30,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
  },
  viewcontainer: {
    paddingVertical: 15,
    paddingHorizontal: 45,
    paddingRight: 40,
    borderRadius: 25,
    borderWidth: 2,
  },
  textcontainer: {
    color: 'blue',

    fontSize: 15,
    fontWeight: '600',
  },
  Container: {
    flexDirection: 'row',
    margin: 8,
    marginTop: 10,
    padding: 2,
    justifyContent: 'space-around',
  },
});

export default ProfileScreen;
