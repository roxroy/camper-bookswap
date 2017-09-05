// We import constants to name our actions' type
import {
  SEARCH_BOOK_TITLE,
  LOAD_SEARCH_BOOKS_SUCCESS,
} from '../actions/constants'

const defaultState = {
  title: '',
  books: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_BOOK_TITLE: 
      return Object.assign({}, state, { 
        title: action.title,
      });

    case LOAD_SEARCH_BOOKS_SUCCESS: 
      return Object.assign({}, state, { 
        books: action.books,
      });

    default:
      return state;
  }
}