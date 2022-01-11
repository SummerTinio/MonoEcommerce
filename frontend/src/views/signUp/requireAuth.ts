import React from 'react';
import { connect } from 'react-redux';

const myHoc = (ChildComponent) => {
  class ComposedComponent extends React.Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway = () => {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    };

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth.jwt,
    };
  };

  return connect(mapStateToProps)(ComposedComponent);
};

export default myHoc;
