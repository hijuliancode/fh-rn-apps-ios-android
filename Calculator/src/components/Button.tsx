import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  text: string;
  styleColor?: 'GrayDark' | 'GrayLight' | 'Orange';
}

export const Button = ({
  onPress,
  text,
  styleColor = 'GrayDark',
}: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.button, styles[styleColor]]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 100,
    display: 'flex',
    height: 80,
    justifyContent: 'center',
    margin: 5,
    marginHorizontal: 8,
    width: 80,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Button Styles
  GrayDark: {
    backgroundColor: '#414141',
  },
  GrayLight: {
    backgroundColor: '#606060',
  },
  Orange: {
    backgroundColor: '#ff9e0b',
  },
});
