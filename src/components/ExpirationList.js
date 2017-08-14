import React, { PropTypes } from 'react';
import { FlatList } from 'react-native';

import ExpirationListItem from './ExpirationListItem';

export default function ExpirationList({ expirationItems }) {
  function renderExpirationItem(expirationItem) {
    return <ExpirationListItem expirationItem={expirationItem} />;
  }

  return (
    <FlatList
      data={expirationItems}
      renderItem={({ item }) => renderExpirationItem(item)}
      keyExtractor={item => item.id}
    />
  );
}

ExpirationList.propTypes = {
  expirationItems: PropTypes.arrayOf(PropTypes.object),
};

ExpirationList.defaultProps = {
  expirationItems: [],
};
