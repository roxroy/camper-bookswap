import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

function Myshelf() {
  return (
    <div>
      <nav>
        <ul className="left hide-on-med-and-down">
          <li><a href="#!">My Books</a></li>
          <li><a href="#!">My Trades</a></li>
          <li><Link to="profile">Profile</Link></li>
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
      </nav>        
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(Myshelf);
