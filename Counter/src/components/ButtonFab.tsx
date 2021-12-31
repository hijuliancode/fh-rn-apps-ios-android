import React from 'react';
import {
  TouchableNativeFeedback,
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface ButtonFabProps {
  onPress: () => void;
  text?: string;
  location?: 'left' | 'right';
}

export const ButtonFab = ({
  onPress,
  text = 'Click',
  location = 'right',
}: ButtonFabProps) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[
          styles.fabLocationB,
          location === 'left'
            ? styles.fabLocationLeft
            : styles.fabLocationRight,
        ]}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const android = () => {
    return (
      <View
        style={[
          styles.fabLocationB,
          location === 'left'
            ? styles.fabLocationLeft
            : styles.fabLocationRight,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', true, 32)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{text}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocationB: {
    bottom: 24,
    position: 'absolute',
    borderRadius: 100,
  },
  fabLocationLeft: {
    left: 24,
  },
  fabLocationRight: {
    right: 24,
  },
  fab: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignItems: 'center',
    backgroundColor: '#5856D6',
    borderRadius: 100,
    display: 'flex',
    height: 60,
    justifyContent: 'center',
    padding: 12,
    width: 60,
  },
  fabText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
