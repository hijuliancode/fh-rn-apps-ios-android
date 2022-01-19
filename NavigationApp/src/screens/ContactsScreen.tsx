import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {
    authState: {isLoggedIn, username},
    signIn,
    signOut,
  } = useContext(AuthContext);

  return (
    <View>
      <Text>ContactsScreen</Text>
      {isLoggedIn ? (
        <>
          <Text>{username}</Text>
          <TouchableOpacity onPress={() => signOut()}>
            <Button title="Sign Out" />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity onPress={() => signIn()}>
          <Button title="Sign In" />
        </TouchableOpacity>
      )}
    </View>
  );
};
