import React from 'react';
import NotFound from '../components/NotFound';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <>{this.props.statusCode && <NotFound code={this.props.statusCode} />}</>
    );
  }
}
