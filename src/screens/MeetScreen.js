import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

const MeetScreen = props => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity>
        <View style={styles.viewcontainer}>
          <Text style={styles.textcontainer}>New Meeting</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.viewcontainer}>
          <Text style={styles.textcontainer}>Join with a code</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    justifyContent: 'space-around',
  },
  viewcontainer: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    paddingRight: 30,
    borderRadius: 35,
    borderWidth: 2,
  },
  textcontainer: {
    color: 'blue',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default MeetScreen;
