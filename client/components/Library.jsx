import React from 'react';
import Search from './search/Search';
import { connect } from 'react-redux';

function Library() {
  return (
    <div>
     <Search />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(Library);
