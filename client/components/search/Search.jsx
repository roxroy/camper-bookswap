import React from 'react';
import Searchbar from './Searchbar';
import SearchList from './SearchList';
import './search.scss';
import { connect } from 'react-redux';
import { searchBookTitle, searchForBook } from '../../actions/search';

class Search extends React.Component {

 constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (title) => {
    this.props.searchBookTitle(title);
    this.props.searchForBook(title);
  }

  render() {
    const bookList = { bars:  this.props.books };

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <SearchList         
          books={bookList.books} 
          title={this.props.title} 
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      title: state.search.title,
      books: state.search.books,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      searchForBook: (title) => { dispatch(searchForBook(title)); },
      searchBookTitle: (title) => { dispatch(searchBookTitle(title)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
