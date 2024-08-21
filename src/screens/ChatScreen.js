import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Messages = [
  {
    id: '1',
    userName: 'Vikram',
    userImg: require('../assets/image/Vikram.png'),
    messageTime: '4 mins ago',
    messageText: 'hello, I am Vikram',
  },
  {
    id: '2',
    userName: 'Suriya',
    userImg: require('../assets/image/Suriya.png'),
    messageTime: '2 hours ago',
    messageText: 'hello, i am Suriya',
  },
  {
    id: '3',
    userName: 'Allu Arjun',
    userImg: require('../assets/image/Arjun.png'),
    messageTime: '1 hours ago',
    messageText: 'Hello , i am phuspa',
  },
  {
    id: '4',
    userName: 'Prabhas',
    userImg: require('../assets/image/Prabhas.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Yesh',
    userImg: require('../assets/image/Yesh.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Vikram',
    userImg: require('../assets/image/Vikram.png'),
    messageTime: '4 mins ago',
    messageText: 'hello, I am Vikram',
  },
  {
    id: '7',
    userName: 'Suriya',
    userImg: require('../assets/image/Suriya.png'),
    messageTime: '2 hours ago',
    messageText: 'hello, i am Suriya',
  },
  {
    id: '8',
    userName: 'Allu Arjun',
    userImg: require('../assets/image/Arjun.png'),
    messageTime: '1 hours ago',
    messageText: 'Hello , i am phuspa',
  },
  {
    id: '9',
    userName: 'Prabhas',
    userImg: require('../assets/image/Prabhas.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '10',
    userName: 'Yesh',
    userImg: require('../assets/image/Yesh.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '11',
    userName: 'Vikram',
    userImg: require('../assets/image/Vikram.png'),
    messageTime: '4 mins ago',
    messageText: 'hello, I am Vikram',
  },
  {
    id: '12',
    userName: 'Suriya',
    userImg: require('../assets/image/Suriya.png'),
    messageTime: '2 hours ago',
    messageText: 'hello, i am Suriya',
  },
  {
    id: '13',
    userName: 'Allu Arjun',
    userImg: require('../assets/image/Arjun.png'),
    messageTime: '1 hours ago',
    messageText: 'Hello , i am phuspa',
  },
  {
    id: '14',
    userName: 'Prabhas',
    userImg: require('../assets/image/Prabhas.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '15',
    userName: 'Yesh',
    userImg: require('../assets/image/Yesh.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '16',
    userName: 'Vikram',
    userImg: require('../assets/image/Vikram.png'),
    messageTime: '4 mins ago',
    messageText: 'hello, I am Vikram',
  },
  {
    id: '17',
    userName: 'Suriya',
    userImg: require('../assets/image/Suriya.png'),
    messageTime: '2 hours ago',
    messageText: 'hello, i am Suriya',
  },
  {
    id: '18',
    userName: 'Allu Arjun',
    userImg: require('../assets/image/Arjun.png'),
    messageTime: '1 hours ago',
    messageText: 'Hello , i am phuspa',
  },
  {
    id: '19',
    userName: 'Prabhas',
    userImg: require('../assets/image/Prabhas.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '20',
    userName: 'Yesh',
    userImg: require('../assets/image/Yesh.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '21',
    userName: 'Vikram',
    userImg: require('../assets/image/Vikram.png'),
    messageTime: '4 mins ago',
    messageText: 'hello, I am Vikram',
  },
  {
    id: '22',
    userName: 'Suriya',
    userImg: require('../assets/image/Suriya.png'),
    messageTime: '2 hours ago',
    messageText: 'hello, i am Suriya',
  },
  {
    id: '23',
    userName: 'Allu Arjun',
    userImg: require('../assets/image/Arjun.png'),
    messageTime: '1 hours ago',
    messageText: 'Hello , i am phuspa',
  },
  {
    id: '24',
    userName: 'Prabhas',
    userImg: require('../assets/image/Prabhas.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '25',
    userName: 'Yesh',
    userImg: require('../assets/image/Yesh.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '26',
    userName: 'Vikram',
    userImg: require('../assets/image/Vikram.png'),
    messageTime: '4 mins ago',
    messageText: 'hello, I am Vikram',
  },
  {
    id: '27',
    userName: 'Suriya',
    userImg: require('../assets/image/Suriya.png'),
    messageTime: '2 hours ago',
    messageText: 'hello, i am Suriya',
  },
  {
    id: '28',
    userName: 'Allu Arjun',
    userImg: require('../assets/image/Arjun.png'),
    messageTime: '1 hours ago',
    messageText: 'Hello , i am phuspa',
  },
  {
    id: '29',
    userName: 'Prabhas',
    userImg: require('../assets/image/Prabhas.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '30',
    userName: 'Yesh',
    userImg: require('../assets/image/Yesh.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '31',
    userName: 'Vikram',
    userImg: require('../assets/image/Vikram.png'),
    messageTime: '4 mins ago',
    messageText: 'hello, I am Vikram',
  },
  {
    id: '32',
    userName: 'Suriya',
    userImg: require('../assets/image/Suriya.png'),
    messageTime: '2 hours ago',
    messageText: 'hello, i am Suriya',
  },
  {
    id: '33',
    userName: 'Allu Arjun',
    userImg: require('../assets/image/Arjun.png'),
    messageTime: '1 hours ago',
    messageText: 'Hello , i am phuspa',
  },
  {
    id: '34',
    userName: 'Prabhas',
    userImg: require('../assets/image/Prabhas.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '35',
    userName: 'Yesh',
    userImg: require('../assets/image/Yesh.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '36',
    userName: 'Vikram',
    userImg: require('../assets/image/Vikram.png'),
    messageTime: '4 mins ago',
    messageText: 'hello, I am Vikram',
  },
  {
    id: '37',
    userName: 'Suriya',
    userImg: require('../assets/image/Suriya.png'),
    messageTime: '2 hours ago',
    messageText: 'hello, i am Suriya',
  },
  {
    id: '38',
    userName: 'Allu Arjun',
    userImg: require('../assets/image/Arjun.png'),
    messageTime: '1 hours ago',
    messageText: 'Hello , i am phuspa',
  },
  {
    id: '39',
    userName: 'Prabhas',
    userImg: require('../assets/image/Prabhas.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '40',
    userName: 'Yesh',
    userImg: require('../assets/image/Yesh.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const ChatScreen = ({navigation}) => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('MessageScreen', {
                userName: item.userName,
              })
            }>
            <View style={styles.userinfo}>
              <View style={styles.userimgwrapper}>
                <Image style={styles.useriamge} source={item.userImg} />
              </View>
              <View style={styles.textsection}>
                <View style={styles.userinfotext}>
                  <Text style={styles.usernaam}>{item.userName}</Text>
                  <Text style={styles.posttime}>{item.messageTime}</Text>
                </View>
                <Text style={styles.messagenew}>{item.messageText}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  userinfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  userimgwrapper: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 17,
  },
  useriamge: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textsection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 15,
    marginLeft: 10,
    width: 300,
    borderBottomColor: '#cccccc',
  },
  userinfotext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  usernaam: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  posttime: {
    fontSize: 12,
    color: '#666',
  },
  messagenew: {
    fontSize: 14,
    color: '#333333',
  },
});

export default ChatScreen;
