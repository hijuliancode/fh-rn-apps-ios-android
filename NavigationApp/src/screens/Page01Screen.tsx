// import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {stylesTheme} from '../theme';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Page01Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Home',
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{flexDirection: 'row'}}>
          <Icon name="snow-outline" size={12} color="#900" />
          <Text>Menu</Text>
        </TouchableOpacity>
      ),
      headerRight: () => <Text>Julian S.</Text>,
    });
  }, [navigation]);

  return (
    <View style={stylesTheme.globalWrapper}>
      <View style={stylesTheme.marginBottom}>
        <Text style={stylesTheme.title}>Page01Screen works!</Text>
      </View>
      <View style={stylesTheme.marginBottom}>
        <Button
          title="Go to Page 02"
          onPress={() => navigation.navigate('Page02Screen')}
        />
      </View>
      <View style={stylesTheme.marginBottom}>
        <Button
          title="Go to Meraki Page"
          onPress={() =>
            navigation.navigate('PagePersonaScreen', {id: 1, name: 'Meraki'})
          }
        />
      </View>
      <View style={stylesTheme.marginBottom}>
        <Button
          title="Go to Ginna Page"
          onPress={() =>
            navigation.navigate('PagePersonaScreen', {id: 2, name: 'Ginna'})
          }
        />
      </View>
      <View style={stylesTheme.marginBottom}>
        <Button
          title="Go to Gumball Page!"
          onPress={() =>
            navigation.navigate('PagePersonaScreen', {id: 3, name: 'Gumball'})
          }
        />
      </View>
    </View>
  );
};
