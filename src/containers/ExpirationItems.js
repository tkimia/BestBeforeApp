import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { getExpirationItemsFromService } from '../actions/expiration-items.actions';
import ExpirationList from '../components/ExpirationList';

class ExpirationItems extends Component {
  constructor(props) {
    super(props);

    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    this.props.getExpirationItems();
  }

  renderContent() {
    console.log(this.props.expirationItems);
    return <ExpirationList expirationItems={this.props.expirationItems} />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        { this.renderContent() }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  expirationItems: state.expirationItems,
});

const mapDispatchToProps = dispatchAction => ({
  getExpirationItems: () => dispatchAction(getExpirationItemsFromService()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpirationItems);
