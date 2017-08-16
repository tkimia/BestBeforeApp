import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

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
    daysLeft: PropTypes.number,
  }),
};

ExpirationListItem.defaultProps = {
  expirationItem: {
    name: '',
    daysLeft: 0,
  },
};
