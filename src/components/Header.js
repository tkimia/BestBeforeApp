import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: '#58B426',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    color: '#EEE',
  },
};

export default function Header(props) {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.children}</Text>
    </View>
  );
}
