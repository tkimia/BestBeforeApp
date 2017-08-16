import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { getExpirationItemsFromService } from '../actions/expiration-items.actions';
import { ExpirationList, Header, FloatingButton } from '../components';

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
    return <ExpirationList style={{ flex: 1 }} expirationItems={this.props.expirationItems} />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header>Best Before</Header>
        { this.renderContent() }
        <FloatingButton>+</FloatingButton>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const expirationItems = state.expirationItems;

  return { expirationItems };
};

const mapDispatchToProps = dispatchAction => ({
  getExpirationItems: () => dispatchAction(getExpirationItemsFromService()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpirationItems);
