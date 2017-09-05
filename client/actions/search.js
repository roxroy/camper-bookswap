// We import constants to name our actions' type
import {
  SEARCH_BOOK_TITLE,
  LOAD_SEARCH_BOOKS_SUCCESS,
} from './constants';
import searchServices from '../components/search/searchService';


export const searchBookTitle = (title) => {
  return {
    type: SEARCH_BOOK_TITLE,
    title,
  }
}

export const SearchBooksSuccess = (books) => {
  return {
    type: LOAD_SEARCH_BOOKS_SUCCESS,
    books,
  }
}

export const searchForBook = (title) => {
  return (dispatch) => {
    searchServices.search(title)
    .then(books => {
      console.log('searchForBook', books);
        dispatch(SearchBooksSuccess(books));
      });  
  };
};
