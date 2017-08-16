import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: '#58B426',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  text: {
    fontSize: 24,
    color: '#EEE',
  },
});

export default function FloatingButton(props) {
  return (
    <TouchableOpacity
      style={{ position: 'absolute', bottom: 15, right: 15 }}
      onPress={props.onPress}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}
