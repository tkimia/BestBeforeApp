import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

export default function ExpirationListItem({ expirationItem }) {
  return (
    <View>
      <Text>{expirationItem.name}</Text>
      <Text>{expirationItem.daysLeft}</Text>
    </View>
  );
}

ExpirationListItem.propTypes = {
  expirationItem: PropTypes.shape({
    name: PropTypes.string,
    daysLeft: PropTypes.string,
  }),
};

ExpirationListItem.defaultProps = {
  expirationItem: {
    name: '',
    daysLeft: '',
  },
};