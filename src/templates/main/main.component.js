import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {setUser} from '../../store/actions/user/user.action';
import './main.scss';

export const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user)=> {
      dispatch(setUser(user));
    }
  };
};

class Main extends Component {
  componentWillMount() {
    this.props.setUser({
      name: 'World'
    });
  }

  redirect(url, method) {
    this.props.router[method](url);
  }

  render() {
    return (
      <div className="main">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">Hello Who</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/home">Home</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element,
  router: PropTypes.object,
  setUser: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(Main));
export {Main as MainComponent};
