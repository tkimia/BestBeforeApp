import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default function ExpirationListItem({ expirationItem }) {
  return (
    <View style={styles.container}>
      <Text>{expirationItem.name}</Text>
      <Text>{expirationItem.daysLeft()}</Text>
    </View>
  );
}

ExpirationListItem.propTypes = {
  expirationItem: PropTypes.shape({
    name: PropTypes.string,
    daysLeft: PropTypes.func,
  }),
};

ExpirationListItem.defaultProps = {
  expirationItem: {
    name: '',
    daysLeft: () => 0,
  },
};
