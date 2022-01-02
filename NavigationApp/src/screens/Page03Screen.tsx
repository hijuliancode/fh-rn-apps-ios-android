import {CommonActions} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {stylesTheme} from '../theme';

interface Props extends StackScreenProps<any, any> {}

export const Page03Screen = ({navigation}: Props) => {
  return (
    <View style={stylesTheme.globalWrapper}>
      <View style={stylesTheme.marginBottom}>
        <Text>Page03Screen works!</Text>
      </View>
      <View style={stylesTheme.marginBottom}>
        <Button title="Back" onPress={() => navigation.pop()} />
        <Button title="Back to Page 01" onPress={() => navigation.popToTop()} />

        {/*  */}

        <Button
          title="Go to Page 01"
          onPress={
            () =>
              navigation.dispatch(
                CommonActions.navigate({name: 'Page01Screen'}),
              ) // Also can use with hook useNavigation()
          }
        />
      </View>
    </View>
  );
};
