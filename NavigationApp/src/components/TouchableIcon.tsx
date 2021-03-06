import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context';

interface Props {
  iconName: string;
  size?: number;
  color?: string;
}

export const TouchableIcon = ({iconName, size = 32, color = '#900'}: Props) => {
  const {changeFavoriteIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};
