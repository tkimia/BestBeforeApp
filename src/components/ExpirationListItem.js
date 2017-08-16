import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  name: {
    fontSize: 24,
  },
  timerCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default function ExpirationListItem({ expirationItem }) {
  return (
    <View style={styles.container}>
      <Text>{expirationItem.name}</Text>
      <View style={styles.timerCircle}>
        <Text>{expirationItem.daysLeft()}</Text>
      </View>
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
