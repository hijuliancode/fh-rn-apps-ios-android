import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: string;
  size?: number;
  color?: string;
}

export const TouchableIcon = ({iconName, size = 32, color = '#900'}: Props) => {
  return (
    <TouchableOpacity onPress={() => console.log('click on icon', iconName)}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};
