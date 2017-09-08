import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Hello {this.props.user.name}!</h1>
        <p className="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.</p>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

Home.propTypes = {
  user: PropTypes.object
};

export default withRouter((connect(mapStateToProps, null)(Home)));
export {Home as HomeComponent};
