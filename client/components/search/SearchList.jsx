import React, {PropTypes} from 'react';
import SearchListItem from './SearchListItem';
import { connect } from 'react-redux';

const  SearchList = (props) => {

  const booklist = props.books.map( (book, i) => {
   return  <SearchListItem 
      book={book}
      isLoggedIn={props.isLoggedIn} 
      key={i}
    />
  });

  const searchText = props.books.length 
    ? `Search for : ${props.title}` 
    : '';

  return (
      <div>
        <div className="row">
          <div className="col s12">
            <h5 className="center">{searchText}</h5>
            {booklist}
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(SearchList);
